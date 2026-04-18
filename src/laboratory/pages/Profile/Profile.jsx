import { useState, useEffect, useCallback } from 'react';
import { useProfile } from '../../../hooks/useProfile.js';
import { useAuth } from '../../../hooks/useAuth.js';
import { ProfileLayout, FormError } from './profile.styled.js';
import { useNavigate } from 'react-router-dom';
import Avatar from '../Avatar/index.jsx';
import { API_URLS } from '../../../globals/global.urls.js';

const expectedProfile = { first_name: "", last_name: "", email: "", website: "", phone: "", company: "" };

export default function Profile() {
  const { profile, setProfile } = useProfile();
  const { authToken, clearLocalStorage } = useAuth();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [nextLocation, setNextLocation] = useState(null);

  const [formData, setFormData] = useState(() => expectedProfile);
  const [isDirty, setIsDirty] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [missingFields, setMissingFields] = useState([]);
  // State for delete profile modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');
  const [deleteError, setDeleteError] = useState(null);

  // Set initial form data
  useEffect(() => {
    if (profile) {
      // parse the profile data to ensure all expected fields are present
      const parsedProfile = {
        first_name: profile.first_name || '',
        last_name: profile.last_name || '',
        email: profile.email || '',
        website: profile.website || '',
        phone: profile.phone || '',
        company: profile.company || ''
      };
      
      setFormData(() => parsedProfile);
    }
  }, [profile]);

  // Listen for location changes to warn about unsaved changes
  useEffect(() => {
    const handleNavigation = (e) => {
      if (isDirty) {
        e.preventDefault();
        setShowModal(true);
        // This should use React Router's navigation instead of direct link navigation
        // navigate(e.target.href);
        setNextLocation(e.target.href);
      }
    };

    // Attach click handler to all links in the profile page
    const links = document.querySelectorAll('a');
    links.forEach(link => link.addEventListener('click', handleNavigation));
    
    return () => {
      links.forEach(link => link.removeEventListener('click', handleNavigation));
    };
  }, [isDirty]);

  // Mark form as dirty on change
  const handleChange = useCallback((e) => {
    setIsDirty(true);
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleCancelNavigation = useCallback(() => {
    setShowModal(false);
    setNextLocation(null);
  }, []);

  const handleSave = useCallback(async () => {
    if (isSaving) return;

    setError(null);
    setSuccess(null);
    setMissingFields([]);
    const required = ['first_name', 'last_name'];
    const missing = required.filter(f => !formData[f]);
    setMissingFields(missing);

    if (missing.length > 0) {
      setError('Please fill in all required fields.');
      return;
    }

    setIsSaving(true);

    try {
      const response = await fetch(API_URLS.profiles.updateProfile, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        let errorMsg = 'Failed to save profile.';
        
        try {
          const data = await response.json();
          if (data && data.message) errorMsg = data.message;
        } catch {
          setError('An error occurred while saving. Please try again.');
        }
        
        setError(errorMsg);
        setIsSaving(false);
        return;
      }

      const result = await response.json();
      if (result.profile) {
        setProfile(result.profile);
      }

      setIsDirty(false);
      setIsSaving(false);
      setShowModal(false);
      setSuccess('Profile updated successfully.');

      if (nextLocation) {
        setNextLocation(null);
        navigate(nextLocation);
      }
    } catch (err) {
      setError(`An error occurred while saving. Please try again. ${err}`);
      setIsSaving(false);
    }
  }, [isSaving, formData, authToken, setProfile, nextLocation, navigate]);

  const handleDiscardChanges = useCallback(() => {
    if (profile) {
      setFormData({
        first_name: profile.first_name || '',
        last_name: profile.last_name || '',
        email: profile.email || '',
        website: profile.website || '',
        phone: profile.phone || '',
        company: profile.company || ''
      });
    }
    setIsDirty(false);
    setMissingFields([]);
    setError(null);
  }, [profile]);

  const handleDeleteProfile = () => {
    setShowDeleteModal(true);
    setDeletePassword('');
    setDeleteError(null);
  };

  const handleConfirmDelete = async () => {
    if (isSaving) return;
    setDeleteError(null);
    if (!deletePassword) {
      setDeleteError('Password is required.');
      return;
    }

    setIsSaving(true);
    
    try {
      const response = await fetch(API_URLS.authToken.delete, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password: deletePassword })
      });
      if (!response.ok) {
        let errorMsg = 'Failed to delete profile.';
        try {
          const data = await response.json();
          if (data && data.message) errorMsg = data.message;
        } catch {
          setDeleteError('An error occurred while deleting. Please try again.');
        }
        setDeleteError(errorMsg);
        setIsSaving(false);
        return;
      }
      
      clearLocalStorage();
      navigate('/');
    } catch (err) {
      setDeleteError(`An error occurred while deleting. Please try again. ${err}`);
      setIsSaving(false);
    }
  };

  // Cancel delete modal
  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setDeletePassword('');
    setDeleteError(null);
  };
  
  return (
    <ProfileLayout>
      <Avatar />
      <p>Member since: {profile?.created_at ? new Date(profile.created_at).toLocaleDateString() : ''}</p>
      <main>
        {error && (<div className="error-message status-message">{error}</div>)}
        {success && (<div className="success-message status-message">{success}</div>)}
        <form>
          <label>
            First Name:
            <input
              name="first_name"
              value={formData.first_name || ''}
              onChange={handleChange}
              style={missingFields.includes('first_name') ? { border: '1px solid #ff0055' } : {}}
            />
            {missingFields.includes('first_name') && (
              <FormError>First name is required.</FormError>
            )}
          </label>
          <label>
            Last Name:
            <input
              name="last_name"
              value={formData.last_name || ''}
              onChange={handleChange}
              style={missingFields.includes('last_name') ? { border: '1px solid #ff0055' } : {}}
            />
            {missingFields.includes('last_name') && (
              <FormError>Last name is required.</FormError>
            )}
          </label>
          <label>
            Email:
            <input
              name="email"
              value={formData.email || ''}
              disabled
              readOnly
            />
          </label>
          <label>
            Website:
            <input name="website" value={formData.website || ''} onChange={handleChange} />
          </label>
          <label>
            Phone:
            <input name="phone" value={formData.phone || ''} onChange={handleChange} />
          </label>
          <label>
            Company:
            <input name="company" value={formData.company || ''} onChange={handleChange} />
          </label>
          <button type="button" onClick={handleSave} disabled={!isDirty || isSaving}>
            {isSaving ? 'Saving...' : 'Save'}
          </button>
          <button type="button" onClick={handleDiscardChanges} disabled={isSaving}>Discard Changes</button>
          <button type="button" onClick={handleDeleteProfile} disabled={isSaving} className="delete-btn">
            Delete Profile
          </button>
        </form>
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <p>You have unsaved changes. Please save before leaving.</p>
              <button type="button" onClick={handleSave} disabled={isSaving} className="modal-save-btn">Save & Continue</button>
              <button type="button" onClick={handleCancelNavigation} disabled={isSaving} className="modal-cancel-btn">Cancel</button>
            </div>
          </div>
        )}

        {showDeleteModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Confirm Profile Deletion</h3>
              <p>This action cannot be undone. Please enter your password to confirm:</p>
              <input
                type="password"
                value={deletePassword}
                onChange={e => setDeletePassword(e.target.value)}
                placeholder="Password"
                disabled={isSaving}
                className="delete-password-input"
              />
              {deleteError && <div className="delete-error">{deleteError}</div>}
              <button type="button" onClick={handleConfirmDelete} disabled={isSaving || !deletePassword} className="delete-confirm-btn">
                {isSaving ? 'Deleting...' : 'Delete Profile'}
              </button>
              <button type="button" onClick={handleCancelDelete} disabled={isSaving} className="delete-cancel-btn">Cancel</button>
            </div>
          </div>
        )}
      </main>
    </ProfileLayout>
  );
}

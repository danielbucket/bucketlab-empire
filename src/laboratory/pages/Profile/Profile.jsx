import { useState, useEffect } from 'react';
import { useProfile } from '../../../hooks/useProfile.js';
import { jwtDecode } from 'jwt-decode';
import { ProfileLayout, FormError } from './profile.styled.js';
import { useNavigate } from 'react-router-dom';
import Avatar from '../Avatar/index.jsx';
import { API_URLS } from '../../../global.urls.js';
import { constants } from '../../../global.constants.js';

const API_URL = import.meta.env.DEV
  ? 'https://dev.bucketlab.io/profiles/'
  : 'https://api.bucketlab.io/profiles/';

export default function Profile() {
  // Get profile data from context
  const { profile: data } = useProfile();
  const navigate = useNavigate();

  // Set initial form data
  useEffect(() => {
    if (data) {
      resetFormData(data);
    }
  }, [data]);
  
  const [createdAt, setCreatedAt] = useState(() => data?.created_at ? new Date(data.created_at).toLocaleDateString() : '');
  const [showModal, setShowModal] = useState(false);
  const [nextLocation, setNextLocation] = useState(null);
  
  const [sessionData, setSessionData] = useState(() => {
    const token = localStorage.getItem(constants.AUTH_STORAGE_KEY);
    const profile = token ? jwtDecode(token) : null;
    const returnVal = { token, profileID: profile?.id };

    return returnVal || {};
  });

  const [formData, setFormData] = useState(() => {
    return {
      first_name: data?.first_name || '',
      last_name: data?.last_name || '',
      email: data?.email || '',
      website: data?.website || '',
      phone: data?.phone || '',
      company: data?.company || ''
    }
  });
  const [isDirty, setIsDirty] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [missingFields, setMissingFields] = useState([]);
  // State for delete profile modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');
  const [deleteError, setDeleteError] = useState(null);

  const resetFormData = () => {
    setFormData({
      first_name: data.first_name || '',
      last_name: data.last_name || '',
      email: data.email || '',
      website: data.website || '',
      phone: data.phone || '',
      company: data.company || ''
    });
  };

  // Listen for location changes to warn about unsaved changes
  useEffect(() => {
    const handleNavigation = (e) => {
      if (isDirty) {
        e.preventDefault();
        setShowModal(true);
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
  const handleChange = (e) => {
    setIsDirty(true);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCancelNavigation = () => {
    setShowModal(false);
    setNextLocation(null);
  };

  const handleSave = async () => {
    if (isSaving) return;

    setError(null);
    setSuccess(null);
    setMissingFields([]);
    const required = ['first_name', 'last_name', 'email'];
    const missing = required.filter(f => !formData[f]);
    setMissingFields(missing);

    if (missing.length > 0) {
      setError('Please fill in all required fields.');
      return;
    }

    setIsSaving(true);

    try {
      const response = await fetch(`${API_URL}/${sessionData.profileID}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${sessionData.token}`,
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

      // Simulate network delay (remove in production)
      await new Promise((resolve) => setTimeout(resolve, 500));

      setIsDirty(false);
      setIsSaving(false);
      setShowModal(false);
      setSuccess('Profile updated successfully.');

      if (nextLocation) {
        const dest = nextLocation;
        setNextLocation(null);
        if (dest.startsWith('/')) {
          navigate(dest);
        } else {
          window.location.href = dest;
        }
      }
    } catch (err) {
      setError(`An error occurred while saving. Please try again. ${err}`);
      setIsSaving(false);
    }
  };

  const handleDiscardChanges = () => {
    resetFormData();
    setIsDirty(false);
    setMissingFields([]);
    setError(null);
  };

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
      const response = await fetch(`${API_URL}/${sessionData.profileID}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${sessionData.token}`,
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
      
      // Simulate network delay (remove in production)
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      localStorage.removeItem('sessionToken');
      localStorage.removeItem('profileData');
      window.location.href = '/';
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
      <p>Member since: {createdAt ? createdAt : ''}</p>
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
              onChange={handleChange}
              style={missingFields.includes('email') ? { border: '1px solid #ff0055' } : {}}
            />
            {missingFields.includes('email') && (
              <FormError>Email is required.</FormError>
            )}
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

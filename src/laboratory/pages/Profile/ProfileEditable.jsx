import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { ProfileLayout } from './profile.styled.js';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.DEV ? 'https://dev.bucketlab.io' : 'https://api.bucketlab.io';

export default function Profile() {
  // Get initial data from the loader
  const { data } = useLoaderData();
  const navigate = useNavigate();

  // Set initial form data
  useEffect(() => {
    resetFormData(data);
  }, [data]);
  const [createdAt, setCreatedAt] = useState(() => data.created_at ? new Date(data.created_at).toLocaleDateString() : '');
  const [showModal, setShowModal] = useState(false);
  const [nextLocation, setNextLocation] = useState(null);
  const [formData, setFormData] = useState(() => {
    return {
      first_name: data.first_name || '',
      last_name: data.last_name || '',
      email: data.email || '',
      website: data.website || '',
      phone: data.phone || '',
      company: data.company || ''
    }
  });
  const [isDirty, setIsDirty] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

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

  // Save handler
  const handleSave = async () => {
    if (isSaving) return;
    setError(null);
    setSuccess(null);

    //validate that first_name, last_name, email are not empty
    if (!formData.first_name || !formData.last_name || !formData.email) {
      setError('Please fill in all required fields.');
      return;
    }

    setIsSaving(true);

    const token = localStorage.getItem('sessionToken');
    const account = jwtDecode(token);

    const response = await fetch(`${API_URL}/auth/accounts/${account.id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      setIsSaving(true);
      setError(null);
      setSuccess(null);

      try {
        const token = localStorage.getItem('sessionToken');
        const account = jwtDecode(token);
        const response = await fetch(`${API_URL}/auth/accounts/${account.id}`, {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${token}`,
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
          if (nextLocation.startsWith('/')) {
            navigate(nextLocation);
          } else {
            window.location.href = nextLocation;
          }
        }
      } catch (err) {
        setError(`An error occurred while saving. Please try again. ${err}`);
        setIsSaving(false);
      }
    };
  };

  const handleDiscardChanges = () => {
    resetFormData();
    setIsDirty(false);
  };

  return (
    <ProfileLayout>
      <p>
        Member since: {createdAt ? createdAt : ''}
      </p>
      {error && (
        <div className="error-message" style={{ color: '#ff0055', marginBottom: '1rem' }}>
          {error}
        </div>
      )}
      {success && (
        <div className="success-message" style={{ color: '#00ffe7', marginBottom: '1rem' }}>
          {success}
        </div>
      )}
      <form>
        <label>
          First Name:
          <input name="first_name" value={formData.first_name || ''} onChange={handleChange} />
        </label>
        <label>
          Last Name:
          <input name="last_name" value={formData.last_name || ''} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input name="email" value={formData.email || ''} onChange={handleChange} />
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
        <button type="button" onClick={handleDiscardChanges} disabled={isSaving}>Discard</button>
      </form>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>You have unsaved changes. Please save before leaving.</p>
            <button type="button" onClick={handleSave} disabled={isSaving}>Save & Continue</button>
            <button type="button" onClick={handleCancelNavigation} disabled={isSaving}>Cancel</button>
          </div>
        </div>
      )}
    </ProfileLayout>
  );
}

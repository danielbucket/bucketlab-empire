import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { ProfileLayout } from './profile.styled.js';

const API_URL = import.meta.env.DEV ? 'https://dev.bucketlab.io' : 'https://api.bucketlab.io';

export default function Profile() {
  const { data } = useLoaderData();
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

  // Prevent navigation if unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty]);

  // Listen for location changes to warn about unsaved changes
  useEffect(() => {
    const handleNavigation = (event) => {
      if (isDirty) {
        event.preventDefault();
        setShowModal(true);
        setNextLocation(event.target.href);
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
    setIsSaving(true);
    // Replace with your API call
    const token = localStorage.getItem('sessionToken');
    const account = jwtDecode(token);
    console.log('formData: ', formData);
    const response = await fetch(`${API_URL}/auth/accounts/${account.id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      console.error('Failed to save profile:', response.statusText);
      setIsSaving(false);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsDirty(false);
    setIsSaving(false);
    setShowModal(false);
    if (nextLocation) {
      window.location.href = nextLocation;
    }
    // Optionally show a success message
  };

  // Cancel navigation handler
  const handleCancelNavigation = () => {
    setShowModal(false);
    setNextLocation(null);
  };

  return (
    <ProfileLayout>
      <h1>Profile of {formData.first_name} {formData.last_name}</h1>
      <p>
        Member since: {createdAt ? new Date(createdAt).toLocaleDateString() : ''}
      </p>
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
      </form>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>You have unsaved changes. Please save before leaving.</p>
            <button onClick={handleSave} disabled={isSaving}>Save & Continue</button>
            <button onClick={handleCancelNavigation} disabled={isSaving}>Cancel</button>
          </div>
        </div>
      )}
    </ProfileLayout>
  );
}

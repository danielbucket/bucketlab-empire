import React, { useRef, useState } from 'react';

const API_URL = import.meta.env.DEV
  ? 'https://dev.bucketlab.io/auth/accounts/profile-image'
  : 'https://api.bucketlab.io/auth/accounts/profile-image';

export default function ProfileImage({ userId, initialImageUrl }) {
  const [imageUrl, setImageUrl] = useState(initialImageUrl || '');
  const [preview, setPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef();

  // Handle file selection and preview
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setError(null);
    }
  };

  // Upload or update profile image
  const handleSave = async () => {
    const file = fileInputRef.current.files[0];
    if (!file) {
      setError('Please select an image to upload.');
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('userId', userId);
      const token = localStorage.getItem('sessionToken');
      const response = await fetch(`${API_URL}/upload`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Upload failed.');
      setImageUrl(data.imageUrl);
      setPreview(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Delete profile image
  const handleDelete = async () => {
    if (!imageUrl) return;
    setIsLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('sessionToken');
      const response = await fetch(`${API_URL}/delete`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId })
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Delete failed.');
      }
      setImageUrl('');
      setPreview(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="profile-image-manager" style={{ textAlign: 'center', maxWidth: 320, margin: '0 auto' }}>
      <h3>Profile Image</h3>
      <div style={{ marginBottom: '1rem' }}>
        <img
          src={preview || imageUrl || '/default-profile.png'}
          alt="Profile"
          style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', border: '2px solid #007bff' }}
        />
      </div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        disabled={isLoading}
        style={{ marginBottom: '1rem' }}
      />
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
        <button type="button" onClick={handleSave} disabled={isLoading}>
          {imageUrl ? 'Update' : 'Upload'}
        </button>
        {imageUrl && (
          <button type="button" onClick={handleDelete} disabled={isLoading} style={{ color: '#ff0055' }}>
            Delete
          </button>
        )}
      </div>
      {error && <div style={{ color: '#ff0055', marginTop: '0.5rem' }}>{error}</div>}
    </div>
  );
}

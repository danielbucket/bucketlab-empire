import { useRef, useState } from 'react';
import { ProfileImageStyle } from './index.styled';

const API_URL = import.meta.env.DEV
  ? 'https://dev.bucketlab.io/accounts/accnt/avatar'
  : 'https://api.bucketlab.io/accounts/accnt/avatar';

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
    <ProfileImageStyle>
      <div className="image-preview">
        <img
          src={preview || imageUrl || '/default-profile.png'}
          alt="Profile"
        />
      </div>

      <div className="input-wrapper">
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      
        <div className="button-group">
          <button type="button" onClick={handleSave} disabled={isLoading}>
            {imageUrl ? 'Update' : 'Upload'}
          </button>
          {imageUrl && (
            <button type="button" onClick={handleDelete} disabled={isLoading}>
              Delete
            </button>
          )}
        </div>
      </div>
      {error && <div>{error}</div>}
    </ProfileImageStyle>
  );
}

import { useRef, useState, useEffect } from 'react';
import { ProfileImageStyle } from './index.styled';
import defaultProfileImg from './default-profile.jpeg';

const API_URL = import.meta.env.DEV
  ? 'https://dev.bucketlab.io/accounts'
  : 'https://api.bucketlab.io/accounts';

export default function ProfileImage({ accountID, avatarUrl }) {
  const [imageUrl, setImageUrl] = useState(avatarUrl || '');
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef();

  // Fetch avatar image as blob on mount or when accountID changes
  useEffect(() => {
    let objectUrl;
    if (!accountID) return;
    fetch(`${API_URL}/avatar/${accountID}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch avatar');
        return res.blob();
      })
      .then(blob => {
        objectUrl = URL.createObjectURL(blob);
        setImageUrl(objectUrl);
      })
      .catch(() => {
        setImageUrl(defaultProfileImg);
      });
    // Cleanup: revoke object URL when component unmounts or accountID changes
    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [accountID]);

  // Cleanup for preview URL
  useEffect(() => {
    return () => {
      if (preview && preview.startsWith('blob:')) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  // Handle file selection and preview
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setSelectedFile(file);
      setError(null);
    } else {
      setPreview(null);
      setSelectedFile(null);
    }
  };

  // Upload or update profile image
  const handleSave = async () => {
    if (!selectedFile) {
      setError('Please select an image to upload.');
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append('avatar', selectedFile);
      formData.append('accountID', accountID);
      const token = localStorage.getItem('sessionToken');

      const response = await fetch(`${API_URL}/avatar/upload/${accountID}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });
      let objectUrl;
      if (response.ok) {
        // Try to get the blob, but fallback to preview if not valid
        try {
          const blob = await response.blob();
          if (blob && blob.size > 0 && blob.type.startsWith('image/')) {
            objectUrl = URL.createObjectURL(blob);
            setImageUrl(objectUrl);
          } else if (preview) {
            setImageUrl(preview);
          }
        } catch {
          if (preview) setImageUrl(preview);
        }
        setPreview(null);
        setSelectedFile(null);
      } else {
        throw new Error('Upload failed.');
      }
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
      const response = await fetch(`${API_URL}/avatar/${accountID}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
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
          src={preview || imageUrl || defaultProfileImg}
          alt="Profile"
        />
      </div>
      <div className="input-wrapper">
        {(!imageUrl || imageUrl === defaultProfileImg) && (
          <>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <div className="button-group">
              <button type="button" onClick={handleSave} disabled={isLoading}>
                Upload
              </button>
            </div>
          </>
        )}
        {(imageUrl && imageUrl !== defaultProfileImg) && (
          <div className="button-group">
            <button type="button" onClick={handleDelete} disabled={isLoading}>
              Delete
            </button>
          </div>
        )}
      </div>
      {error && <div>{error}</div>}
    </ProfileImageStyle>
  );
}

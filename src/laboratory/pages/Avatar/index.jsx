import { useRef, useState, useEffect } from 'react';
import { ProfileImageStyle } from './index.styled';
import { useAvatar } from '../../../hooks/useAvatar.js';
import { useAuth } from '../../../hooks/useAuth.js';
import { jwtDecode } from 'jwt-decode';
import defaultProfileImg from './default-profile.jpeg';

export default function ProfileImage() {
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef();
  const { account } = useAuth();
  const accountID = account ? account._id : null;
  const { avatarUrl, fetchAvatar, uploadAvatar, deleteAvatar, isLoading, error } = useAvatar();

  // Get accountID from the Profile component if not available from auth context
  const [fallbackID, setFallbackID] = useState(null);
  
  useEffect(() => {
    // Try to get accountID from sessionStorage if not available from auth context
    if (!accountID) {
      const token = localStorage.getItem('sessionToken');
      try {
        if (token) {
          const decoded = jwtDecode(token);
          const id = decoded?.id || decoded?._id || decoded?.sub;
          if (id) {
            setFallbackID(id);
          }
        }
      } catch (err) {
        console.error('Error decoding token:', err);
      }
    }
  }, [accountID]);

  // Use either the accountID from auth context or fallback from token
  const effectiveAccountID = accountID || fallbackID;

  // Track if initial fetch has happened
  const [initialFetchDone, setInitialFetchDone] = useState(false);
  
  // Fetch avatar image only once when component mounts or when accountID changes from undefined to a value
  useEffect(() => {
    if (effectiveAccountID && !initialFetchDone) {
      fetchAvatar(effectiveAccountID);
      setInitialFetchDone(true);
    }
  }, [effectiveAccountID, fetchAvatar, initialFetchDone]);

  // Cleanup for preview URL
  useEffect(() => {
    return () => {
      if (preview && typeof preview === 'string' && preview.startsWith('blob:')) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  // Handle file selection and preview
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
      setSelectedFile(file);
    } else {
      setPreview(null);
      setSelectedFile(null);
    }
  };

  // Upload avatar using context
  const handleSave = async () => {
    if (!selectedFile) {
      return; // Button should be disabled if no file selected
    }
    
    // Use effectiveAccountID which checks multiple sources
    if (!effectiveAccountID) {
      console.error('Upload attempted with undefined accountID');
      return;
    }
    
    const success = await uploadAvatar(selectedFile, effectiveAccountID);
    
    if (success) {
      // Clear the preview and selected file
      setPreview(null);
      setSelectedFile(null);
    }
  };

  // Delete avatar using context
  const handleDelete = async () => {
    if (!avatarUrl || !effectiveAccountID) return;
    
    const success = await deleteAvatar(effectiveAccountID);
    
    if (success) {
      setPreview(null);
    }
  };

  return (
    <ProfileImageStyle>
      <div className={`image-preview ${isLoading ? 'loading' : ''}`}>
        {isLoading && !preview && !avatarUrl && (
          <div className="loading-indicator">
            <span>Loading...</span>
          </div>
        )}
        <img
          src={preview || avatarUrl || defaultProfileImg}
          alt="Profile"
          className={isLoading ? 'loading-opacity' : ''}
        />
      </div>
      <div className="input-wrapper">
        {(!avatarUrl || avatarUrl === defaultProfileImg) && (
          <>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <div className="button-group">
              <button 
                type="button" 
                onClick={handleSave} 
                disabled={isLoading || !selectedFile}
              >
                {isLoading ? 'Uploading...' : 'Upload'}
              </button>
            </div>
          </>
        )}
        {avatarUrl && avatarUrl !== defaultProfileImg && (
          <div className="button-group">
            <button 
              type="button" 
              onClick={handleDelete} 
              disabled={isLoading}
              className="delete-button"
            >
              {isLoading ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        )}
      </div>
      {error && <div className="avatar-error">{error}</div>}
    </ProfileImageStyle>
  );
}

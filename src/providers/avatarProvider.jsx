import { useState, useCallback, useEffect } from 'react';
import { AvatarContext } from '../context/AvatarContext.js';

let API_URL = 'https://api.bucketlab.io';
if (import.meta.env.DEV) {
  API_URL = 'https://dev.bucketlab.io';
};

export function AvatarProvider({ children }) {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Cleanup object URLs when component unmounts or URL changes
  useEffect(() => {
    let currentUrl = avatarUrl;
    return () => {
      if (currentUrl && typeof currentUrl === 'string' && currentUrl.startsWith('blob:')) {
        URL.revokeObjectURL(currentUrl);
      }
    };
  }, [avatarUrl]);

  // Track the last fetched profileID to prevent duplicate fetches
  const [lastFetchedId, setLastFetchedId] = useState(null);

  // Fetch avatar from backend
  const fetchAvatar = useCallback(async (profileID) => {
    if (!profileID) return;
    
    // Skip if already fetching this ID and no error occurred
    if (profileID === lastFetchedId && !error && avatarUrl) {
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    console.log('Fetching avatar for profileID:', profileID);

    try {
      const res = await fetch(`${API_URL}/avatar/${profileID}`);
      if (!res.ok) {
        if (res.status === 404) {
          // No avatar exists yet, not an error
          setAvatarUrl(null);
          setLastFetchedId(profileID);
          setIsLoading(false);
          return;
        }
        throw new Error('Failed to fetch avatar');
      }
      
      const blob = await res.blob();
      
      // Only proceed if there's actual content
      if (!blob || blob.size === 0) {
        setAvatarUrl(null);
        setLastFetchedId(profileID);
        setIsLoading(false);
        return;
      }
      
      // Revoke old URL if it exists
      if (avatarUrl && typeof avatarUrl === 'string' && avatarUrl.startsWith('blob:')) {
        URL.revokeObjectURL(avatarUrl);
      }
      
      const objectUrl = URL.createObjectURL(blob);
      setAvatarUrl(objectUrl);
      setLastFetchedId(profileID);
    } catch (err) {
      console.error('Avatar fetch error:', err);
      setAvatarUrl(null);
      setError(err.message || 'Failed to fetch avatar');
    } finally {
      setIsLoading(false);
    }
  }, [avatarUrl, error, lastFetchedId]);

  // Set avatar from upload
  const setAvatarFromFile = useCallback((file) => {
    if (!file) return;
    
    // Revoke old URL if it exists
    if (avatarUrl && typeof avatarUrl === 'string' && avatarUrl.startsWith('blob:')) {
      URL.revokeObjectURL(avatarUrl);
    }
    
    // If it's already a blob URL string, use it directly
    if (typeof file === 'string' && file.startsWith('blob:')) {
      setAvatarUrl(file);
      return;
    }
    
    // If it's a File/Blob object, create an object URL
    const objectUrl = URL.createObjectURL(file);
    setAvatarUrl(objectUrl);
  }, [avatarUrl]);
  
  // Remove avatar and revoke URL
  const clearAvatar = useCallback(() => {
    if (avatarUrl && typeof avatarUrl === 'string' && avatarUrl.startsWith('blob:')) {
      URL.revokeObjectURL(avatarUrl);
    }
    setAvatarUrl(null);
  }, [avatarUrl]);
  
  // Upload avatar to backend
  const uploadAvatar = useCallback(async (file, profileID) => {
    if (!file || !profileID) {
      setError('Missing file or profile ID');``
      return false;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const formData = new FormData();
      formData.append('avatar', file);
      formData.append('profileID', profileID);
      const token = localStorage.getItem('sessionToken');

      // the url /avatar/* doesn't exist on the backend
      const response = await fetch(`${API_URL}/avatar/upload/${profileID}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Upload failed');
      }
      
      // Successfully uploaded - set the new avatar
      try {
        const blob = await response.blob();
        if (blob && blob.size > 0 && blob.type.startsWith('image/')) {
          setAvatarFromFile(blob);
        } else {
          // If server returned empty/invalid blob, use the file we uploaded
          setAvatarFromFile(file);
        }
        return true;
      } catch (blobError) {
        console.warn('Could not process upload response', blobError);
        setAvatarFromFile(file);
        return true;
      }
    } catch (err) {
      setError(err.message || 'Upload failed');
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [setAvatarFromFile]);
  
  // Delete avatar from backend
  const deleteAvatar = useCallback(async (profileID) => {
    if (!profileID) {
      setError('Missing profile ID');
      return false;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const token = localStorage.getItem('sessionToken');
      const response = await fetch(`${API_URL}/avatar/${profileID}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || 'Delete failed');
      }
      
      // Clear avatar URL
      clearAvatar();
      return true;
    } catch (err) {
      setError(err.message || 'Failed to delete avatar');
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [clearAvatar]);

  return (
    <AvatarContext.Provider value={{ 
      avatarUrl, 
      setAvatarUrl, 
      fetchAvatar, 
      setAvatarFromFile, 
      uploadAvatar,
      deleteAvatar,
      clearAvatar, 
      isLoading, 
      error 
    }}>
      {children}
    </AvatarContext.Provider>
  );
}

import { useState, useCallback, useEffect } from 'react';
import { AvatarContext } from '../context/AvatarContext.js';

const API_URL = import.meta.env.DEV
  ? 'https://dev.bucketlab.io/accounts'
  : 'https://api.bucketlab.io/accounts';

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

  // Track the last fetched accountID to prevent duplicate fetches
  const [lastFetchedId, setLastFetchedId] = useState(null);

  // Fetch avatar from backend
  const fetchAvatar = useCallback(async (accountID) => {
    if (!accountID) return;
    
    // Skip if already fetching this ID and no error occurred
    if (accountID === lastFetchedId && !error && avatarUrl) {
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const res = await fetch(`${API_URL}/avatar/${accountID}`);
      if (!res.ok) {
        if (res.status === 404) {
          // No avatar exists yet, not an error
          console.log('No avatar found for account:', accountID);
          setAvatarUrl(null);
          setLastFetchedId(accountID);
          setIsLoading(false);
          return;
        }
        throw new Error('Failed to fetch avatar');
      }
      
      const blob = await res.blob();
      
      // Only proceed if there's actual content
      if (!blob || blob.size === 0) {
        console.log('Empty blob received for account:', accountID);
        setAvatarUrl(null);
        setLastFetchedId(accountID);
        setIsLoading(false);
        return;
      }
      
      // Revoke old URL if it exists
      if (avatarUrl && typeof avatarUrl === 'string' && avatarUrl.startsWith('blob:')) {
        URL.revokeObjectURL(avatarUrl);
      }
      
      const objectUrl = URL.createObjectURL(blob);
      setAvatarUrl(objectUrl);
      setLastFetchedId(accountID);
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
  const uploadAvatar = useCallback(async (file, accountID) => {
    if (!file || !accountID) {
      setError('Missing file or account ID');
      return false;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const formData = new FormData();
      formData.append('avatar', file);
      formData.append('accountID', accountID);
      const token = localStorage.getItem('sessionToken');

      const response = await fetch(`${API_URL}/avatar/upload/${accountID}`, {
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
  const deleteAvatar = useCallback(async (accountID) => {
    if (!accountID) {
      setError('Missing account ID');
      return false;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const token = localStorage.getItem('sessionToken');
      const response = await fetch(`${API_URL}/avatar/${accountID}`, {
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

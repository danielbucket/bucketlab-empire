import { useEffect, useState, useCallback, useMemo } from "react";
import { ProfileContext } from '../context/ProfileContext.js';
import { AUTH_STORAGE_KEY, PROFILE_STORAGE_KEY } from '../globals/global.constants.js';
import { API_URLS } from '../globals/global.urls.js';

function ProfileProvider({ children }) {
  const [profile, setProfile_] = useState(() => {
    const storedProfile = localStorage.getItem(PROFILE_STORAGE_KEY);
    return storedProfile ? JSON.parse(storedProfile) : null;
  });

  const setProfile = useCallback((data) => {
    if (data) {
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(data));
      setProfile_(data);
    } else {
      localStorage.removeItem(PROFILE_STORAGE_KEY);
      setProfile_(null);
    }
  }, [setProfile_]);

  const getProfile = useCallback(async (token) => {
    if (!token) { return }
    
    try {
      const response = await fetch(API_URLS.profiles.getProfile, {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.status === 'success' && data.profile) {
        setProfile(data.profile);
      } else {
        console.error('ProfileProvider: Failed to fetch profile:', data);
        localStorage.removeItem(PROFILE_STORAGE_KEY);
        setProfile(null);
      }
    } catch (error) {
      console.error('ProfileProvider: Error fetching profile:', error);
      localStorage.removeItem(PROFILE_STORAGE_KEY);
      setProfile(null);
    }
  }, [setProfile]);

  const updateProfile = useCallback(async (token, updatedData) => {
    try {
      const response = await fetch(API_URLS.profiles.updateProfile, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(updatedData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.status === 'success' && data.profile) {
        setProfile(data.profile);
        return { success: true, profile: data.profile };
      } else {
        console.error('Failed to update profile:', data);
        return { success: false, error: data.message || 'Failed to update profile' };
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      return { success: false, error: error.message };
    }
  }, []);

  useEffect(() => {
    const profileToken = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!profileToken) {
      setProfile_(null);
      return;
    }
    
    getProfile(profileToken);
  }, []); // Only run once on mount

  const memoizedValue = useMemo(() => ({
    profile,
    setProfile,
    updateProfile
   }), [profile, updateProfile]);
  
  return (
    <ProfileContext.Provider value={memoizedValue}>
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileProvider;
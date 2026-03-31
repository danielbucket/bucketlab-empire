import { useEffect, useState, useCallback, useMemo } from "react";
import { ProfileContext } from '../context/ProfileContext.js';
import { constants } from '../global.constants.js';
import { API_URLS } from '../global.urls.js';

const PROFILE_STORAGE_KEY = constants.PROFILE_STORAGE_KEY;
const AUTH_STORAGE_KEY = constants.AUTH_STORAGE_KEY;

function ProfileProvider({ children }) {
  const [profile, setProfile_] = useState(() => {
    const storedProfile = localStorage.getItem(PROFILE_STORAGE_KEY);
    return storedProfile ? JSON.parse(storedProfile) : null;
  });

  const setProfile = (data) => {
    if (data) {
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(data));
      setProfile_(data);
    } else {
      localStorage.removeItem(PROFILE_STORAGE_KEY);
      setProfile_(null);
    }
  };

  const getProfile = useCallback((token) => {
    if (!token) {
      console.log('ProfileProvider: No token provided');
      return;
    }
    
    console.log('ProfileProvider: Fetching profile with token:', token.substring(0, 50) + '...');
    try {
      fetch(API_URLS.profiles.getProfile, {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        console.log('ProfileProvider: Response status:', response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('ProfileProvider: Profile data received:', data);
        if (data.status === 'success' && data.profile) {
          console.log('ProfileProvider: Setting profile');
          setProfile(data.profile);
        } else {
          console.error('ProfileProvider: Failed to fetch profile:', data);
          localStorage.removeItem(PROFILE_STORAGE_KEY);
          setProfile(null);
        }
      })
      .catch(error => {
        console.error('ProfileProvider: Error fetching profile:', error);
        localStorage.removeItem(PROFILE_STORAGE_KEY);
        setProfile(null);
      });
    } catch (error) {
      console.error('ProfileProvider: Error parsing stored profile:', error);
      localStorage.removeItem(PROFILE_STORAGE_KEY);
      setProfile(null);
    }
  }, []);

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
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
    try {
      fetch(API_URLS.profiles.getProfileByToken, {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success' && data.profile) {
          setProfile(data.profile);
        } else {
          console.error('Failed to fetch profile:', data);
          localStorage.removeItem(PROFILE_STORAGE_KEY);
          setProfile(null);
        }
      })
      .catch(error => {
        console.error('Error fetching profile:', error);
        localStorage.removeItem(PROFILE_STORAGE_KEY);
        setProfile(null);
      });
    } catch (error) {
      console.error('Error parsing stored profile:', error);
      localStorage.removeItem(PROFILE_STORAGE_KEY);
      setProfile(null);
    }
  }, []);

  useEffect(() => {
    const profileToken = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!profileToken) {
      setProfile_(null);
      return;
    }
    
    getProfile(profileToken);
  }, [getProfile]);

  const memoizedValue = useMemo(() => ({
    profile,
    setProfile
   }), [profile]);
  
  return (
    <ProfileContext.Provider value={memoizedValue}>
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileProvider;
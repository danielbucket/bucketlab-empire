import Profile from '../pages/Profile/Profile.jsx';
import { PRIVATE_URLS } from '../../global.urls.js'
import { constants } from '../../global.constants.js';
import { API_URLS } from '../../global.urls.js';

const TOKEN_STORAGE_KEY = constants.TOKEN_STORAGE_KEY;
const PROFILE_STORAGE_KEY = constants.PROFILE_STORAGE_KEY;

export const profileRoute = {
  path: PRIVATE_URLS.cubicle.profile,
  element: <Profile />,
  loader: async () => {
    const profileToken = localStorage.getItem(PROFILE_STORAGE_KEY);
    if (!profileToken) {
      return null;
    }
    
    try {
      const response = await fetch(API_URLS.profiles.getProfileByToken, {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${profileToken}`
        }
      });
      
      if (!response.ok) {
        console.error('Failed to fetch profile:', response.statusText);
        localStorage.removeItem(PROFILE_STORAGE_KEY);
        return null;
      }
      
      const data = await response.json();
      if (data.status === 'success' && data.profile) {
        return data.profile;
      } else {
        console.error('Failed to fetch profile:', data);
        localStorage.removeItem(PROFILE_STORAGE_KEY);
        return null;
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
      localStorage.removeItem(PROFILE_STORAGE_KEY);
      return null;
    }
  }
};
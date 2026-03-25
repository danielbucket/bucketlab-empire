import Laboratory from '../pages/Laboratory/Laboratory.jsx';
import { jwtDecode } from 'jwt-decode';
import { constants } from '../../global.constants.js';
import { API_URLS } from '../../global.urls.js';

const { AUTH_STORAGE_KEY, PROFILE_STORAGE_KEY } = constants;

export const laboratoryRoute = {
  path: '/laboratory',
  element: <Laboratory />,
  loader: async () => {
    // Token is stored as plain string
    const token = localStorage.getItem(AUTH_STORAGE_KEY);

    if (!token) {
      console.log('[LOADER] No token in localStorage');
      return null;
    }

    try {
      // Validate token is not expired (frontend check only)
      const payload = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (!payload.exp || payload.exp < currentTime) {
        console.log('[LOADER] Token expired');
        localStorage.removeItem(AUTH_STORAGE_KEY);
        localStorage.removeItem(PROFILE_STORAGE_KEY);
        return null;
      }

      console.log('[LOADER] Fetching profile...');
      // Send token to backend - backend will extract payload
      const response = await fetch(API_URLS.profiles.getProfileByToken, {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();

      if (response.ok && data.profile) {
        console.log('[LOADER] Profile fetched successfully:', data.profile);
        return data.profile;
      } else {
        console.log('[LOADER] Profile fetch failed:', data);
        localStorage.removeItem(AUTH_STORAGE_KEY);
        localStorage.removeItem(PROFILE_STORAGE_KEY);
        return null;
      }
    } catch (error) {
      console.error('[LOADER] Error:', error);
      localStorage.removeItem(AUTH_STORAGE_KEY);
      localStorage.removeItem(PROFILE_STORAGE_KEY);
      return null;
    }
  }
};
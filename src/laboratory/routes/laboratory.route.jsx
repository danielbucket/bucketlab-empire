import Laboratory from '../pages/Laboratory/Laboratory.jsx';
import { jwtDecode } from 'jwt-decode';
import { constants } from '../../constants.js';

const TOKEN_STORAGE_KEY = constants.TOKEN_STORAGE_KEY;
const PROFILE_STORAGE_KEY = constants.PROFILE_STORAGE_KEY;

export const laboratoryRoute = {
  path: '/laboratory',
  element: <Laboratory />,
  loader: async () => {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);
    const profileData = localStorage.getItem(PROFILE_STORAGE_KEY);
    
    // Validate token exists and is valid
    if (!token || !profileData) {
      return null;
    }

    try {
      jwtDecode(token);
      return JSON.parse(profileData);
    } catch (error) {
      console.error('Invalid token or profile:', error);
      localStorage.removeItem(TOKEN_STORAGE_KEY);
      localStorage.removeItem(PROFILE_STORAGE_KEY);
      return null;
    }
  }
};
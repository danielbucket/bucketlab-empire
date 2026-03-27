import Root from '../pages/Root/index.jsx';
import { jwtDecode } from 'jwt-decode';
import { redirect } from 'react-router-dom';
import { constants } from '../../global.constants.js';
import { API_URLS } from '../../global.urls.js';

const { AUTH_STORAGE_KEY, PROFILE_STORAGE_KEY } = constants;

export const rootRoute = {
  path: '/laboratory',
  element: <Root />,
    loader: async () => {
    const token = localStorage.getItem(AUTH_STORAGE_KEY);

    if (!token) {
      return redirect('/portal/login');
    }

    try {
      const payload = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (!payload.exp || payload.exp < currentTime) {
        localStorage.removeItem(AUTH_STORAGE_KEY);
        localStorage.removeItem(PROFILE_STORAGE_KEY);
        return redirect('/portal/login');
      }

      const response = await fetch(API_URLS.profiles.getProfileByToken, {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();

      if (response.ok && data.profile) {
        return data.profile;
      } else {
        localStorage.removeItem(AUTH_STORAGE_KEY);
        localStorage.removeItem(PROFILE_STORAGE_KEY);
        return redirect('/portal/login');
      }
    } catch {
      localStorage.removeItem(AUTH_STORAGE_KEY);
      localStorage.removeItem(PROFILE_STORAGE_KEY);
      return redirect('/portal/login');
    }
  }
};
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
    console.log('ROOT LOADER: token from storage:', token ? 'YES' : 'NO');

    if (!token) {
      console.log('ROOT LOADER: No token, redirecting to login');
      return redirect('/portal/login');
    }

    try {
      const payload = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      console.log('ROOT LOADER: Token exp check - exp:', payload.exp, 'current:', currentTime, 'valid:', payload.exp > currentTime);

      if (!payload.exp || payload.exp < currentTime) {
        console.log('ROOT LOADER: Token expired, clearing and redirecting');
        localStorage.removeItem(AUTH_STORAGE_KEY);
        localStorage.removeItem(PROFILE_STORAGE_KEY);
        return redirect('/portal/login');
      }

      // Token is valid - let ProfileProvider handle profile fetching
      console.log('ROOT LOADER: Token valid, allowing ProfileProvider to fetch profile');
      return null;
    } catch (error) {
      console.log('ROOT LOADER: Error in loader:', error.message);
      localStorage.removeItem(AUTH_STORAGE_KEY);
      localStorage.removeItem(PROFILE_STORAGE_KEY);
      return redirect('/portal/login');
    }
  }
};
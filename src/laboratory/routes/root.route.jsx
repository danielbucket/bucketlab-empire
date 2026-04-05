import Root from '../pages/Root/index.jsx';
import { jwtDecode } from 'jwt-decode';
import { redirect } from 'react-router-dom';
import { AUTH_STORAGE_KEY, PROFILE_STORAGE_KEY } from '../../globals/global.constants.js';

export const rootRoute = {
  path: '/laboratory',
  element: <Root />,
    loader: async () => {
    const token = localStorage.getItem(AUTH_STORAGE_KEY);

    if (!token) { return redirect('/portal/login') }

    try {
      const payload = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (!payload.exp || payload.exp < currentTime) {
        localStorage.removeItem(AUTH_STORAGE_KEY);
        localStorage.removeItem(PROFILE_STORAGE_KEY);
        return redirect('/portal/login');
      }

      return null;
    } catch {
      localStorage.removeItem(AUTH_STORAGE_KEY);
      localStorage.removeItem(PROFILE_STORAGE_KEY);
      return redirect('/portal/login');
    }
  }
};
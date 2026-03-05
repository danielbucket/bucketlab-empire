import Laboratory from '../pages/Laboratory/Laboratory.jsx';
import { jwtDecode } from 'jwt-decode';

let API_URL = 'https://api.bucketlab.io/profiles';
if (import.meta.env.DEV) {
  API_URL = 'https://dev.bucketlab.io/profiles';
}

export const laboratoryRoute = {
  path: '/laboratory',
  element: <Laboratory />,
  loader: async () => {
    const token = localStorage.getItem('sessionToken');
    const profile = jwtDecode(token);

    const response = await fetch(`${API_URL}/${profile.id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
      });
    if (!response.ok) {
      localStorage.removeItem('sessionToken');
      localStorage.removeItem('profileData');
      return null;
    }

    const data = await response.json();
    localStorage.setItem('profileData', JSON.stringify(data));
    return data;
  }
};
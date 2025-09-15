import Laboratory from '../pages/Laboratory/Laboratory.jsx';
import { jwtDecode } from 'jwt-decode';

let API_URL = 'https://api.bucketlab.io/accounts';
if (import.meta.env.DEV) {
  API_URL = 'https://dev.bucketlab.io/accounts';
}

export const laboratoryRoute = {
  path: '/laboratory',
  element: <Laboratory />,
  loader: async () => {
    const token = localStorage.getItem('sessionToken');
    const account = jwtDecode(token);

    const response = await fetch(`${API_URL}/${account.id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
      });
    if (!response.ok) {
      localStorage.removeItem('sessionToken');
      localStorage.removeItem('accountData');
      return null;
    }

    const data = await response.json();
    localStorage.setItem('accountData', JSON.stringify(data));
    return data;
  }
};
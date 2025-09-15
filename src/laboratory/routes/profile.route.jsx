import Profile from '../pages/Profile/Profile.jsx';
import { jwtDecode } from 'jwt-decode'; 

let API_URL = 'https://api.bucketlab.io/accounts';
if (import.meta.env.DEV) {
  API_URL = 'https://dev.bucketlab.io/accounts';
}

export const profileRoute = {
  path: '/laboratory/profile',
  element: <Profile />,
  loader: async () => {
    const token = localStorage.getItem('sessionToken');
    const account = jwtDecode(token);

    const accountResponse = await fetch(`${API_URL}/${account.id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    
    if (!accountResponse.ok) {
      localStorage.removeItem('sessionToken');
      localStorage.removeItem('accountData');
      return null;
    }

    const avatarResponse = await fetch(`${API_URL}/avatar/${account.id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (avatarResponse.ok) {
      const blob = await avatarResponse.blob();
      account.avatarUrl = URL.createObjectURL(blob);
    }

    const data = await accountResponse.json();
    localStorage.setItem('accountData', JSON.stringify(data));
    return { data, accountID: account.id, avatarUrl: account.avatarUrl || null};
  }
};
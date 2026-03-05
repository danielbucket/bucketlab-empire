import Profile from '../pages/Profile/Profile.jsx';
import { jwtDecode } from 'jwt-decode'; 

let API_URL = 'https://api.bucketlab.io/profiles';
if (import.meta.env.DEV) {
  API_URL = 'https://dev.bucketlab.io/profiles';
}

export const profileRoute = {
  path: '/laboratory/profile',
  element: <Profile />,
  loader: async () => {
    const token = localStorage.getItem('sessionToken');
    const profile = jwtDecode(token);

    const profileResponse = await fetch(`${API_URL}/${profile.id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    
    if (!profileResponse.ok) {
      localStorage.removeItem('sessionToken');
      localStorage.removeItem('profileData');
      return null;
    }

    const data = await profileResponse.json();
    localStorage.setItem('profileData', JSON.stringify(data));
    return { data, profileID: profile.id };
  }
};
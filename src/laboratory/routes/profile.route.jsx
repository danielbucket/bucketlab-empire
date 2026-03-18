import Profile from '../pages/Profile/Profile.jsx';
import { jwtDecode } from 'jwt-decode'; 
import { urls } from '../../../global.urls.js';

const { profiles: { getProfileById } } = urls;

export const profileRoute = {
  path: '/laboratory/profile',
  element: <Profile />,
  loader: async () => {
    const token = localStorage.getItem('sessionToken');
    const profile = jwtDecode(token);

    const profileResponse = await fetch(getProfileById(profile.id), {
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
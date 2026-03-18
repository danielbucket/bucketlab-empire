import Profile from '../pages/Profile/Profile.jsx';
import { jwtDecode } from 'jwt-decode'; 
import { PRIVATE_URLS, API_URLS } from '../../global.urls.js';

const { profiles: { getProfileById } } = API_URLS;

export const profileRoute = {
  path: PRIVATE_URLS.cubicle.profile,
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
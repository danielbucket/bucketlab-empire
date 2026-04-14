import { API_URLS } from '../../globals/global.urls.js';
import Homelab from '../pages/Homelab/Homelab.jsx';


export const homelabRoute = {
  path: '/laboratory/homelab',
  element: <Homelab />,
  loader: async () => {
    const token = localStorage.getItem('sessionToken');

    const homelabResponse = await fetch(API_URLS.homelab.status, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    
    if (!homelabResponse.ok) {
      return null;
    }

    const data = await homelabResponse.json();
    return { data };
  }
};

import Homelab from '../pages/Homelab/Homelab.jsx';

let API_URL = 'https://api.bucketlab.io/homelab';
if (import.meta.env.DEV) {
  API_URL = 'https://dev.bucketlab.io/homelab';
}

export const homelabRoute = {
  path: '/laboratory/homelab',
  element: <Homelab />,
  loader: async () => {
    const token = localStorage.getItem('sessionToken');

    const homelabResponse = await fetch(`${API_URL}/status`, {
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

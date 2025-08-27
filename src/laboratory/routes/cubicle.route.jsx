import Cubicle from '../pages/Cubicle/Cubicle.jsx';

let LOGIN_URL = 'https://api.bucketlab.io/auth/accounts';
if(import.meta.env.DEV) {
  LOGIN_URL = 'https://dev.bucketlab.io/auth/accounts';
};

export const cubicleRoute = {
  path: '/laboratory/cubicle',
  element: <Cubicle />,
  loader: async () => {
    const accountData = JSON.parse(localStorage.getItem('accountData'));
    const { id } = accountData;

    try {
      const response = await fetch(`${LOGIN_URL}/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch account data');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching account data: ', error);
      throw error;
    }
  }
};
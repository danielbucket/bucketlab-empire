import Cubicle from '../pages/Cubicle/Cubicle.jsx';

let devMode = 'dev';
if (import.meta.env.DEV) {
  devMode = 'api';
}
const API_BASE_URL = `https://${devMode}.bucketlab.io/auth/accounts`;

export const cubicleRoute = {
  path: '/laboratory/cubicle',
  element: <Cubicle />,
  loader: async () => {
    const accountData = JSON.parse(localStorage.getItem('accountData'));
    const { id } = accountData;

    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
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
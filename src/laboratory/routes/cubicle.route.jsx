import Cubicle from '../pages/Cubicle/Cubicle.jsx';

let LOGIN_URL = 'https://api.bucketlab.io/auth/accounts';
if(import.meta.env.DEV) {
  LOGIN_URL = 'https://dev.bucketlab.io/auth/accounts';
};

export const cubicleRoute = {
  path: '/laboratory/cubicle',
  element: <Cubicle />
};
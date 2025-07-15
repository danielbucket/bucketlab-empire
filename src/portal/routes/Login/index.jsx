import Login from './Login.jsx';
import pageImage from '../../assets/images/login-portal04.jpeg';

export const route = {
  path: '/login',
  element: <Login />,
  loader: async () => {
    return {
      pageImage
    };
  }
};
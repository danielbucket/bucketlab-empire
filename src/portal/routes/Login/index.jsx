import Login from './Login.jsx';
import pageImage from '../../assets/images/login-portal04.jpeg';

export const route = {
  path: '/portal/login',
  element: <Login />,
  index: true,
  loader: async () => {
    return {
      pageImage
    };
  }
};
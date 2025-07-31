import Login from '../pages/Login/index.jsx';
import pageImage from '../assets/images/login-portal04.jpeg';

export const loginRoute = {
  path: '/portal/login',
  element: <Login />,
  loader: async () => {
    return {
      pageImage
    };
  }
};
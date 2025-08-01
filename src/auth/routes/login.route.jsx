import Login from '../pages/Login';
import pageImage from '../assets/images/login-portal05.jpeg';

export const loginRoute = {
  path: '/auth/login',
  element: <Login />,
  loader: async () => {
    return {
      pageImage
    };
  }
};
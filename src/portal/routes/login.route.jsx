import Login from '../pages/Login';
import pageImage from '../assets/images/login-portal06.jpg';

export const loginRoute = {
  path: '/portal/login',
  element: <Login />,
  loader: async () => {
    return {
      pageImage
    };
  }
};
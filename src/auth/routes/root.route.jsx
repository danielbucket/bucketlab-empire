import Root from '../pages/Root/index.jsx';
import { loginRoute } from './login.route.jsx';
import { newLoginRoute } from './newLogin.route.jsx';
import ErrorPage from '../pages/ErrorPage/index.jsx';

export const rootRoute = {
  path: '/auth',
  element: <Root />,
  errorElement: <ErrorPage />,
  children: [
    { ...loginRoute, index: true },
    { ...newLoginRoute }
  ]
};
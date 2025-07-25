import Root from './Root.jsx';
import { route as LoginRoute } from '../Login';
import { route as NewLoginRoute } from '../NewLogin/index.jsx';
import ErrorPage from '../ErrorPage/ErrorPage.jsx';

export const route = {
  path: '/portal',
  element: <Root />,
  errorElement: <ErrorPage />,
  children: [
    { ...LoginRoute, index: true },
    { NewLoginRoute }
  ]
};
import Root from './Root.jsx';
import { route as LoginRoute } from '../Login';
import { route as CreateUserRoute } from '../CreateUser';

export const route = {
  path: '/portal',
  element: <Root />,
  children: [
    LoginRoute,
    CreateUserRoute
  ]
};
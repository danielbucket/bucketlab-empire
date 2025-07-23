import Root from './Root.jsx';
import { route as LoginRoute } from '../Login';
import { route as NewTravelerRoute } from '../NewTraveler';

export const route = {
  path: '/portal',
  element: <Root />,
  children: [
    { ...LoginRoute, index: true },
    { ...NewTravelerRoute }
  ]
};
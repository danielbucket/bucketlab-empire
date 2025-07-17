import Root from './Root.jsx';
import { route as LoginRoute } from '../Login';
import { route as InboardingRoute } from '../Inboarding';

export const route = {
  path: '/portal',
  element: <Root />,
  children: [
    LoginRoute,
    InboardingRoute
  ]
};
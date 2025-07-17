import Root from './Root.jsx';
import { route as CubicleRoute } from '../Cubicle';

export const route = {
  path: '/laboratory',
  element: <Root />,
  errorElement: <div>Error loading laboratory root</div>,
  children: [
    { ...CubicleRoute, index: true }
  ]
};
import Root from './Root.jsx';
import { route as CubicleRoute } from '../Cubicle';
import LaboratoryError from '../LaboratoryError/LaboratoryError.jsx';

export const route = {
  path: '/laboratory',
  element: <Root />,
  errorElement: <LaboratoryError />,
  children: [
    { ...CubicleRoute, index: true }
  ]
};
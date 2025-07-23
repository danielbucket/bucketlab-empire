import Root from './Root.jsx';
import { route as MessagesRoute } from '../Messages';
import { route as CubicleRoute } from '../Cubicle';
import { route as FinanceRoute } from '../Finance';
import { route as ProfileRoute } from '../Profile';
import LaboratoryError from '../LaboratoryError/LaboratoryError.jsx';

export const route = {
  path: '/laboratory',
  element: <Root />,
  errorElement: <LaboratoryError />,
  children: [
    { ...CubicleRoute, index: true },
    { ...FinanceRoute },
    { ...MessagesRoute },
    { ...ProfileRoute }
  ]
};
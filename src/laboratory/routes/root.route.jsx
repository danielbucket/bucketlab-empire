import Root from '../pages/Root/index.jsx';
import { messagesRoute } from './messages.route.jsx';
import { cubicleRoute } from './cubicle.route.jsx';
import { financeRoute } from './finance.route.jsx';
import { profileRoute } from './profile.route.jsx';
import LaboratoryError from '../pages/LaboratoryError/index.jsx';

export const rootRoute = {
  path: '/laboratory',
  element: <Root />,
  errorElement: <LaboratoryError />,
  children: [
    { ...cubicleRoute, index: true },
    { ...financeRoute },
    { ...messagesRoute },
    { ...profileRoute }
  ]
};
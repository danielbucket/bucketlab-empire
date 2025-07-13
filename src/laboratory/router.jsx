import Root from './routes/Root';
import Cubicle from './routes/Cubicle';
import ErrorPage from './routes/ErrorPage';

export const router = {
  path: '/laboratory',
  element: <Root />,
  errorElement: <ErrorPage />,
  children: [
    {
      element: <Cubicle />,
      index: true,
    }
  ]
};

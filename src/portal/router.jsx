import Root from './routes/Root';
import { route as HomeRoute } from './routes/Home';
import { route as AboutRoute } from './routes/About';
import { route as PortalRoute } from './routes/Portal';
import { route as ProjectsRoute } from './routes/Projects';
import { route as ContactRoute } from './routes/Contact';
import { route as LoginRoute } from './routes/Login';
import ErrorPage from './routes/ErrorPage';

export const router = {
  path: '/',
  element: <Root />,
  errorElement: <ErrorPage />,
  children: [
    HomeRoute,
    AboutRoute,
    ContactRoute,
    ProjectsRoute,
    PortalRoute,
    LoginRoute,
  ]
};
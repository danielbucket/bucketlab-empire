import { route as RootRoute } from './routes/Root';
import { route as HomeRoute } from './routes/Home';
import { route as AboutRoute } from './routes/About';
import { route as PortalRoute } from './routes/Portal';
import { route as ProjectsRoute } from './routes/Projects';
import { route as ContactRoute } from './routes/Contact';
import ErrorPage from './routes/ErrorPage';

export const router = Object.assign({}, RootRoute, {
  errorElement: <ErrorPage />,
  children: [
    { ...HomeRoute, index: true },
    AboutRoute,
    ContactRoute,
    ProjectsRoute,
    PortalRoute
  ]
});
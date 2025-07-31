import { rootRoute } from './routes/root.router.jsx';
import { homeRoute } from './routes/home.route.jsx';
import { aboutRoute } from './routes/about.route.jsx';
import { portalRoute } from './routes/portal.route.jsx';
import { projectsRoute } from './routes/projects.route.jsx';
import { contactRoute } from './routes/contact.route.jsx';
import { mythtaTRoute } from './routes/mythtaT.route.jsx';
import ErrorPage from './pages/ErrorPage';

export const publicRouter = Object.assign({}, rootRoute, {
  errorElement: <ErrorPage />,
  children: [
    { ...homeRoute, index: true },
    aboutRoute,
    contactRoute,
    projectsRoute,
    portalRoute,
    mythtaTRoute
  ]
});
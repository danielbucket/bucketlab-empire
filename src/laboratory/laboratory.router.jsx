import { rootRoute } from './routes/root.route.jsx';
import { cubicleRoute } from './routes/cubicle.route.jsx';
import { profileRoute } from './routes/profile.route.jsx';
import { watchlistRoute } from './routes/watchlist.route.jsx';
import { messagesRoute } from './routes/messages.route.jsx';
import { homestarRunnerRoute } from './routes/homestarRunner.route.jsx';
import ProtectedRoute from '../components/ProtectedRoute.jsx';
import LaboratoryError from './pages/LaboratoryError/index.jsx';

export const laboratoryRoutes = [
  {
    ...rootRoute,
    element: <ProtectedRoute>{rootRoute.element}</ProtectedRoute>,
    errorElement: <LaboratoryError />,
    children: [
      { ...cubicleRoute, index: true },
      profileRoute,
      watchlistRoute,
      messagesRoute,
      homestarRunnerRoute
    ]
  }
];

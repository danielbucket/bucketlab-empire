import { rootRoute } from './routes/root.route.jsx';
import { cubicleRoute } from './routes/cubicle.route.jsx';
import { labsRoute } from './routes/labs.route.jsx';

import { profileRoute } from './routes/profile.route.jsx';
import { commsRoute } from './routes/comms.route.jsx';
import { homelabRoute } from './routes/homelab.route.jsx';
import { resumeRoute } from './routes/resume.route.jsx';
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
      commsRoute,
      homelabRoute,
      resumeRoute,
      labsRoute
    ]
  }
];

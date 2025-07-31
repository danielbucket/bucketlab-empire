import { createBrowserRouter } from 'react-router-dom';
import { publicRouter } from './public/public.routes.jsx';
import { authRouter } from './auth/auth.routes.jsx';
import { laboratoryRouter } from './laboratory/laboratory.routes.jsx';

const router = createBrowserRouter([
  publicRouter,
  authRouter,
  laboratoryRouter
]);

export default router; 
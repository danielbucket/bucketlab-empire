import { createBrowserRouter } from 'react-router-dom';
import { publicRouter } from './public/public.router.jsx';
import { authRouter } from './auth/auth.router.jsx';
import { laboratoryRouter } from './laboratory/laboratory.router.jsx';

const router = createBrowserRouter([
  publicRouter,
  authRouter,
  laboratoryRouter
]);

export default router; 
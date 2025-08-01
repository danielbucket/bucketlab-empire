import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAuth } from './providers/authProvider.jsx'
import { publicRouter } from './public/public.router.jsx';
import { authRouter } from './auth/auth.router.jsx';
import { laboratoryRouter } from './laboratory/laboratory.router.jsx';

export default function Routes() {
  const { token } = useAuth();

  const router = createBrowserRouter([
    {...publicRouter},
    {...(!token ? authRouter : [])},
    {...laboratoryRouter}
  ]);

  return <RouterProvider router={router} />;
};
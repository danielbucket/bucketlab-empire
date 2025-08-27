import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAuth } from './hooks/useAuth.js';
import { publicRoutes } from './public/public.router.jsx';
import { authRoutes } from './auth/auth.router.jsx';
import { laboratoryRoutes } from './laboratory/laboratory.router.jsx';

export default function Routes() {
  const { isAuthenticated } = useAuth();

  const router = createBrowserRouter([
    ...publicRoutes,
    ...authRoutes,
    ...(isAuthenticated ? laboratoryRoutes : [])
  ]);

  return <RouterProvider router={router} />;
};
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth.js';
import { publicRoutes } from './public/public.router.jsx';
import { authRoutes } from './auth/auth.router.jsx';
import { laboratoryRoutes } from './laboratory/laboratory.router.jsx';

export default function Routes() {
const { isAuthenticated } = useAuth();


const catchAllRoute = {
  path: '*',
  element: isAuthenticated
    ? <div>404: Page not found</div>
    : <Navigate to="/auth/login" replace />
};

const router = createBrowserRouter([
  ...publicRoutes,
  ...authRoutes, // Always include auth routes (login, register, etc.)
  ...(isAuthenticated ? laboratoryRoutes : []),
  catchAllRoute
]);

  return <RouterProvider router={router} />;
};
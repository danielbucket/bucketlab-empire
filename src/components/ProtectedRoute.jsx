import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, token } = useAuth();
  const location = useLocation();

  // If not authenticated, redirect to login with current location
  if (!isAuthenticated || !token) {
    return <Navigate 
      to="/auth/login"
      state={{ from: location.pathname }}
      replace 
    />;
  }

  return children;
};

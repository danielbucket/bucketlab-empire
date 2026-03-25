import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, token } = useAuth();
  const location = useLocation();

  if (!isAuthenticated || !token) {
    return <Navigate 
      to="/portal/login"
      state={{ from: location.pathname }}
      replace 
    />;
  };

  return children;
};

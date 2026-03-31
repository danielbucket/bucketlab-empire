import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';

export default function ProtectedRoute({ children }) {
  const { auth, isAuthenticated } = useAuth();
  const location = useLocation();

  console.log('ProtectedRoute render: auth=', auth ? 'YES' : 'NO', 'isAuthenticated=', isAuthenticated);

  if (!isAuthenticated) {
    console.log('ProtectedRoute REDIRECTING to login');
    return <Navigate 
      to="/portal/login"
      state={{ from: location.pathname }}
      replace 
    />;
  }

  return children;
};

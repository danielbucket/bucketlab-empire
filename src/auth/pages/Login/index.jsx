import { useLoaderData, useNavigate, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import { LoginStyle, NavStyle } from './index.styled.js';
import { useAuth } from '../../../hooks/useAuth.js';

export default function Login() {
  const { pageImage } = useLoaderData();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/laboratory" replace />;
  }

  return (
    <LoginStyle $pageImage={pageImage}>
      <LoginForm />
      <NavStyle>
        <div className="login-opts">
          <button onClick={() => navigate('/auth/new-login')}>
            <span>Join the BucketLab Empire.</span>
          </button>
        </div>
        <div className="go-back-btn">
          <button onClick={() => navigate('/portal')}>
            <span>Go Back</span>
          </button>
        </div>
      </NavStyle>
    </LoginStyle>
  );
};
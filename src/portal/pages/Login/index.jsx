import { useLoaderData, useNavigate, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm/index.jsx';
import { LoginStyle, NavStyle } from './index.styled.js';
import { useAuth } from '../../../hooks/useAuth.js';
import { PUBLIC_URLS, PRIVATE_URLS } from '../../../global.urls.js';

export default function Login() {
  const { pageImage } = useLoaderData();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={PRIVATE_URLS.laboratory.root} replace />;
  };

  return (
    <LoginStyle $pageImage={pageImage}>
      <LoginForm />
      <NavStyle>
        <div className="login-opts">
          <button onClick={() => navigate(PUBLIC_URLS.portal.createProfile)}>
            <span>Sign Up</span>
          </button>
        </div>
        <div className="go-back-btn">
          <button onClick={() => navigate(PUBLIC_URLS.portal.root)}>
            <span>Go Back</span>
          </button>
        </div>
      </NavStyle>
    </LoginStyle>
  );
};
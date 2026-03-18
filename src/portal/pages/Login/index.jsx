import { useLoaderData, useNavigate, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm/index.jsx';
import { LoginStyle, NavStyle } from './index.styled.js';
import { useAuth } from '../../../hooks/useAuth.js';
const { urls } = import('../../../../global.urls.js');

export default function Login() {
  const { pageImage } = useLoaderData();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={urls.laboratory.root} replace />;
  };

  return (
    <LoginStyle $pageImage={pageImage}>
      <LoginForm />
      <NavStyle>
        <div className="login-opts">
          <button onClick={() => navigate(urls.portal.createProfile)}>
            <span>Sign Up</span>
          </button>
        </div>
        <div className="go-back-btn">
          <button onClick={() => navigate(urls.portal.root)}>
            <span>Go Back</span>
          </button>
        </div>
      </NavStyle>
    </LoginStyle>
  );
};
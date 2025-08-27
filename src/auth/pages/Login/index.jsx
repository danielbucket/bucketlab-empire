import { useLoaderData, useNavigate, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import { LoginStyle, ContentStyle } from './index.styled.js';
import { useAuth } from '../../../hooks/useAuth.js';

export default function Login() {
  const { pageImage } = useLoaderData();
  const navigate = useNavigate();
  console.log('Login page rendered');
  const { isAuthenticated } = useAuth();
  console.log('isAuthenticated: ', isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/laboratory/cubicle" replace />;
  }

  return (
    <LoginStyle $pageImage={pageImage}>
      <LoginForm />
      <ContentStyle>
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
      </ContentStyle>
    </LoginStyle>
  );
};
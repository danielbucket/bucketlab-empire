import { useLoaderData, useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import { LoginStyle, ContentStyle } from './index.styled.js';
  
export default function Login() {
  const { pageImage } = useLoaderData();
  const navigate = useNavigate();

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
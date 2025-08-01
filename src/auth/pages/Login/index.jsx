import { useLoaderData, useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm/index.jsx';
import { LoginStyle, ContentStyle } from './index.styled.js';
  
export default function Login() {
  const { pageImage } = useLoaderData();
  const navigate = useNavigate();
  const handleClick = () => {
    // user data from NewLogin will be passed to this page,
    // it will need to be removed (sanitized?) from state before navigating back.
    navigate('/portal');
  };

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
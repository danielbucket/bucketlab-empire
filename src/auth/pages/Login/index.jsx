import { useLoaderData, useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm/index.jsx';
import { LoginStyle, ImageStyle, ContentStyle } from './index.styled.js';
  
export default function Login() {
  const { pageImage } = useLoaderData();
  const navigate = useNavigate();
  const handleClick = () => {
    // user data from NewLogin will be passed to this page,
    // it will need to be removed (sanitized?) from state before navigating back.
    navigate('/portal');
  };

  return (
    <LoginStyle>
      <ImageStyle $pageImage={pageImage}>
        <LoginForm />
      </ImageStyle>
      <ContentStyle>
          <div className='new-user'>
            <p>Don't have an account?</p>
            <button onClick={() => navigate('/auth/new-login')}>Make one here.</button>
              <button onClick={handleClick}>
            <span>Go Back</span>
          </button>
          </div>
      </ContentStyle>
    </LoginStyle>
  );
};
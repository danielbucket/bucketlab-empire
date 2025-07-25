import { useLoaderData, useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm/index.jsx';
import { LoginStyle, ImageStyle, ContentStyle } from './index.styled.js';
  
export default function Login() {
  const { pageImage } = useLoaderData();
  const navigate = useNavigate();

  return (
    <LoginStyle>
      <ImageStyle $pageImage={pageImage}>
        <LoginForm />
      </ImageStyle>
      <ContentStyle>
          <div className='new-user'>
            <p>Don't have an account?</p>
            <button onClick={() => navigate('/portal/new-login')}>Make one here.</button>
          </div>
      </ContentStyle>
    </LoginStyle>
  );
};
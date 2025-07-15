import { useLoaderData } from 'react-router-dom';
import LoginForm from './LoginForm.jsx';
import { LoginStyle, ImageStyle, ContentStyle } from './index.styled.js';

export default function Login() {
  const { pageImage } = useLoaderData();

  return (
    <LoginStyle>
      <ImageStyle $pageImage={pageImage}>
        <LoginForm />
      </ImageStyle>
      {/* <ContentStyle>
      </ContentStyle> */}
    </LoginStyle>
  );
};
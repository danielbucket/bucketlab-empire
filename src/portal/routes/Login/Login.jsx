import { useLoaderData } from 'react-router-dom';
import { LoginStyle, ImageStyle, ContentStyle } from './index.styled.js';

export default function Login() {
  const { pageImage } = useLoaderData();

  return (
    <LoginStyle>
      <ImageStyle $pageImage={pageImage} alt="Login Page Background" />
      <ContentStyle>
        <h1>Login to BucketLab</h1>
        <p>Please enter your credentials to access your account.</p>
      </ContentStyle>
    </LoginStyle>
  );
};
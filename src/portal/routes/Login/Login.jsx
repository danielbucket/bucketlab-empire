import { useLoaderData } from 'react-router-dom';
import { StyledLogin } from './index.styled.js';

export default function Login() {
  const { pageImage } = useLoaderData();

  return (
    <StyledLogin>
      <img src={pageImage} alt="Login Page Background" />
      <h1>Login to BucketLab</h1>
      <p>Please enter your credentials to access your account.</p>
    </StyledLogin>
  );
};
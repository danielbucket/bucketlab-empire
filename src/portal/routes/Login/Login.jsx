import { useLoaderData } from 'react-router-dom';
import { StyledLogin } from './index.styled.js';

export default function Login() {
  const loaderData = useLoaderData();
  const { pageImage } = loaderData;

  return (
    <StyledLogin pageimage={pageImage}>
      <h1>Login to BucketLab</h1>
      <p>Please enter your credentials to access your account.</p>
    </StyledLogin>
  );
};
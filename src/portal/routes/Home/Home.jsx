import { useLoaderData } from 'react-router-dom';
import { StyledHome } from './index.styled.js';

export default function Home() {
  const loaderData = useLoaderData();
  const { pageImage } = loaderData;

  return (
    <StyledHome>
      <img src={pageImage} alt="Home Page Background" />
      <h1>Welcome to BucketLab</h1>
      <p>Your one-stop solution for all things tech!</p>
    </StyledHome>
  );
};
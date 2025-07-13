import { StyledAbout } from './index.styled.js';
import { useLoaderData } from 'react-router-dom';

export default function About() {
  const loaderData = useLoaderData();
  const pageImage = loaderData.pageImage;

  return (
    <StyledAbout pageimage={pageImage}>
      <h1>About BucketLab</h1>
      <p>BucketLab is your one-stop solution for all things tech!</p>
      <p>We provide a wide range of services and resources to help you succeed in the digital world.</p>
    </StyledAbout>
  );
};
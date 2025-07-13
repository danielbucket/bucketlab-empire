import { StyledContact } from './index.styled.js';
import { useLoaderData } from 'react-router-dom';

export default function Contact() {
  const loaderData = useLoaderData();
  const pageImage = loaderData.pageImage;

  return (
    <StyledContact pageimage={pageImage}>
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>
    </StyledContact>
  );
};
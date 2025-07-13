import { useLoaderData } from 'react-router-dom';
import { ContactStyle, ImageStyle, ContentStyle } from './index.styled.js';

export default function Contact() {
  const { pageImage } = useLoaderData();

  return (
    <ContactStyle>
      <ImageStyle $pageImage={pageImage} />
      <ContentStyle>
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out!</p>
      </ContentStyle>
    </ContactStyle>
  );
};
import { useLoaderData } from 'react-router-dom';
import { ContactStyle, ImageStyle, ContentStyle } from './index.styled.js';
import { TypeWriterEffect } from '../../utils/TypeWriterEffect.jsx';

export default function Contact() {
  const { pageImage, contentData } = useLoaderData();

  return (
    <ContactStyle>
      <ImageStyle $pageImage={pageImage} />
      <ContentStyle>
        <TypeWriterEffect text={contentData.text} speed={50} />
      </ContentStyle>
    </ContactStyle>
  );
};
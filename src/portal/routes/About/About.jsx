import { useLoaderData } from 'react-router-dom';
import { TypeWriterEffect } from '../../utils/TypeWriterEffect.jsx';
import { AboutStyle, ImageStyle, ContentStyle } from './index.styled.js';

export default function About() {
  const loaderData = useLoaderData();
  const { pageImage, contentData } = loaderData;

  return (
    <AboutStyle>
      <ImageStyle $pageImage={pageImage} alt="About Page Background" />
      <ContentStyle>
        <TypeWriterEffect text={contentData.bio} speed={75} />
        <p>- {contentData.name}</p>
        <p>{contentData.title}</p>
      </ContentStyle>
    </AboutStyle>
  );
};
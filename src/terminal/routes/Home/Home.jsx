import { useLoaderData } from 'react-router-dom';
import { HomeStyle, ImageStyle, ContentStyle } from './index.styled.js';
import { TypeWriterEffect } from '../../utils/TypeWriterEffect.jsx';

export default function Home() {
  const loaderData = useLoaderData();
  const { pageImage, contentData } = loaderData;

  return (
    <HomeStyle>
      <ImageStyle $pageImage={pageImage} />
      <ContentStyle>
        <TypeWriterEffect text={contentData.quote} speed={100} />
        <p>- {contentData.author}</p>
      </ContentStyle>
    </HomeStyle>
  );
};
import { useLoaderData } from 'react-router-dom';
import { MythtaTStyle, ImageStyle, ContentStyle } from './index.styled.js';

function MythtaT() {
  const data = useLoaderData();
  const { content, image } = data;

  return (
    <MythtaTStyle>
      <ImageStyle $pageImage={image} />
      <ContentStyle>
        <h1>{content.title}</h1>
        <p>{content.description}</p>
      </ContentStyle>
    </MythtaTStyle>
  );
};

export default MythtaT;

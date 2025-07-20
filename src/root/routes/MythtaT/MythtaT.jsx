import { useLoaderData } from 'react-router-dom';
import { MythtaTStyle, ImageStyle, ContentStyle } from './index.styled.js';

export default function MythtaT() {
  const data = useLoaderData();

  return (
    <MythtaTStyle>
      <ImageStyle src={data.image} />
      <ContentStyle>{data.content}</ContentStyle>
    </MythtaTStyle>
  );
};

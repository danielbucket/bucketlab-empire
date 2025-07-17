import { useLoaderData, useNavigate } from 'react-router-dom';
import {
  PortalStyle,
  ImageStyle,
  ContentStyle,
} from './index.styled.js';

export default function Portal() {
  const { pageImage, contentData } = useLoaderData();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login',
      {
        state: { isNew: false }
      }
    );
  };
  
  return (
    <PortalStyle>
      <ImageStyle $pageImage={pageImage}>
        <ContentStyle>
          <button onClick={() => handleClick()}>
            <span>Enter the Portal...</span>
          </button>
        </ContentStyle>
      </ImageStyle>
    </PortalStyle>
  );
};

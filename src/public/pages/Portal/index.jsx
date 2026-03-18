import { useLoaderData, useNavigate } from 'react-router-dom';
import { PortalStyle, ImageStyle, ContentStyle } from './index.styled.js';
import { PUBLIC_URLS } from '../../../global.urls.js';

export default function Portal() {
  const { pageImage } = useLoaderData();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(PUBLIC_URLS.portal.login, {
      state: { isNew: false }
    });
  };

  return (
    <PortalStyle>
      <ImageStyle $pageImage={pageImage}>
        <ContentStyle>
          <button onClick={handleClick}>
            <span>Enter the Portal...</span>
          </button>
        </ContentStyle>
      </ImageStyle>
    </PortalStyle>
  );
};
import { useLoaderData, useNavigate } from 'react-router-dom';
import { TypeWriterEffect } from '../../utils/TypeWriterEffect.jsx';
import { AboutStyle, ImageStyle, ContentStyle, ResumeButtonStyle } from './index.styled.js';
import { PUBLIC_URLS } from '../../../globals/global.urls.js';

export default function About() {
  const loaderData = useLoaderData();
  const navigate = useNavigate();
  const { pageImage, contentData } = loaderData;

  const handleClick = () => {
    navigate(PUBLIC_URLS.resume.root);
  };

  return (
    <AboutStyle>
      <ImageStyle $pageImage={pageImage} alt="About Page Background" />
      <ContentStyle>
        <ResumeButtonStyle onClick={handleClick}>
          <span>View My Resume</span>
        </ResumeButtonStyle>
        <TypeWriterEffect text={contentData.bio} speed={75} />
      </ContentStyle>
    </AboutStyle>
  );
};
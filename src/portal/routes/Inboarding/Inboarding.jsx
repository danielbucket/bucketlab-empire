import { useLoaderData } from 'react-router-dom';
import { InboardingStyle, ImageStyle } from "./index.styled.js";
import InboardingForm from './InboardingForm/InboardingForm.jsx';

export default function Inboarding() {
  const { pageImage } = useLoaderData();

  return (
    <InboardingStyle>
      <ImageStyle $pageImage={pageImage} />
      <InboardingForm />
    </InboardingStyle>
  );
};
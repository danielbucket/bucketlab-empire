import { useLoaderData } from 'react-router-dom';
import { NewTravelerStyle, ImageStyle } from "./index.styled.js";
import NewTravelerForm from './NewTravelerForm/NewTravelerForm.jsx';

export default function NewTraveler() {
  const { pageImage } = useLoaderData();

  return (
    <NewTravelerStyle>
      <ImageStyle $pageImage={pageImage} />
      <NewTravelerForm />
    </NewTravelerStyle>
  );
};
import { useLoaderData } from 'react-router-dom';
import { NewProfileStyle } from "./index.styled.js";
import NewProfileForm from './NewProfileForm';

export default function NewProfile() {
  const { pageImage } = useLoaderData();

  return (
    <NewProfileStyle $pageImage={pageImage} >
      <NewProfileForm />
    </NewProfileStyle>
  );
};
import { useLoaderData } from 'react-router-dom';
import { CreateProfileStyle } from "./index.styled.js";
import CreateProfileForm from './CreateProfileForm/index.jsx';

export default function CreateProfile() {
  const { pageImage } = useLoaderData();

  return (
    <CreateProfileStyle $pageImage={pageImage} >
      <CreateProfileForm />
    </CreateProfileStyle>
  );
};
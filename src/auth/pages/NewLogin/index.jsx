import { useLoaderData } from 'react-router-dom';
import { NewUserStyle, ImageStyle } from "./index.styled.js";
import NewUserForm from './NewLoginForm/index.jsx';

export default function NewUser() {
  const { pageImage } = useLoaderData();

  return (
    <NewUserStyle>
      <ImageStyle $pageImage={pageImage} />
      <NewUserForm />
    </NewUserStyle>
  );
};
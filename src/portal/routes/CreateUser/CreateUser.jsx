import { useLoaderData } from 'react-router-dom';
import { CreateUserStyle, ImageStyle } from "./index.styled.js";
import CreateUserForm from './CreateUserForm/CreateUserForm.jsx';

export default function CreateUser() {
  const { pageImage } = useLoaderData();

  return (
    <CreateUserStyle>
      <ImageStyle $pageImage={pageImage} />
      <CreateUserForm />
    </CreateUserStyle>
  );
};
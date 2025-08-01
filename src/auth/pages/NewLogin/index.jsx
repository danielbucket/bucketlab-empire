import { useLoaderData } from 'react-router-dom';
import { NewLoginStyle } from "./index.styled.js";
import NewLoginForm from './NewLoginForm/index.jsx';

export default function NewLogin() {
  const { pageImage } = useLoaderData();

  return (
    <NewLoginStyle $pageImage={pageImage} >
      <NewLoginForm />
    </NewLoginStyle>
  );
};
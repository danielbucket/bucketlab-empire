import { useLoaderData } from 'react-router-dom';
import { NewLoginStyle, ImageStyle } from "./index.styled.js";
import NewLoginForm from './NewLoginForm/index.jsx';

export default function NewLogin() {
  const { pageImage } = useLoaderData();

  return (
    <NewLoginStyle>
      <ImageStyle $pageImage={pageImage} />
      <NewLoginForm />
    </NewLoginStyle>
  );
};
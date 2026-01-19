import { useLoaderData } from 'react-router-dom';
import { NewAccountStyle } from "./index.styled.js";
import NewAccountForm from './NewAccountForm';

export default function NewAccount() {
  const { pageImage } = useLoaderData();

  return (
    <NewAccountStyle $pageImage={pageImage} >
      <NewAccountForm />
    </NewAccountStyle>
  );
};
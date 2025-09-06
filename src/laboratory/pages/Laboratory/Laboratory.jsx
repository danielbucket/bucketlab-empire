import { LaboratoryStyle } from './laboratory.styled';
import { useLoaderData } from 'react-router-dom';
import Main from '../Main/Main';

export default function Laboratory() {
  const { data } = useLoaderData();

  return (
      <LaboratoryStyle>
        <Main account={data} />
      </LaboratoryStyle>
  );
};
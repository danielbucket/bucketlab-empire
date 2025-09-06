import { LaboratoryStyle } from './laboratory.styled';
import { useLoaderData } from 'react-router-dom';
import Cubicle from '../Cubicle/Cubicle';

export default function Laboratory() {
  const { data } = useLoaderData();

  return (
    <LaboratoryStyle>
      <Cubicle account={data} />
    </LaboratoryStyle>
  );
};
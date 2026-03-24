import { LaboratoryStyle } from './laboratory.styled';
import { useLoaderData, Navigate } from 'react-router-dom';
import Cubicle from '../Cubicle/Cubicle';

export default function Laboratory() {
  const data = useLoaderData();

  // Redirect to login if not authenticated
  if (!data) {
    return <Navigate to="/portal/login" replace />;
  }

  return (
    <LaboratoryStyle>
      <Cubicle account={data} />
    </LaboratoryStyle>
  );
};
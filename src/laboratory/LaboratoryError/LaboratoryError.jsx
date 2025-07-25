import { useRouteError } from 'react-router-dom';
import { LaboratoryErrorLayout } from './index.styled.js';

export default function LaboratoryError() {
  const error = useRouteError();
  console.error('Laboratory error:', error);

  return (
    <LaboratoryErrorLayout>
      <h1>Laboratory Error</h1>
      {error && <p>{error.message}</p>}
    </LaboratoryErrorLayout>
  );
};
import { useRouteError } from 'react-router-dom';
import { StyledErrorPage } from './index.styled.js';

export default function ErrorPage() {
  const errorData = useRouteError();

  return (
    <StyledErrorPage>
      <h1>Error Page</h1>
      {errorData.message && <p>{errorData.message}</p>}
    </StyledErrorPage>
  );
};
import { useRouteError } from 'react-router-dom';
import { ErrorPageWrapper } from './index.styled';

export default function ErrorPage() {
  const errorData = useRouteError();

  return (
    <ErrorPageWrapper>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      {errorData.message && <p>{errorData.message}</p>}
    </ErrorPageWrapper>
  );
};
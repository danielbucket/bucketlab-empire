import { StyledMain } from './main.styled';
import { Link } from 'react-router-dom';

export default function Main({ accountData }) {
  return (
    <StyledMain>
      <h1>Welcome to your Laboratory Main Page</h1>
      <p>Your account data:</p>
      <pre>{JSON.stringify(accountData, null, 2)}</pre>
    </StyledMain>
  );
};
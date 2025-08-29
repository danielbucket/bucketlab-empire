import { StyledMain } from './main.styled';

export default function Main({ email, permissions, first_name, last_name }) {
  return (
    <StyledMain>
      <h1>Welcome to your Laboratory Main Page</h1>
      <p>Your account data:</p>
      <pre>{JSON.stringify({ first_name, last_name, email, permissions }, null, 2)}</pre>
    </StyledMain>
  );
};
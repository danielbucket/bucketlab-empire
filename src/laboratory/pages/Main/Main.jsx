import { StyledMain } from './main.styled';

export default function Main({ account }) {
  const { company, created_at, first_name, last_name, email, messages, phone, website } = account;
  return (
    <StyledMain>
      <h1>Welcome to your Laboratory Main Page</h1>
      <p>Your account data:</p>
      <pre>{JSON.stringify({ company, created_at, first_name, last_name, email, messages, phone, website }, null, 2)}</pre>
    </StyledMain>
  );
};
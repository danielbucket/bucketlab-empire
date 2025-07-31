import { styled } from 'styled-components';

export const StyledErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: var(--error-background-color, #f8d7da);
  color: var(--error-text-color, #721c24);
  font-family: 'Ubuntu', sans-serif;
  text-align: center;
`;
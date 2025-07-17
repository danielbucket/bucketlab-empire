import styled from 'styled-components';

export const StyledEmailError = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 0.25rem;
  color: #721c24;
  margin: 1rem 0;
  padding: 1rem;
  width: 90%;
  font-size: 1.75rem;

  button {
    background-color: #dc3545;
    border: 1px solid #dc3545;
    border-radius: 0.25rem;
    color: #fff;
    cursor: pointer;
    padding: 0.5rem;
  }
`;
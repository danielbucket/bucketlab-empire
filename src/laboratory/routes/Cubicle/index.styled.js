import { styled } from 'styled-components';

export const StyledCubicle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  min-height: 100vh;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 20px;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 10px;
    margin: 10px;
  }
`;
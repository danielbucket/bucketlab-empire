import { styled } from 'styled-components';

export const StyledCubicle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;

  h1 {
    color: #333;
  }

  .development-notes {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 5px;
    max-width: 800px;
    margin-top: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: left;
    gap: 1rem;
  }

  p {
    font-size: 1.75rem;
  }
`;
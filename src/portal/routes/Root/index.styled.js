import { styled } from 'styled-components';

export const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .header {
    width: 100%;
    height: 12rem;
  }

  .content {
    width: 100%;
    flex-grow: 1;
  }

  .footer {
    width: 100%;
    height: 8rem;
  }
`;
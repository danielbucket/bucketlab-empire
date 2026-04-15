import { styled } from 'styled-components';

export const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .navigation {
    width: 100%;
    height: 10rem;
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
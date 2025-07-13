import { styled } from 'styled-components';

export const BasePageLayout = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  animation: fadeIn 0.35s;
  @keyframes fadeIn {
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  }
`;

export const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
`;
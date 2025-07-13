import { styled } from 'styled-components';

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100%;
  padding: 0.5rem;
  
  overflow-y: scroll;

  animation: fadeIn 0.35s;
  @keyframes fadeIn {
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  }
`;

export const StyledImage = styled.div`
  background-image: url(${props => props.$pageImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
  height: 65%;
  border-radius: 0.5rem;
  box-shadow: rgba(14, 102, 240, 0.92) 0px 0px 0.25rem 0.25rem;
`;

export const StyledContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  margin-top: 1rem;
`;
import { styled } from 'styled-components';

export const BasePageLayout = styled.div`
  height: 100%;
  padding: 0.25rem;

  background-size: contain;
  background-repeat: no-repeat;
  width: 98%;
  border-radius: 0.5rem;
  box-shadow: rgba(14, 102, 240, 0.92) 0px 0px 0.25rem 0.25rem;
  
  margin: 0 auto;
  margin-top: 0.5rem;
  
  animation: fadeIn 0.35s;
  @keyframes fadeIn {
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  }
`;
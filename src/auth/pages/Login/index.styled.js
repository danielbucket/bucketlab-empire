import { styled } from 'styled-components';
import { PageLayout, StyledImage, StyledContent } from '../../style/root.style.js';

export const LoginStyle = styled(PageLayout)``;
export const ContentStyle = styled(StyledContent)`
  margin-top: 0.5rem;
  width: 100%;

  .new-user {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;

    button:hover {
      cursor: pointer;
      color: var(--special-blue);
      transition: color 0.3s ease-in-out;
  }
`;

export const ImageStyle = styled(StyledImage)`
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 100%;
  padding-bottom: 3rem;
`;
import { styled } from 'styled-components';
import { PageLayout, StyledImage, StyledContent } from '../../style/root.style.js';

export const PortalStyle = styled(PageLayout)``;

export const ImageStyle = styled(StyledImage)`
  display: flex;
  align-items: end;
  justify-content: center;
  height: 100%;
  padding-bottom: 1rem;
`;

export const ContentStyle = styled(StyledContent)`
  flex-grow: 0;
  margin: 0;
  border-radius: 0.5rem;
  
  button {
    font-size: 2rem;
    font-family: Orbitron;
    background-color: var(--special-blue);
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    box-shadow: 0 0 0.25rem 0.25rem #0E66F0Eb;
    width: 30rem;
    height: 6rem;
    transition: background-color 0.5s, color 0.5s, border-radius 0.5s, box-shadow 0.5s;

    &:hover {
      background-color: #0E66F0;
      color: #FFF;
      border-radius: 0.75rem;
      box-shadow: 0 0 0.75rem 0.5rem #0E66F0Eb;
    }
  }
`;
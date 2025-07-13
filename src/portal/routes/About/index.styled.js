import { styled } from 'styled-components';
import { BasePageLayout } from '../../style/root.style.js';

export const StyledAbout = styled(BasePageLayout)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
  background-image: url(${props => props.pageimage});
  color: var(--text-color);
  font-family: 'Laila_Med', sans-serif;
`;
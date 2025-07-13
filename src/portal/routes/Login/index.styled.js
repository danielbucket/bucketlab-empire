import { styled } from 'styled-components';
import { BasePageLayout } from '../../style/root.style.js';

export const StyledLogin = styled(BasePageLayout)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: url(${props => props.pageimage});
  background-size: cover;
  background-position: center;

  color: var(--text-color);
  font-family: 'Laila_Med', sans-serif;
`;
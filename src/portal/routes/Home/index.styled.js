import { styled } from 'styled-components';
import { BasePageLayout } from '../../style/root.style.js';

export const StyledHome = styled(BasePageLayout)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${props => props.pageimage});
`;
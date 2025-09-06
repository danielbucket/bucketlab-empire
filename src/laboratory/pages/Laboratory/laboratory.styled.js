import React from 'react';
import { styled } from 'styled-components';
import { LaboratoryRouteLayout } from '../../style/laboratoryRoute.style.js';

const StyledLaboratory = styled(LaboratoryRouteLayout)`
  overflow-y: scroll;
  // no scroll bar
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-align: center;
  }
`;

export const LaboratoryStyle = ({ children }) => {

  return React.createElement(
    StyledLaboratory,
    null,
    children
  );
};
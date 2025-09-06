import React from 'react';
import { styled } from 'styled-components';
import { LaboratoryRouteLayout } from '../../style/laboratoryRoute.style.js';

const StyledLaboratory = styled(LaboratoryRouteLayout)`

`;

export const LaboratoryStyle = ({ children }) => {

  return React.createElement(
    StyledLaboratory,
    null,
    children
  );
};
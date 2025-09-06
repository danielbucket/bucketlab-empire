import React from 'react';
import { styled } from 'styled-components';
import { LaboratoryLayout } from '../../style/laboratory.style.js';

const StyledLaboratory = styled(LaboratoryLayout)`
  border: 2px solid red;
`;

const LaboratoryBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  z-index: -1;
`;

export const LaboratoryStyle = ({ children }) => {

  return React.createElement(
    StyledLaboratory,
    null,
    React.createElement(LaboratoryBackground),
    children
  );
};
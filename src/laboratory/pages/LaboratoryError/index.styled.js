import styled from 'styled-components';
import { LaboratoryRouteLayout } from '../../style/laboratoryRoute.style.js';

export const LaboratoryErrorLayout = styled(LaboratoryRouteLayout)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #ffaa00ff;
  text-align: center;
  background-color: #f01515ff;
  border: 1rem solid #ffaa00ff;  
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
    
  p {
    font-size: 1.2rem;
    margin-top: 0;
  }
`;
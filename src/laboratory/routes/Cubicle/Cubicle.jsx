import { useLocation } from 'react-router-dom';
import { CubicleLayout, StyledCubicle } from './index.styled';
import Main from './Main';

export default function Cubicle() {
  const location = useLocation();
  console.log('Current location:', location);
  
  return (
    <CubicleLayout>
      <StyledCubicle>
        <Main />
      </StyledCubicle>
    </CubicleLayout>
  );
};
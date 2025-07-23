import { useLocation } from 'react-router-dom';
import { CubicleLayout, StyledCubicle } from './index.styled';
import Main from './Main';

export default function Cubicle() {
  const location = useLocation();
  console.log('Cubicle location state:', location.state);

  return (
    <CubicleLayout>
      <StyledCubicle>
        <Main traveler={location.state} />
      </StyledCubicle>
    </CubicleLayout>
  );
};
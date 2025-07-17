import { useLocation } from 'react-router-dom';
import { CubicleLayout, StyledCubicle } from './index.styled';
import Main from './Main';

export default function Cubicle() {
  const location = useLocation();
  const { data } = location.state;
  console.log('Current location:', data);
  
  return (
    <CubicleLayout>
      <StyledCubicle>
        <Main $traveler={data} />
      </StyledCubicle>
    </CubicleLayout>
  );
};
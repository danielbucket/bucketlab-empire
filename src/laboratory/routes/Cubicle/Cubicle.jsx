import { useLocation } from 'react-router-dom';
import { CubicleLayout, StyledCubicle } from './index.styled';
import Main from './Main';

export default function Cubicle() {
  const location = useLocation();

  return (
    <CubicleLayout>
      <StyledCubicle>
        <Main travelerData={location.state} />
      </StyledCubicle>
    </CubicleLayout>
  );
};
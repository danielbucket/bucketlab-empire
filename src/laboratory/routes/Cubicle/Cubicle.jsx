import { CubicleLayout, StyledCubicle } from './index.styled';
import Main from './Main';

export default function Cubicle() {
  return (
    <CubicleLayout>
      <StyledCubicle>
        <Main />
      </StyledCubicle>
    </CubicleLayout>
  );
};
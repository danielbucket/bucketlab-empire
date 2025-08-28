import { CubicleLayout, StyledCubicle } from './cubicle.styled';
import Main from '../Main/Main';
import Logout from '../Logout/Logout';
import { useAccount } from '../../../hooks/useAccount';

export default function Cubicle() {
  const accountData = useAccount().accountData;

  return (
    <CubicleLayout>
      <StyledCubicle>
        <Logout />
        <Main {...accountData} />
      </StyledCubicle>
    </CubicleLayout>
  );
};
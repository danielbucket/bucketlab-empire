import { CubicleLayout, StyledCubicle } from './cubicle.styled';
import Main from '../Main/Main';
import Logout from '../Logout/Logout';
import { useAccount } from '../../../hooks/useAccount';

export default function Cubicle() {
  const { email, permissions, first_name, last_name } = useAccount().accountData;

  const mainProps = { email, permissions, first_name, last_name };
  return (
    <CubicleLayout>
      <StyledCubicle>
        <Logout />
        <Main {...mainProps} />
      </StyledCubicle>
    </CubicleLayout>
  );
};
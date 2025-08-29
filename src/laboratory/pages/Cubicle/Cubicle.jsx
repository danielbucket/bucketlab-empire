import { CubicleLayout, StyledCubicle } from './cubicle.styled';
import { useLoaderData } from 'react-router-dom';
import Main from '../Main/Main';
import Logout from '../Logout/Logout';

export default function Cubicle() {
  const { data } = useLoaderData();

  return (
    <CubicleLayout>
      <StyledCubicle>
        <Logout />
        <Main account={data} />
      </StyledCubicle>
    </CubicleLayout>
  );
};
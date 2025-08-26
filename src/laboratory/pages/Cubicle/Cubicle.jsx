import { CubicleLayout, StyledCubicle } from './cubicle.styled';
import Main from '../Main/Main';
import { useLoaderData } from 'react-router-dom';

export default function Cubicle() {
  const { doc } = useLoaderData().data;

  return (
    <CubicleLayout>
      <StyledCubicle>
        <Main accountData={doc} />
      </StyledCubicle>
    </CubicleLayout>
  );
};
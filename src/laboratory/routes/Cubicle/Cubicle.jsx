import { useLocation } from 'react-router-dom';
import { CubicleLayout, StyledCubicle } from './index.styled';
import Main from './Main/Main';

export default function Cubicle() {
  const location = useLocation();

  const tempPassportData = location.state ? location.state.passportData : {
    passport: {
      first_name: 'Shit For Brains',
      last_name: 'Dum Dum',
      email: 'default@example.com',
      destination: 'Unknown',
      passport_number: '00000000'
    }
  };

  return (
    <CubicleLayout>
      <StyledCubicle>
        <Main passportData={tempPassportData} />
      </StyledCubicle>
    </CubicleLayout>
  );
};
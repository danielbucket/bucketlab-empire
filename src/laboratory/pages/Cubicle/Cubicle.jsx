import { useState } from 'react';
import { CubicleLayout, StyledCubicle } from './cubicle.styled';
import Main from '../Main/Main';

export default function Cubicle() {
  const [accountData, setAccountData] = useState(() => {
    const storedData = localStorage.getItem('accountData');
    return storedData ? JSON.parse(storedData) : null;
  });

  const tempPassportData = accountData || {
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
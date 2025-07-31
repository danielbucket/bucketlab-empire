import { Outlet } from 'react-router';
import { StyledRoot } from './index.style.js';
import LabNav from '../LabNav/LabNav.jsx';
import Footer from '../Footer/Footer.jsx';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Root() {
  const [traveler, setTraveler] = useState(null);
  const { state } = useLocation();

  useEffect(() => {
    if (state?.status === 'success' && state?.traveler) {
      setTraveler(state.traveler);
    }
  }, []);
  
  return (
    <StyledRoot>
      <LabNav traveler={traveler} />
      <Outlet />
      <Footer />
    </StyledRoot>
  );
};
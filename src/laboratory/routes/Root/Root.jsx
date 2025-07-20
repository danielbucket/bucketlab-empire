import { Outlet } from 'react-router';
import { StyledRoot } from './index.styled.js';
import LabNav from './LabNav/LabNav.jsx';
import Footer from '../Footer/index.jsx';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Root() {
  const [traveler, setTraveler] = useState(null);
  const { state } = useLocation();
  useEffect(() => {
    if (state?.status === 'success' && state?.traveler) {
      console.log('Root component state:', state);
      setTraveler(state.traveler);
      localStorage.setItem('empire_traveler_email', JSON.stringify(state.traveler.email));
    }

    const storedTraveler = localStorage.getItem('empire_traveler_email');
    if (storedTraveler) {
      setTraveler(JSON.parse(storedTraveler));
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
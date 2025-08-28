import { Outlet } from 'react-router';
import { StyledRoot } from './index.style.js';
import LabNav from '../LabNav/LabNav.jsx';
import Footer from '../Footer/Footer.jsx';

export default function Root() {
  return (
    <StyledRoot>
      <LabNav />
      <Outlet />
      <Footer />
    </StyledRoot>
  );
};
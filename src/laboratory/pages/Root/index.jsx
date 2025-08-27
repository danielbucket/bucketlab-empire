import { Outlet } from 'react-router';
import { StyledRoot } from './index.style.js';
import LabNav from '../LabNav/LabNav.jsx';
import Footer from '../Footer/Footer.jsx';
import { useAuth } from '../../../hooks/useAuth.js';

export default function Root() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return null;
  return (
    <StyledRoot>
      <LabNav />
      <Outlet />
      <Footer />
    </StyledRoot>
  );
};
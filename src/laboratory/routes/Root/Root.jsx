import { Outlet } from 'react-router';
import { StyledRoot } from './index.styled.js';
import LabNav from '../LabNavigator/index.jsx';
import Footer from '../Footer/index.jsx';

export default function Root() {
  return (
    <StyledRoot>
      <LabNav />
      <Outlet />
      <Footer />
    </StyledRoot>
  );
};
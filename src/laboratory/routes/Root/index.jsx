import { Outlet } from 'react-router';
import { StyledRoot } from './index.styled.js';
import LabNavigator from '../LabNavigator/';
import Footer from '../Footer';

export default function Root() {
  return (
    <StyledRoot>
      <LabNavigator />
      <Outlet />
      <Footer />
    </StyledRoot>
  );
};
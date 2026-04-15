import { Outlet } from 'react-router';
import { StyledRoot } from './index.style.js';
import LabNav from '../LabNav/LabNav.jsx';
import Footer from '../Footer/Footer.jsx';
import ProfileProvider from '../../../providers/profileProvider.jsx';

export default function Root() {
  return (
    <ProfileProvider>
      <StyledRoot>
        <div className="navigation">
          <LabNav />
        </div>
        <div className="content">
          <Outlet />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </StyledRoot>
    </ProfileProvider>
  );
};
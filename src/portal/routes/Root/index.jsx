import { Outlet } from 'react-router';
import { StyledRoot } from './index.styled.js';
import Header from './Header';
import Footer from './Footer';

export default function Root() {
  return (
    <StyledRoot>
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </StyledRoot>
  );
};
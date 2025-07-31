import { Outlet, useLoaderData } from 'react-router';
import { StyledRoot } from './index.styled.js';
import Navigation from './components/Navigation/index.jsx';
import Footer from './components/Footer';

function PublicHome() {
  const { GithubIcon, LinkedInIcon } = useLoaderData();

  return (
    <StyledRoot>
      <div className="navigation">
        <Navigation />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div className="footer">
        <Footer GithubIcon={GithubIcon} LinkedInIcon={LinkedInIcon} />
      </div>
    </StyledRoot>
  );
};

export default PublicHome;
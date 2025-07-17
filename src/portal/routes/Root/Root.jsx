import { Outlet } from 'react-router';
import { useLoaderData } from 'react-router';
import { StyledRoot } from './index.styled.js';
import Header from './Header/index.jsx';
import Footer from './Footer/Footer.jsx';

export default function Root() {
  const { GithubIcon, LinkedInIcon } = useLoaderData();

  return (
    <StyledRoot>
      <div className="header">
        <Header />
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
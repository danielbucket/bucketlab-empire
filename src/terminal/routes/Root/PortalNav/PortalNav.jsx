import { PortalNavStyle, StyledLink, SiteTitleLink, StyledUL } from './index.styled.js';

export default function PortalNav() {
  return (
    <PortalNavStyle>
      <div className='title'>
        <SiteTitleLink to='/'>bucketlab.io</SiteTitleLink>
      </div>
      <div className='list'>
        <StyledUL>
          <CustomLink to='/terminal/about'>About</CustomLink>
          <CustomLink to='/terminal/projects'>Projects</CustomLink>
          <CustomLink to='/terminal/contact'>Contact</CustomLink>
          <CustomLink to='/login'>Portal</CustomLink>
        </StyledUL>
      </div>
    </PortalNavStyle>
  );
};

function CustomLink({ to, children, ...props }) {
  return (
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  );
};
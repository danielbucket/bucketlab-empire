import { PortalNavStyle, StyledLink, SiteTitleLink, StyledUL } from './index.styled.js';

export default function PortalNav() {
  return (
    <PortalNavStyle>
      <div className='title'>
        <SiteTitleLink to='/'>bucketlab.io</SiteTitleLink>
      </div>
      <div className='list'>
        <StyledUL>
          <CustomLink to='/about'>About</CustomLink>
          <CustomLink to='/projects'>Projects</CustomLink>
          <CustomLink to='/contact'>Contact</CustomLink>
          <CustomLink to='/portal'>Portal</CustomLink>
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
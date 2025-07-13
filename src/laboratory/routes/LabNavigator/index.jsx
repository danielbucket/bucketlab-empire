import { NavContainer, StyledLink, SiteTitleLink, StyledUL } from './index.styled.js';

export default function Navigate() {
  return (
    <>
      <NavContainer>
        <div className='title'>
          <SiteTitleLink to='/'>bucketlab.io</SiteTitleLink>
        </div>
        <div className='list'>
          <StyledUL>
            <CustomLink to='../about'>About</CustomLink>
            <CustomLink to='../contact'>Contact</CustomLink>
            <CustomLink to='../projects'>Projects</CustomLink>
            <CustomLink to='../homelab'>HomeLab</CustomLink>
          </StyledUL>
        </div>
      </NavContainer>
    </>
  );
};

function CustomLink({ to, children, ...props }) {
  return (
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  );
};
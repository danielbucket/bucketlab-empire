import { NavContainer, StyledLink, SiteTitleLink, StyledUL } from './labNav.styled.js';
import Logout from '../Logout/Logout';

export default function LabNav() {
  return (
    <NavContainer>
      <Logout />
      <div className='title'>
        <SiteTitleLink to='/laboratory'>BucketLab IO Laboratory</SiteTitleLink>
      </div>
      <div className='nav-list'>
        <StyledUL>
          <CustomLink to='/laboratory/cubicle'>Cubicle</CustomLink>
          <CustomLink to='/laboratory/homelab'>Homelab</CustomLink>
          <CustomLink to='/laboratory/messages'>Messages</CustomLink>
          <CustomLink to='/laboratory/profile'>Profile</CustomLink>
          <CustomLink to='/laboratory/resume'>Resume</CustomLink>
        </StyledUL>
      </div>
    </NavContainer>
  );
};

function CustomLink({ to, children, ...props }) {
  return (
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  );
};
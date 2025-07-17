import { NavContainer, StyledLink, SiteTitleLink, StyledUL } from './index.styled.js';

export default function LabNav() {
  return (
    <NavContainer>
      <div className='title'>
        <SiteTitleLink to='/'>bucketlab.io</SiteTitleLink>
      </div>
      <div className='list'>
        <StyledUL>
          <CustomLink to='/laboratory/cubicle'>Cubicle</CustomLink>
          <CustomLink to='/laboratory/messages'>Messages</CustomLink>
          <CustomLink to='/laboratory/profile'>Profile</CustomLink>
          <CustomLink to='/laboratory/watchlist'>Watchlist</CustomLink>
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
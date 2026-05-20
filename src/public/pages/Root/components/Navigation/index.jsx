import { NavigationStyle, StyledLink, SiteTitleLink, StyledUL } from './index.styled.js';

export default function Navigation() {
  return (
    <NavigationStyle>
      <div className='title'>
        <SiteTitleLink to='/'>bucketlab.io</SiteTitleLink>
      </div>
      <div className='list'>
        <StyledUL>
          <CustomLink to='/about'>About</CustomLink>
          <CustomLink to='/projects'>Projects</CustomLink>
          <CustomLink to='/portal'>Portal</CustomLink>
        </StyledUL>
        <div>BTC: bc1qtvnz56ekmwz9jpqpgkh78tt7wu027pfxt3t6pu</div>
      </div>
    </NavigationStyle>
  );
};

function CustomLink({ to, children, ...props }) {
  return (
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  );
};
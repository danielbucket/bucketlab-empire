import { StyledFooter, StyledLink } from './index.styled.js';

export default function Footer({ GithubIcon, LinkedInIcon }) {
  return (
    <StyledFooter>
      <StyledLink to='https://github.com/danielbucket' target='_blank'>
        <GithubIcon size={40} />
      </StyledLink>
      <p><span>BucketLimited © 2024</span></p>
      <StyledLink to='https://www.linkedin.com/in/daniel-ludwick/' target='_blank'>
        <LinkedInIcon size={40} />
      </StyledLink>
    </StyledFooter>
  );
};
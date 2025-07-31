import { StyledFooter, StyledLink } from './footer.styled.js'
import githubIcon from '../../../assets/icons/github/github-mark.png'
import linkedInIcon from '../../../assets/icons/linkedin/linkedin.png'
export default function Footer() {

  return (
    <StyledFooter>
      <StyledLink to='https://github.com/danielbucket' target='_blank'>
        <img src={ githubIcon } alt='GitHub icon' />
      </StyledLink>
      <p><span>BucketLimited © 2024</span></p>
      <StyledLink to='https://www.linkedin.com/in/daniel-ludwick/' target='_blank'>
        <img src={ linkedInIcon } alt='LinkedIn icon'/>
      </StyledLink>
    </StyledFooter>
  )
};
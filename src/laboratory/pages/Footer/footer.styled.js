import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledFooter = styled.footer`
  display: flex;
  height: 6rem;
  gap: 3rem;
  box-shadow: 0 0 .5rem .25rem #0e66f0eb;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.15rem;
  
  img {
    height: 5rem;
  }

  p {
    font-size: 1.5rem;
    font-family: Ubuntu_Reg;
  }  
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
`
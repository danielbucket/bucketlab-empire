import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;

  background-color: #282c34;
  color: white;
  text-align: center;
  font-size: 1.0rem;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);

  img {
    height: 5rem;
  }
  
  p {
    font-size: 1.5rem;
    font-family: Ubuntu_Reg;
  } 
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  background-color: #fff;
  border-radius: 0.15rem;
  margin: 0 1rem;
`
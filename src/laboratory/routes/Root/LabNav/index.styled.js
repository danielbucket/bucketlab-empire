import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 10rem;
  padding: 0.75rem 0.25rem;
  margin-bottom: 0.5rem;
  font-family: Ubuntu_Reg;
  box-shadow: 0 0 .15rem .25rem #0e66f0eb;
  background-color: var(--special-blue);

  .title {
    height: 6rem;
  }
    
  .list {
    height: 4rem;
      
    & ul li.active {
      background-color: #0e66f0eb;
    }
  }
`;


export const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 0.25rem;
  font-size: 1.75rem;

  &.active, &:hover {
    color: #eee;
    background-color: #0863f16b;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem 0.25rem #0e66f0eb;
    transition: background-color 0.5s, color 0.5s, border-radius 0.5s, box-shadow 0.5s;
  }
`;

export const StyledUL = styled.ul`
  display: flex;

  justify-content: space-evenly;
  gap: 0.5rem;
  list-style: none;
  font-size: 1.75rem;
  padding: 0;
`;

export const SiteTitleLink = styled(StyledLink)`
  font-size: clamp(5rem, 2.75rem, 8rem);
  font-family: Laila_Med;
  line-height: 1;
  padding: 0;

  &.active, , &.inactive, &:hover {
    color: black;
    background-color: transparent;
    border-radius: 0;
    box-shadow: none;
  }
`;
import { styled } from 'styled-components';
import { AuthBaseStyle } from '../../style/auth.style.js';

export const LoginStyle = styled(AuthBaseStyle)``;

export const NavStyle = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  border: 0.1rem solid var(--special-blue);
  border-radius: 0.5rem;
  background-color: #007bff4d;
  box-shadow: 0 0 0.25rem 0.25rem var(--special-blue);

  margin-bottom: 0.5rem;
  width: 95%;
  height: 4rem;

  span {
    color: #ffd452b8;
    font-family: Orbitron;
    color: #EEE;
    font-size: 1.2rem;
  }

  button:hover {
    cursor: pointer;
    color: var(--special-blue);
    transition: color 0.3s ease-in-out;
  }
}`;
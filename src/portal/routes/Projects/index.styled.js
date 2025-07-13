import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { BasePageLayout } from '../../style/root.style.js';

export const StyledProjects = styled(BasePageLayout)`
  
`;

export const ListContainer = styled.div`
  height: 100%;
`;

export const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 2.50rem;
`;

export const StyledLink = styled(Link)`
  padding: 0.1rem 0.5rem;

  &:hover {
    color: #EEE;
    background-color: var(--special-blue);
    border-radius: 0.5rem;
    box-shadow: 0 0 0.25rem 0.25rem #0E66F0Eb;
    transition: background-color 0.5s, color 0.5s, border-radius 0.5s, box-shadow 0.5s;
  }
`;

export const ProjectDetails = styled.div` 
  height: 100%;
  border: 0.1rem solid var(--special-blue);

  & p:first-child {
    font-size: 2.5rem;
    font-weight: bold;
    font-family: Orbitron;
    border-bottom: 0.1rem solid var(--special-blue);
  }
    
  & p:nth-child(2) {
    padding: 1rem;
    font-size: 2rem;
    font-family: Roboto;
    text-indent: 2rem hanging;

    span {
      font-size: 1.5rem;
      font-weight: bold;
      text-align: start;
    }
  }
    
  & p:last-child {
    padding-top: 2rem;
    padding-left: 2rem;
    font-size: 2rem;
    font-family: Roboto;
    text-indent: 2rem hanging;

    span {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;
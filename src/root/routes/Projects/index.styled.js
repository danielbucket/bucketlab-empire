import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { PageLayout, StyledImage, StyledContent } from '../../style/root.style.js';

export const StyledProjects = styled(PageLayout)``;
export const ImageStyle = styled(StyledImage)``;
export const ContentStyle = styled(StyledContent)``;

export const StyledUL = styled.ul`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 0.5rem;
  font-family: Laila_Med;
  font-size: 2.50rem;
  
  li {
    width: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li:hover {
    cursor: pointer;
    color: var(--special-blue);
    border-radius: 0.5rem;
    box-shadow: 0 0 0.25rem 0.25rem #0E66F0Eb;
    transition: background-color 0.5s, color 0.5s, border-radius 0.5s, box-shadow 0.5s;
  }
`;

export const StyledLink = styled(Link)`
  &:hover {
    color: #EEE;
    background-color: var(--special-blue);
    border-radius: 0.5rem;
    box-shadow: 0 0 0.25rem 0.25rem #0E66F0Eb;
    transition: background-color 0.5s, color 0.5s, border-radius 0.5s, box-shadow 0.5s;
  }
`;

export const ProjectDetails = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100%;
  background-color: rgb(86 142 253 / 71%);
  font-size: 1.5rem;
  text-shadow: #fff 1px 0 5px;

  animation: fadeIn 0.5s;
  @keyframes fadeIn {
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  }
  
  .repo-name {
    height: 5rem;
    margin-top: 2rem;
    font-family: KodeMono_Var, monospace;
    font-size: 3rem;
    font-weight: bold;
  }
    
  .repo-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    width: 100%;
    padding-top: 1rem;
    border-radius: 1rem;

    .description {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      font-family: Laila_Med;
    }
  
    .url {
      font-size: 1.5rem;
    }
  }
`;
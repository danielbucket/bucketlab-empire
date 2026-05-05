import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledResumeLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
  height: 3rem;
  width: fit-content;
  padding: 0.75rem 1.5rem;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  text-decoration: none;
  color: #ffffff;
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: linear-gradient(135deg, #0056b3 0%, #003d82 100%);
    transform: translateY(-2px);
    border-color: #00ffff;
    box-shadow: 0 0 12px rgba(0, 255, 231, 0.3), inset 0 0 8px rgba(255, 255, 255, 0.1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 0 8px rgba(0, 255, 231, 0.4), inset 0 0 6px rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.25rem;
    font-size: 1.15rem;
  }
`;
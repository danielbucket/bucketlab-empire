import { styled, keyframes } from 'styled-components';
import { PageLayout, StyledImage, StyledContent } from '../../style/root.style.js';

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 12px rgba(0, 255, 231, 0.3), inset 0 0 8px rgba(255, 255, 255, 0.1);
  }
  50% {
    box-shadow: 0 0 24px rgba(0, 201, 208, 0.74), inset 0 0 12px rgba(255, 255, 255, 0.15);
    }
`;

export const AboutStyle = styled(PageLayout)``;
export const ImageStyle = styled(StyledImage)``;
export const ContentStyle = styled(StyledContent)`
  margin: 0.5rem;
  width: 100%;
  border-radius: 8px;
  padding: 1rem;
`;

export const ResumeButtonStyle = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 1.75rem;
  font-family: 'Orbitron', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-decoration: none;
  text-transform: uppercase;
  color: #ffffff;
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${pulse} 2s ease-in-out infinite;
  box-shadow: 0 0 12px rgba(0, 255, 231, 0.3), inset 0 0 8px rgba(255, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #0056b3 0%, #003d82 100%);
    box-shadow: 0 0 20px rgba(0, 255, 231, 0.6), inset 0 0 12px rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
    border-color: #00ffff;
  }

  &:hover::before {
    left: 100%;
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 0 8px rgba(0, 255, 231, 0.4), inset 0 0 6px rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }
`;
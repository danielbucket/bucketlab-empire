import styled from 'styled-components';
import { LaboratoryRouteLayout } from '../../style/laboratoryRoute.style.js';

export const ResumeLayout = styled(LaboratoryRouteLayout)`
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  padding: 2rem 1rem;
`;

export const ControlPanel = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media print {
    display: none;
  }
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ResumeContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  padding: 3rem;
  line-height: 1.6;
  color: #333;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  @media print {
    max-width: 100%;
    box-shadow: none;
    padding: 0;
    border-radius: 0;
  }
`;

export const Header = styled.div`
  border-bottom: 3px solid #667eea;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  color: #1a1a1a;
  font-weight: 700;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    gap: 1rem;
    font-size: 0.9rem;
  }

  @media print {
    gap: 1.5rem;
  }
`;

export const ContactItem = styled.div`
  color: #555;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Section = styled.section`
  margin-bottom: 2.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.4rem;
  color: #667eea;
  margin: 0 0 0.5rem 0;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const SectionDivider = styled.div`
  height: 2px;
  background: linear-gradient(
    to right,
    #667eea 0%,
    #764ba2 50%,
    transparent 100%
  );
  margin-bottom: 1.5rem;
`;

export const ExperienceItem = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-left: 3px solid #667eea;
  padding-left: 1.5rem;

  &:last-child {
    border-left-color: transparent;
  }

  p {
    margin: 0.5rem 0;
    color: #555;
  }
`;

export const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 1rem;

  span {
    color: #999;
    font-size: 0.9rem;
    white-space: nowrap;
  }
`;

export const ExperienceTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  color: #1a1a1a;
  font-weight: 700;
`;

export const ExperienceDetails = styled.div`
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
  font-weight: 500;

  a {
    color: #667eea;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #764ba2;
      text-decoration: underline;
    }
  }
`;

export const AchievementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.75rem 0;
`;

export const AchievementItem = styled.li`
  padding: 0.5rem 0 0.5rem 1.5rem;
  position: relative;
  color: #555;
  font-size: 0.95rem;

  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: #667eea;
    font-weight: bold;
  }
`;

export const RequirementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.75rem 0;
`;

export const RequirementItem = styled.li`
  padding: 0.4rem 0 0.4rem 1.5rem;
  position: relative;
  color: #666;
  font-size: 0.9rem;

  &:before {
    content: '•';
    position: absolute;
    left: 0;
    color: #764ba2;
  }
`;

export const EducationItem = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f8f9fc;
  border-radius: 8px;
  border-left: 3px solid #667eea;

  strong {
    color: #1a1a1a;
    font-size: 1.05rem;
  }

  p {
    margin: 0.5rem 0;
    color: #555;

    &:first-of-type {
      font-weight: 600;
      color: #666;
    }
  }
`;

export const CertificationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const CertificationCard = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #f0f1f5 100%);
  border-radius: 8px;
  border: 1px solid #e0e3f0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
    border-color: #667eea;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
`;

export const SkillTag = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }

  @media print {
    box-shadow: none;
    transform: none;
  }
`;
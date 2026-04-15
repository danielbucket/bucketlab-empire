import styled from 'styled-components';
import { LaboratoryRouteLayout } from '../../style/laboratoryRoute.style.js';

export const ResumeLayout = styled(LaboratoryRouteLayout)`
  background: linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%);
  min-height: 100vh;
  padding: 2rem 1rem;
`;

export const ResumeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

export const ControlPanel = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  width: 100%;

  @media print {
    display: none;
  }
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.9rem 1.8rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(102, 126, 234, 0.6);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ResumePaper = styled.div`
  width: 100%;
  max-width: 900px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.15);
  padding: 3.5rem;
  line-height: 1.8;
  color: #2c3e50;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  @media print {
    max-width: 100%;
    box-shadow: none;
    padding: 0;
    border-radius: 0;
    background: white;
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 3px solid #667eea;

  @media print {
    border-bottom: 2px solid #333;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 3rem;
  margin: 0 0 0.5rem 0;
  color: #1a1a1a;
  font-weight: 800;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const HeaderSubtitle = styled.p`
  font-size: 1.35rem;
  margin: 0 0 1.5rem 0;
  color: #667eea;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.2rem;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    font-size: 1rem;
  }
`;

export const ContactItem = styled.div`
  color: #555;
  font-weight: 500;

  a {
    color: #555;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #667eea;
    }
  }

  @media print {
    a {
      color: #555;
      text-decoration: none;
    }
  }
`;

export const Section = styled.section`
  margin-bottom: 3.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media print {
    page-break-inside: avoid;
  }
`;

export const SectionHeading = styled.h2`
  font-size: 1.8rem;
  color: #667eea;
  margin: 0 0 1.5rem 0;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 2px solid #667eea;
  padding-bottom: 0.75rem;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const JobCard = styled.div`
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-left: 4px solid #667eea;
  border-radius: 6px;
  page-break-inside: avoid;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const JobTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  color: #1a1a1a;
  font-weight: 700;
`;

export const JobMeta = styled.div`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 0.75rem;
  font-weight: 500;
`;

export const JobDescription = styled.p`
  font-size: 1.15rem;
  margin: 0.75rem 0;
  color: #666;
  line-height: 1.7;
`;

export const JobLink = styled.a`
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    color: #764ba2;
    text-decoration: underline;
  }
`;

export const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.75rem 0;
`;

export const AchievementListItem = styled.li`
  padding: 0.6rem 0 0.6rem 1.8rem;
  position: relative;
  color: #555;
  font-size: 1.1rem;
  line-height: 1.6;

  &:before {
    content: '▸';
    position: absolute;
    left: 0;
    color: #667eea;
    font-weight: bold;
    font-size: 1.3rem;
  }
`;

export const RequirementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.75rem 0;
`;

export const RequirementListItem = styled.li`
  padding: 0.5rem 0 0.5rem 1.8rem;
  position: relative;
  color: #666;
  font-size: 1.05rem;

  &:before {
    content: '•';
    position: absolute;
    left: 0;
    color: #764ba2;
    font-weight: bold;
  }
`;

export const EducationCard = styled.div`
  margin-bottom: 1.25rem;
  padding: 1.25rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #f0f1f5 100%);
  border-radius: 6px;
  border-left: 4px solid #667eea;
  page-break-inside: avoid;
`;

export const EducationDegree = styled.h4`
  font-size: 1.35rem;
  margin: 0 0 0.3rem 0;
  color: #1a1a1a;
  font-weight: 700;
`;

export const EducationInstitution = styled.p`
  font-size: 1.15rem;
  margin: 0.3rem 0;
  color: #667eea;
  font-weight: 600;
`;

export const EducationYear = styled.p`
  font-size: 1.05rem;
  margin: 0.3rem 0 0.5rem 0;
  color: #999;
  font-weight: 500;
`;

export const ProjectCard = styled.div`
  margin-bottom: 1.25rem;
  padding: 1.25rem;
  background: #f8f9fa;
  border-radius: 6px;
  border-left: 4px solid #764ba2;
  page-break-inside: avoid;
`;

export const ProjectName = styled.h4`
  font-size: 1.35rem;
  margin: 0 0 0.5rem 0;
  color: #1a1a1a;
  font-weight: 700;
`;

export const ProjectTech = styled.p`
  font-size: 1.05rem;
  margin: 0.5rem 0;
  color: #666;
  font-weight: 500;
`;

export const CertificationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.2rem;
`;

export const CertificationItem = styled.li`
  padding: 1.2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #f0f1f5 100%);
  border-radius: 6px;
  border: 1px solid #e0e3f0;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  strong {
    font-size: 1.15rem;
    color: #1a1a1a;
    display: block;
    margin-bottom: 0.3rem;
  }

  span {
    font-size: 1rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
    border-color: #667eea;
  }
`;

export const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 1rem;
`;

export const SkillBadge = styled.span`
  display: inline-block;
  padding: 0.7rem 1.4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 25px;
  font-size: 1.05rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  }

  @media print {
    box-shadow: none;
    transform: none;
  }
`;

export const HobbyGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const HobbyTag = styled.span`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background: #e9ecef;
  color: #495057;
  border: 1.5px solid #667eea;
  border-radius: 25px;
  font-size: 1.05rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: #667eea;
    color: white;
    transform: translateY(-2px);
  }

  @media print {
    border: 1px solid #333;
    transform: none;
  }
`;

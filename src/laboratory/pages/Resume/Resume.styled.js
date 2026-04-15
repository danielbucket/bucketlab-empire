import styled from 'styled-components';
import { LaboratoryRouteLayout } from '../../style/laboratoryRoute.style.js';

export const ResumeWrapper = styled(LaboratoryRouteLayout)`
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  padding: 2rem 1rem;
`;

export const Controls = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;

  @media print {
    display: none;
  }
`;

export const DownloadBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.9rem 1.8rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
  }
`;

export const PrintBtn = styled(DownloadBtn)``;

export const ResumeContent = styled.div`
  max-width: 950px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  padding: 3.5rem;
  color: #333;
  font-size: 1.1rem;
  line-height: 1.7;

  @media (max-width: 768px) {
    padding: 2rem;
    font-size: 1rem;
  }

  @media print {
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    max-width: 100%;
  }
`;

export const Header = styled.div`
  text-align: center;
  border-bottom: 3px solid #667eea;
  padding-bottom: 2rem;
  margin-bottom: 2.5rem;
`;

export const Name = styled.h1`
  font-size: 3rem;
  margin: 0 0 1.5rem 0;
  color: #1a1a1a;
  font-weight: 700;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const ContactSection = styled.div`
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ContactDetail = styled.div`
  font-size: 1.15rem;
  color: #555;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SectionContainer = styled.section`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionHeading = styled.h2`
  font-size: 1.8rem;
  color: #667eea;
  margin: 0 0 0.75rem 0;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

export const DividerLine = styled.div`
  height: 2px;
  background: linear-gradient(to right, #667eea 0%, #764ba2 50%, transparent 100%);
  margin-bottom: 1.75rem;
`;

export const JobEntry = styled.div`
  margin-bottom: 2.25rem;
  padding-bottom: 1.75rem;
  border-left: 3px solid #667eea;
  padding-left: 1.75rem;

  &:last-child {
    border-left-color: transparent;
  }
`;

export const JobTitle = styled.h3`
  font-size: 1.4rem;
  margin: 0;
  color: #1a1a1a;
  font-weight: 700;
`;

export const CompanyInfo = styled.div`
  font-size: 1.1rem;
  color: #666;
  font-weight: 500;
  margin-bottom: 0.75rem;

  a {
    color: #667eea;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Duration = styled.span`
  font-size: 1.1rem;
  color: #999;
  font-weight: 500;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin: 0.75rem 0;
  line-height: 1.6;
`;

export const AchievementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.75rem 0 0 0;
`;

export const Achievement = styled.li`
  padding: 0.7rem 0 0.7rem 1.5rem;
  position: relative;
  font-size: 1.05rem;
  color: #555;
  line-height: 1.6;

  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: #667eea;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

export const EducationEntry = styled.div`
  margin-bottom: 1.75rem;
  padding: 1.25rem;
  background: linear-gradient(135deg, #f8f9fc 0%, #f0f1f5 100%);
  border-radius: 8px;
  border-left: 3px solid #667eea;
`;

export const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

export const SkillItem = styled.span`
  display: inline-block;
  padding: 0.75rem 1.4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }

  @media print {
    box-shadow: none;
    transform: none;
  }
`;

export const CertificationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

export const CertCard = styled.div`
  padding: 1.5rem;
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

export const CertTitle = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;

export const CertIssuer = styled.div`
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.75rem;
`;

export const CertYear = styled.div`
  font-size: 0.95rem;
  color: #999;
`;

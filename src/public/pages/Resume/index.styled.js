import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ResumePageWrapper = styled.div`
  background: linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%);
  min-height: 100vh;
  padding: 2rem 1rem;
`;

export const ResumeContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  @media print {
    box-shadow: none;
    border-radius: 0;
  }
`;

export const ResumeHeader = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  @media print {
    background: #f8f9fa;
    color: #333;
  }
`;

export const ResumeTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0 0 2rem 0;
  font-weight: 800;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media print {
    color: #333;
  }
`;

export const PreviewNotice = styled.div`
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);

  @media print {
    display: none;
  }
`;

export const PreviewNoticeContent = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  align-items: flex-start;
`;

export const PreviewIcon = styled.span`
  font-size: 1.8rem;
  min-width: 2rem;
`;

export const NoticeText = styled.p`
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);

  strong {
    font-weight: 700;
    color: white;
  }
`;

export const LoginPrompt = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  span {
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const LoginLink = styled(Link)`
  text-decoration: none;
`;

export const LoginButton = styled.button`
  background: white;
  color: #667eea;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
    background: #f8f9fa;
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ResumeContent = styled.div`
  padding: 3rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  @media print {
    padding: 0;
  }
`;

export const Section = styled.section`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media print {
    page-break-inside: avoid;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #667eea;
  margin: 0 0 0.5rem 0;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.5px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media print {
    color: #333;
    page-break-after: avoid;
  }
`;

export const SectionDivider = styled.div`
  height: 3px;
  background: linear-gradient(to right, #667eea 0%, #764ba2 50%, transparent 100%);
  margin-bottom: 2rem;
`;

export const JobCard = styled.div`
  background: #f8f9fc;
  border-left: 4px solid #667eea;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 6px;
  page-break-inside: avoid;

  &:last-child {
    margin-bottom: 0;
  }

  @media print {
    background: white;
    border: 1px solid #ddd;
  }
`;

export const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;

  span {
    color: #999;
    font-size: 1rem;
    font-weight: 600;
    white-space: nowrap;
  }

  @media print {
    span {
      color: #666;
    }
  }
`;

export const JobTitle = styled.h3`
  font-size: 1.4rem;
  margin: 0;
  color: #1a1a1a;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const JobMeta = styled.p`
  margin: 0.3rem 0 0 0;
  color: #666;
  font-size: 1.05rem;
  font-weight: 600;

  @media print {
    color: #555;
  }
`;

export const JobDescription = styled.p`
  margin: 1rem 0;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #555;

  @media print {
    margin: 0.5rem 0;
    color: #333;
  }
`;

export const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.8rem 0 0 0;
`;

export const AchievementItem = styled.li`
  padding: 0.6rem 0 0.6rem 1.8rem;
  position: relative;
  color: #555;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 0.4rem;

  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: #667eea;
    font-weight: bold;
    font-size: 1.2rem;
  }

  @media print {
    color: #333;
    font-size: 0.95rem;
  }
`;

export const EducationCard = styled.div`
  background: #f8f9fc;
  border-left: 4px solid #667eea;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 6px;
  page-break-inside: avoid;

  &:last-child {
    margin-bottom: 0;
  }

  p {
    margin: 0.5rem 0;
    color: #555;
    font-size: 1rem;
    line-height: 1.5;
  }

  @media print {
    background: white;
    border: 1px solid #ddd;

    p {
      color: #333;
    }
  }
`;

export const EducationDegree = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 0.3rem 0;
  color: #1a1a1a;
  font-weight: 700;
`;

export const EducationInstitution = styled.p`
  margin: 0;
  color: #666;
  font-size: 1.05rem;
  font-weight: 600;
`;

export const CertificationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }

  @media print {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

export const CertificationCard = styled.div`
  background: linear-gradient(135deg, #f5f7fa 0%, #f0f1f5 100%);
  border: 2px solid #e0e3f0;
  border-radius: 8px;
  padding: 1.3rem;
  transition: all 0.3s ease;
  page-break-inside: avoid;

  strong {
    display: block;
    font-size: 1.05rem;
    color: #1a1a1a;
    margin-bottom: 0.4rem;
  }

  p {
    margin: 0.3rem 0;
    color: #666;
    font-size: 0.95rem;
    line-height: 1.4;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 15px rgba(102, 126, 234, 0.2);
    border-color: #667eea;
  }

  @media print {
    background: white;
    border: 1px solid #ddd;

    &:hover {
      transform: none;
      box-shadow: none;
      border-color: #ddd;
    }

    strong {
      color: #333;
    }

    p {
      color: #555;
    }
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const SkillTag = styled.span`
  display: inline-block;
  padding: 0.7rem 1.3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 3px 10px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
  }

  @media print {
    background: #667eea;
    box-shadow: none;
    transform: none;
    padding: 0.4rem 0.9rem;
    font-size: 0.9rem;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;

export const Footer = styled.div`
  background: #f8f9fc;
  border-top: 2px solid #e0e3f0;
  padding: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media print {
    display: none;
  }
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 1.05rem;
  color: #555;
  line-height: 1.6;
`;

export const FooterLink = styled(Link)`
  color: #667eea;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #764ba2;
    text-decoration: underline;
  }
`;

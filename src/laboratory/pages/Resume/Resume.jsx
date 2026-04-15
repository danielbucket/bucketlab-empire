import { useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import { FiDownload, FiPrinter } from 'react-icons/fi';
import {
  ResumeWrapper,
  Controls,
  DownloadBtn,
  PrintBtn,
  ResumeContent,
  Header,
  Name,
  ContactSection,
  ContactDetail,
  SectionContainer,
  SectionHeading,
  DividerLine,
  JobEntry,
  JobTitle,
  CompanyInfo,
  Duration,
  Description,
  AchievementsList,
  Achievement,
  SkillsList,
  SkillItem,
  EducationEntry,
  CertificationContainer,
  CertCard,
  CertTitle,
  CertIssuer,
  CertYear,
} from './Resume.styled';

export default function Resume() {
  const { content } = useLoaderData();
  const resumeRef = useRef(null);

  const handleDownloadPDF = () => {
    const element = resumeRef.current;
    const opt = {
      margin: [10, 10, 10, 10],
      filename: 'Resume_Daniel_Ludwick.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
    };
    html2pdf().set(opt).from(element).save();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <ResumeWrapper>
      <Controls>
        <DownloadBtn onClick={handleDownloadPDF}>
          <FiDownload /> Download PDF
        </DownloadBtn>
        <PrintBtn onClick={handlePrint}>
          <FiPrinter /> Print
        </PrintBtn>
      </Controls>

      <ResumeContent ref={resumeRef}>
        <Header>
          <Name>Daniel Ludwick</Name>
          <ContactSection>
            <ContactDetail>📧 daniel@bucketlab.io</ContactDetail>
            <ContactDetail>🔗 bucketlab.io</ContactDetail>
            <ContactDetail>📍 Golden, CO</ContactDetail>
          </ContactSection>
        </Header>

        {/* Professional Experience */}
        <SectionContainer>
          <SectionHeading>Professional Experience</SectionHeading>
          <DividerLine />
          {content.workExperience.map((job, idx) => (
            <JobEntry key={idx}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <JobTitle>{job.role}</JobTitle>
                <Duration>{job.duration}</Duration>
              </div>
              <CompanyInfo>
                <strong>{job.company}</strong> • {job.location}
                {job.website && (
                  <>
                    {' '}
                    •{' '}
                    <a href={job.website} target="_blank" rel="noopener noreferrer">
                      {job.website.replace('https://', '').replace('www.', '')}
                    </a>
                  </>
                )}
              </CompanyInfo>
              <Description>{job.description}</Description>
              {job.achievements?.length > 0 && (
                <div style={{ marginTop: '0.75rem' }}>
                  <strong style={{ fontSize: '1.1rem' }}>Key Achievements:</strong>
                  <AchievementsList>
                    {job.achievements.map((achievement, i) => (
                      <Achievement key={i}>{achievement}</Achievement>
                    ))}
                  </AchievementsList>
                </div>
              )}
            </JobEntry>
          ))}
        </SectionContainer>

        {/* Education */}
        <SectionContainer>
          <SectionHeading>Education</SectionHeading>
          <DividerLine />
          {content.education.map((edu, idx) => (
            <EducationEntry key={idx}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <strong style={{ fontSize: '1.15rem' }}>{edu.degree}</strong>
                <span style={{ fontSize: '1rem', color: '#999' }}>{edu.duration}</span>
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                {edu.institution}
              </div>
              <div style={{ fontSize: '1rem', color: '#666' }}>{edu.description}</div>
            </EducationEntry>
          ))}
        </SectionContainer>

        {/* Certifications */}
        <SectionContainer>
          <SectionHeading>Certifications</SectionHeading>
          <DividerLine />
          <CertificationContainer>
            {content.certifications.map((cert, idx) => (
              <CertCard key={idx}>
                <CertTitle>{cert.name}</CertTitle>
                <CertIssuer>{cert.issuer}</CertIssuer>
                <CertYear>{cert.date}</CertYear>
              </CertCard>
            ))}
          </CertificationContainer>
        </SectionContainer>

        {/* Skills */}
        <SectionContainer>
          <SectionHeading>Skills</SectionHeading>
          <DividerLine />
          <SkillsList>
            {content.skills.map((skill, idx) => (
              <SkillItem key={idx}>{skill}</SkillItem>
            ))}
          </SkillsList>
        </SectionContainer>
      </ResumeContent>
    </ResumeWrapper>
  );
}

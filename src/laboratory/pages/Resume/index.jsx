import { useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import { FiDownload, FiPrinter } from 'react-icons/fi';
import {
  ResumeLayout,
  ResumeContainer,
  ControlPanel,
  ActionButton,
  Header,
  HeaderContent,
  Title,
  ContactInfo,
  ContactItem,
  Section,
  SectionTitle,
  SectionDivider,
  ExperienceItem,
  ExperienceHeader,
  ExperienceTitle,
  ExperienceDetails,
  AchievementsList,
  AchievementItem,
  RequirementsList,
  RequirementItem,
  EducationItem,
  CertificationGrid,
  CertificationCard,
  SkillsContainer,
  SkillTag,
} from './index.styled';

export default function Resume() {
  const { content } = useLoaderData();
  const resumeRef = useRef(null);

  const handleDownloadPDF = () => {
    const element = resumeRef.current;
    const opt = {
      margin: 10,
      filename: 'Resume_Daniel_Bucket.pdf',
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
    <ResumeLayout>
      <ControlPanel>
        <ActionButton onClick={handleDownloadPDF} title="Download as PDF">
          <FiDownload /> Download PDF
        </ActionButton>
        <ActionButton onClick={handlePrint} title="Print resume">
          <FiPrinter /> Print
        </ActionButton>
      </ControlPanel>

      <ResumeContainer ref={resumeRef}>
        <Header>
          <HeaderContent>
            <Title>Daniel Ludwick</Title>
            <ContactInfo>
              <ContactItem>📧 daniel@bucketlab.io</ContactItem>
              <ContactItem>🔗 bucketlab.io</ContactItem>
              <ContactItem>📍 Golden, CO</ContactItem>
            </ContactInfo>
          </HeaderContent>
        </Header>

        {/* Work Experience Section */}
        <Section>
          <SectionTitle>Professional Experience</SectionTitle>
          <SectionDivider />
          {content.workExperience.map((job, index) => (
            <ExperienceItem key={index}>
              <ExperienceHeader>
                <ExperienceTitle>{job.role}</ExperienceTitle>
                <span>{job.duration}</span>
              </ExperienceHeader>
              <ExperienceDetails>
                <strong>{job.company}</strong> • {job.location}
                {job.website && (
                  <>
                    {' '}
                    •{' '}
                    <a
                      href={job.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {job.website.replace('https://', '').replace('www.', '')}
                    </a>
                  </>
                )}
              </ExperienceDetails>
              <p>{job.description}</p>
              {job.achievements && job.achievements.length > 0 && (
                <div>
                  <strong>Key Achievements:</strong>
                  <AchievementsList>
                    {job.achievements.map((achievement, idx) => (
                      <AchievementItem key={idx}>{achievement}</AchievementItem>
                    ))}
                  </AchievementsList>
                </div>
              )}
            </ExperienceItem>
          ))}
        </Section>

        {/* Education Section */}
        <Section>
          <SectionTitle>Education</SectionTitle>
          <SectionDivider />
          {content.education.map((edu, index) => (
            <EducationItem key={index}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong>{edu.degree}</strong>
                <span>{edu.duration}</span>
              </div>
              <p>{edu.institution}</p>
              <p>{edu.description}</p>
            </EducationItem>
          ))}
        </Section>

        {/* Certifications Section */}
        <Section>
          <SectionTitle>Certifications</SectionTitle>
          <SectionDivider />
          <CertificationGrid>
            {content.certifications.map((cert, index) => (
              <CertificationCard key={index}>
                <div style={{ fontWeight: 'bold' }}>{cert.name}</div>
                <div style={{ fontSize: '0.9em', color: '#666' }}>
                  {cert.issuer}
                </div>
                <div style={{ fontSize: '0.85em', color: '#999', marginTop: '0.5em' }}>
                  {cert.date}
                </div>
              </CertificationCard>
            ))}
          </CertificationGrid>
        </Section>

        {/* Skills Section */}
        <Section>
          <SectionTitle>Skills</SectionTitle>
          <SectionDivider />
          <SkillsContainer>
            {content.skills.map((skill, index) => (
              <SkillTag key={index}>{skill}</SkillTag>
            ))}
          </SkillsContainer>
        </Section>
      </ResumeContainer>
    </ResumeLayout>
  );
}



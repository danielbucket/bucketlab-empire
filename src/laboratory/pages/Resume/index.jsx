import { useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import { FiDownload, FiPrinter } from 'react-icons/fi';
import {
  ResumeLayout,
  ResumeWrapper,
  ControlPanel,
  ActionButton,
  ResumePaper,
  Header,
  HeaderTitle,
  HeaderSubtitle,
  ContactGrid,
  ContactItem,
  Section,
  SectionHeading,
  SectionContent,
  JobCard,
  JobTitle,
  JobMeta,
  JobDescription,
  JobLink,
  AchievementList,
  AchievementListItem,
  RequirementList,
  RequirementListItem,
  EducationCard,
  EducationDegree,
  EducationInstitution,
  EducationYear,
  ProjectCard,
  ProjectName,
  ProjectTech,
  CertificationList,
  CertificationItem,
  SkillsGrid,
  SkillBadge,
  HobbyGrid,
  HobbyTag,
} from './index.styled';

export default function Resume() {
  const { content } = useLoaderData();
  const resumeRef = useRef(null);

  const handleDownloadPDF = () => {
    const element = resumeRef.current;
    const opt = {
      margin: [10, 10, 10, 10],
      filename: 'Resume_Daniel_Ludwick.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
    };
    html2pdf().set(opt).from(element).save();
  };

  const handlePrint = () => {
    const element = resumeRef.current;
    const opt = {
      margin: [10, 10, 10, 10],
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
    };
    html2pdf().set(opt).from(element).outputImg('dataurlstring').then((dataUrl) => {
      const printWindow = window.open('', '_blank');
      printWindow.document.write(`
        <html>
          <head>
            <title>Resume - Daniel Ludwick</title>
            <style>
              body { margin: 0; padding: 0; }
              img { max-width: 100%; height: auto; display: block; }
              @media print {
                body { margin: 0; padding: 0; }
                img { max-width: 100%; height: auto; }
              }
            </style>
          </head>
          <body>
            <img src="${dataUrl}" />
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    });
  };

  return (
    <ResumeLayout>
      <ResumeWrapper>
        <ControlPanel>
          <ActionButton onClick={handleDownloadPDF} title="Download as PDF">
            <FiDownload /> Download PDF
          </ActionButton>
          <ActionButton onClick={handlePrint} title="Print resume">
            <FiPrinter /> Print
          </ActionButton>
        </ControlPanel>

        <ResumePaper ref={resumeRef}>
          {/* Header */}
          <Header>
            <HeaderTitle>{content.contactInformation?.name || 'Daniel Ludwick'}</HeaderTitle>
            <HeaderSubtitle>Full Stack Developer | Software Engineer | Entrepreneur</HeaderSubtitle>
            <ContactGrid>
              {content.contactInformation?.email && (
                <ContactItem>{content.contactInformation.email}</ContactItem>
              )}
              {content.contactInformation?.phone && (
                <ContactItem>{content.contactInformation.phone}</ContactItem>
              )}
              {content.contactInformation?.location && (
                <ContactItem>{content.contactInformation.location}</ContactItem>
              )}
              {content.contactInformation?.linkedin && (
                <ContactItem>
                  <a href={`https://${content.contactInformation.linkedin}`} target="_blank" rel="noopener noreferrer">
                    {content.contactInformation.linkedin.replace('www.', '')}
                  </a>
                </ContactItem>
              )}
              {content.contactInformation?.github && (
                <ContactItem>
                  <a href={content.contactInformation.github} target="_blank" rel="noopener noreferrer">
                    {content.contactInformation.github.replace('https://', '')}
                  </a>
                </ContactItem>
              )}
            </ContactGrid>
          </Header>

          {/* Professional Experience */}
          <Section>
            <SectionHeading>Professional Experience</SectionHeading>
            <SectionContent>
              {content.workExperience.map((job, index) => (
                <JobCard key={index}>
                  <JobTitle>{job.role}</JobTitle>
                  <JobMeta>
                    <strong>{job.company}</strong> • {job.location} • {job.duration}
                    {job.website && (
                      <>
                        {' '}
                        •{' '}
                        <JobLink
                          href={job.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit
                        </JobLink>
                      </>
                    )}
                  </JobMeta>
                  <JobDescription>{job.description}</JobDescription>
                  
                  {job.achievements && job.achievements.length > 0 && (
                    <div style={{ marginTop: '0.75rem' }}>
                      <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '0.5rem' }}>
                        Key Achievements:
                      </strong>
                      <AchievementList>
                        {job.achievements.map((achievement, idx) => (
                          <AchievementListItem key={idx}>
                            {achievement}
                          </AchievementListItem>
                        ))}
                      </AchievementList>
                    </div>
                  )}
                </JobCard>
              ))}
            </SectionContent>
          </Section>

          {/* Education */}
          <Section>
            <SectionHeading>Education</SectionHeading>
            <SectionContent>
              {content.education.map((edu, index) => (
                <EducationCard key={index}>
                  <EducationDegree>{edu.degree}</EducationDegree>
                  <EducationInstitution>{edu.institution}</EducationInstitution>
                  <EducationYear>{edu.duration}</EducationYear>
                  <p style={{ marginTop: '0.5rem' }}>{edu.description}</p>
                </EducationCard>
              ))}
            </SectionContent>
          </Section>

          {/* Projects */}
          {content.projects && content.projects.length > 0 && (
            <Section>
              <SectionHeading>Projects</SectionHeading>
              <SectionContent>
                {content.projects.map((project, index) => (
                  <ProjectCard key={index}>
                    <ProjectName>{project.name}</ProjectName>
                    <p style={{ margin: '0.5rem 0' }}>{project.description}</p>
                    <ProjectTech>
                      <strong>Technologies:</strong> {project.technologies.join(', ')}
                    </ProjectTech>
                    {project.link && (
                      <div style={{ marginTop: '0.5rem' }}>
                        <JobLink href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project →
                        </JobLink>
                      </div>
                    )}
                  </ProjectCard>
                ))}
              </SectionContent>
            </Section>
          )}

          {/* Certifications */}
          <Section>
            <SectionHeading>Certifications</SectionHeading>
            <SectionContent>
              <CertificationList>
                {content.certifications.map((cert, index) => (
                  <CertificationItem key={index}>
                    <strong>{cert.name}</strong>
                    <span style={{ color: '#666', marginLeft: '0.5rem' }}>
                      {cert.issuer} • {cert.date}
                    </span>
                  </CertificationItem>
                ))}
              </CertificationList>
            </SectionContent>
          </Section>

          {/* Skills */}
          <Section>
            <SectionHeading>Technical Skills</SectionHeading>
            <SectionContent>
              <SkillsGrid>
                {content.skills.map((skill, index) => (
                  <SkillBadge key={index}>{skill}</SkillBadge>
                ))}
              </SkillsGrid>
            </SectionContent>
          </Section>

          {/* Hobbies */}
          {content.hobbies && content.hobbies.length > 0 && (
            <Section>
              <SectionHeading>Interests & Hobbies</SectionHeading>
              <SectionContent>
                <HobbyGrid>
                  {content.hobbies.map((hobby, index) => (
                    <HobbyTag key={hobby + index}>{hobby}</HobbyTag>
                  ))}
                </HobbyGrid>
              </SectionContent>
            </Section>
          )}
        </ResumePaper>
      </ResumeWrapper>
    </ResumeLayout>
  );
}



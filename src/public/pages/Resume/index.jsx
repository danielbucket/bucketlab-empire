import { useLoaderData, Link } from 'react-router-dom';
import {
  ResumePageWrapper,
  ResumeContainer,
  ResumeHeader,
  ResumeTitle,
  PreviewNotice,
  PreviewNoticeContent,
  PreviewIcon,
  NoticeText,
  LoginPrompt,
  LoginLink,
  LoginButton,
  ResumeContent,
  Section,
  SectionTitle,
  SectionDivider,
  JobCard,
  JobHeader,
  JobTitle,
  JobMeta,
  JobDescription,
  AchievementList,
  AchievementItem,
  EducationCard,
  EducationDegree,
  EducationInstitution,
  CertificationGrid,
  CertificationCard,
  SkillsContainer,
  SkillTag,
  Footer,
  FooterText,
  FooterLink,
} from './index.styled';

export default function PublicResume() {
  const resume = useLoaderData();

  return (
    <ResumePageWrapper>
      <ResumeContainer>
        <ResumeHeader>
          <ResumeTitle>Professional Experience & Qualifications</ResumeTitle>
          <PreviewNotice>
            <PreviewNoticeContent>
              <PreviewIcon>📋</PreviewIcon>
              <NoticeText>
                This is a public preview of professional qualifications. For the
                complete resume with contact information and full details, please
                <strong> create an account</strong> and log in.
              </NoticeText>
            </PreviewNoticeContent>
            <LoginPrompt>
              <span>Want the full resume?</span>
              <LoginLink to="/portal/login">
                <LoginButton>Login / Create Account</LoginButton>
              </LoginLink>
            </LoginPrompt>
          </PreviewNotice>
        </ResumeHeader>

        <ResumeContent>
          {/* Work Experience Section */}
          {resume.workExperience && resume.workExperience.length > 0 && (
            <Section>
              <SectionTitle>Work Experience</SectionTitle>
              <SectionDivider />
              {resume.workExperience.map((job, index) => (
                <JobCard key={index}>
                  <JobHeader>
                    <div>
                      <JobTitle>{job.role}</JobTitle>
                      <JobMeta>
                        {job.company} • {job.location}
                      </JobMeta>
                    </div>
                    <span>{job.duration}</span>
                  </JobHeader>
                  <JobDescription>{job.description}</JobDescription>
                  {job.achievements && job.achievements.length > 0 && (
                    <div>
                      <strong>Key Achievements:</strong>
                      <AchievementList>
                        {job.achievements.map((achievement, idx) => (
                          <AchievementItem key={idx}>
                            {achievement}
                          </AchievementItem>
                        ))}
                      </AchievementList>
                    </div>
                  )}
                </JobCard>
              ))}
            </Section>
          )}

          {/* Education Section */}
          {resume.education && resume.education.length > 0 && (
            <Section>
              <SectionTitle>Education</SectionTitle>
              <SectionDivider />
              {resume.education.map((edu, index) => (
                <EducationCard key={index}>
                  <EducationDegree>{edu.degree}</EducationDegree>
                  <EducationInstitution>{edu.institution}</EducationInstitution>
                  <p>{edu.duration}</p>
                  <p>{edu.description}</p>
                </EducationCard>
              ))}
            </Section>
          )}

          {/* Certifications Section */}
          {resume.certifications && resume.certifications.length > 0 && (
            <Section>
              <SectionTitle>Certifications</SectionTitle>
              <SectionDivider />
              <CertificationGrid>
                {resume.certifications.map((cert, index) => (
                  <CertificationCard key={index}>
                    <strong>{cert.name}</strong>
                    <p>{cert.issuer}</p>
                    <p>{cert.date}</p>
                  </CertificationCard>
                ))}
              </CertificationGrid>
            </Section>
          )}

          {/* Skills Section */}
          {resume.skills && resume.skills.length > 0 && (
            <Section>
              <SectionTitle>Skills</SectionTitle>
              <SectionDivider />
              <SkillsContainer>
                {resume.skills.map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </SkillsContainer>
            </Section>
          )}
        </ResumeContent>

        <Footer>
          <FooterText>
            Ready to see more?{' '}
            <FooterLink to="/portal/login">Login</FooterLink> to download and
            view the complete resume.
          </FooterText>
        </Footer>
      </ResumeContainer>
    </ResumePageWrapper>
  );
}

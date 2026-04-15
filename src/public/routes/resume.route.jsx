import Resume from '../pages/Resume/index.jsx';
import { PUBLIC_URLS, API_URLS } from '../../globals/global.urls.js';
import resumeData from '../pages/Resume/resume.stub.json';

export const resumeRoute = {
  path: PUBLIC_URLS.resume.root,
  element: <Resume />,
  loader: async () => {
    try {
      const response = await fetch(API_URLS.laboratory.getResume);
      if (!response.ok) throw new Error('Failed to fetch resume');
      const fullResume = await response.json();

      // Filter out sensitive information for public viewing
      // Remove: website URLs, requirements, and personal details
      const publicResume = {
        title: fullResume.title,
        description: fullResume.description,
        workExperience: fullResume.workExperience?.map((job) => ({
          company: job.company,
          location: job.location,
          role: job.role,
          duration: job.duration,
          description: job.description,
          achievements: job.achievements,
          // Omitting: website, requirements
        })) || [],
        education: fullResume.education || [],
        certifications: fullResume.certifications || [],
        skills: fullResume.skills || [],
      };

      return publicResume;
    } catch (error) {
      console.warn('Failed to fetch resume from API, using stub data:', error);
      
      // Fallback to stub data and filter it
      const publicResume = {
        title: resumeData.title,
        description: resumeData.description,
        workExperience: resumeData.workExperience?.map((job) => ({
          company: job.company,
          location: job.location,
          role: job.role,
          duration: job.duration,
          description: job.description,
          achievements: job.achievements,
        })) || [],
        education: resumeData.education || [],
        certifications: resumeData.certifications || [],
        skills: resumeData.skills || [],
      };

      return publicResume;
    }
  }
};
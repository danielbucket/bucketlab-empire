import Resume from '../pages/Resume/index.jsx';
import { PUBLIC_URLS, API_URLS } from '../../globals/global.urls.js';

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
      console.error('Failed to fetch resume from API:', error);
      throw new Error('Unable to load resume data. Please try again later.');
    }
  }
};
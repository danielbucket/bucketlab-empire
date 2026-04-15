import Resume from '../pages/Resume';
import { API_URLS, PRIVATE_URLS } from '../../globals/global.urls.js';

export const resumeRoute = {
  path: PRIVATE_URLS.laboratory.resume,
  element: <Resume />,
  loader: async () => {
    try {
      const response = await fetch(API_URLS.laboratory.getResume);
      if (!response.ok) throw new Error('Failed to fetch resume');
      const content = await response.json();

      return { content };
    } catch (error) {
      console.error('Error loading resume:', error);
      throw error;
    }
  }
};
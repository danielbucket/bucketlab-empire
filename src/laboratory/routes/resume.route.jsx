import Resume from '../pages/Resume';
import { API_URLS, PRIVATE_URLS } from '../../globals/global.urls.js';

export const resumeRoute = {
  path: PRIVATE_URLS.laboratory.resume,
  element: <Resume />,
  // return the content as part of the loader data
  loader: () => {
    const response = fetch(API_URLS.laboratory.getResume);
    const content = response.json();

    return { content };
  }
};
import About from '../pages/About';
import pageImage from '../assets/images/danielBucket_ai_01.jpeg';
import { PUBLIC_URLS } from '../../globals/global.urls.js';

const contentData = {
  bio: "'Sup, yo. I'm Daniel Bucket, founding father and supremely leading visionary supreme of the BucketLab Empire. You can tell because of the way I am.",
};

export const aboutRoute = {
  path: PUBLIC_URLS.about.root,
  element: <About />,
  loader: async () => {
    return {
      pageImage,
      contentData
    };
  }
};
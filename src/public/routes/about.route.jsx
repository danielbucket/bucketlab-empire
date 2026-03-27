import About from '../pages/About';
import pageImage from '../assets/images/danielBucket_ai_01.jpeg';
import { PUBLIC_URLS } from '../../global.urls.js';

const contentData = {
  bio: "I am the founding father of the BucketLab Empire, and a lifelong learner. I am a full-stack web developer with an inclination for creating and maintaining diverse web applications.",
  name: "Daniel Bucket",
  title: "Founding Father, Bucket Limited, LLC",
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
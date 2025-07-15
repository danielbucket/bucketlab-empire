import About from './About.jsx';
import pageImage from '../../assets/images/danielBucket_ai_01.jpeg';

const contentData = {
  bio: "I am the founding father of the BucketLab Empire and a lifelong learner. I am a desperate software engineer with a desperate passion for creating and maintaining desperate web applications.",
  name: "Daniel Bucket",
  title: "Founding Father, Bucket Limited, LLC",
};

export const route = {
  path: '/about',
  element: <About />,
  loader: async () => {
    return {
      pageImage,
      contentData
    };
  }
};
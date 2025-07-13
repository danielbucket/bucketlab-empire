import About from './About.jsx';
import pageImage from '../../assets/images/laboratory_01.jpeg';

const contentData = {
  bio: "Daniel Bucket is the founding father of the BucketLab Empire and a lifelong learner. He is a software engineer with a passion for creating and maintaining web applications. Daniel is a dedicated professional who is committed to delivering high-quality software solutions.",
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
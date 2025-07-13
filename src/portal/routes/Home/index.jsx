import Home from './Home.jsx';
import pageImage from '../../assets/images/danielBucket_ai_01.jpeg';

export const route = {
  element: <Home />,
  index: true,
  loader: async () => {
    return {
      pageImage: pageImage
    };
  }
};
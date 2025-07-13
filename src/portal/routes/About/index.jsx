import About from './About.jsx';
import pageImage from '../../assets/images/laboratory_01.jpeg';

export const route = {
  path: '/about',
  element: <About />,
  loader: async () => {
    return {
      pageImage: pageImage
    };
  }
};
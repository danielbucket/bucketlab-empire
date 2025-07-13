import Contact from './Contact.jsx';
import pageImage from '../../assets/images/laboratory_02.jpeg';

export const route = {
  path: '/contact',
  element: <Contact />,
  loader: async () => {
    return {
      pageImage: pageImage
    };
  }
};
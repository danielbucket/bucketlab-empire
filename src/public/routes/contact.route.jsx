import Contact from '../pages/Contact';
import pageImage from '../assets/images/laboratory_02.jpeg';

const pageText = 'Thanks for visiting my laboratory! I\'m currently building a contact form for this page. In the meantime, feel free to reach out to me on LinkedIn. I look forward to hearing from you!';

export const contactRoute = {
  path: '/contact',
  element: <Contact />,
  loader: async () => {
    return {
      pageImage,
      contentData: {
        text: pageText
      }
    };
  }
};
import Finance from '../pages/Finance/Finance.jsx';
import pageImage from '../assets/images/office_01.jpeg';

export const financeRoute = {
  path: '/finance',
  element: <Finance />,
  loader: async () => {
    return {
      pageImage,
      content: {
        title: 'Finance',
        description: 'Description of Finance'
      }
    };
  }
};
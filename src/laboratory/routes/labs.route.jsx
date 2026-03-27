import Labs from '../pages/Labs/Labs.jsx';
import pageImage from '../assets/images/office_01.jpeg';

export const labsRoute = {
  path: '/laboratory/labs',
  element: <Labs />,
  loader: async () => {
    return {
      pageImage,
      content: {
        title: 'Labs',
        description: 'Explore various laboratory experiments and projects'
      }
    }
  }
};
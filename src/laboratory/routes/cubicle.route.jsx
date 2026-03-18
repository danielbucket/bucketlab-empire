import Cubicle from '../pages/Cubicle/Cubicle.jsx';
import pageImage from '../assets/images/office_01.jpeg';

export const cubicleRoute = {
  path: '/laboratory/cubicle',
  element: <Cubicle />,
  loader: async () => {
    return {
      pageImage,
      content: {
        title: 'Cubicle',
        description: 'A cozy corner for focused work and creativity'
      }
    }
  }
};
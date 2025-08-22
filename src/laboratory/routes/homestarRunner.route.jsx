import HomestarRunner from '../pages/HomestarRunner';
import pageImage from '../assets/images/Homestar_Runner_logo.svg.png';

export const homestarRunnerRoute = {
  path: '/laboratory/HomestarRunner',
  element: <HomestarRunner />,
  loader: async () => {
    return {
      pageImage,
      content: {
        title: 'Homestar Runner',
        description: 'A tribute to the classic Homestar Runner web series.',
        videoUrl: 'https://youtube.com/embed/NWwEWcL5Df0'
      }
    };
  }
};
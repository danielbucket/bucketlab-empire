import HomestarRunner from '../pages/HomestarRunner';
import pageImage from '../assets/images/Homestar_Runner_logo.svg.png';

export const homestarRunnerRoute = {
  path: '/laboratory/homestar-runner',
  element: <HomestarRunner />,
  loader: async () => {
    return {
      pageImage,
      content: {
        title: 'Homestar Runner',
        description: 'Promoting Homestar Runner awareness',
        videoUrl: 'https://youtube.com/embed/NWwEWcL5Df0'
      }
    };
  }
};
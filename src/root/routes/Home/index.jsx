import Home from './Home.jsx';
import pageImage from '../../assets/images/laboratory_01.jpeg';

export const route = {
  index: true,
  element: <Home />,
  loader: async () => {
    // Simulating a data fetch
    // await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      pageImage,
      contentData: {
        quote: 'Solving all of the worlds problems, one bucket of code at a time.',
        author: 'The Code Bucket',
      }
    };
  }
};
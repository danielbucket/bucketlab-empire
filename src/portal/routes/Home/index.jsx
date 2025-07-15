import Home from './Home.jsx';
import pageImage from '../../assets/images/laboratory_01.jpeg';

const contentData = {
  quote: 'Solving all of the worlds problems, one bucket of code at a time.',
  author: 'The Code Bucket',
};

export const route = {
  element: <Home />,
  index: true,
  loader: async () => {
    // Simulating a data fetch
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Returning the stub data and page image
    // In a real application, this would be replaced with an actual data fetch
    // For example, fetching from an API or a database
    // const response = await fetch('/api/home');
    // const data = await response.json();
    // return { stub: data.stub, pageImage: data.pageImage };
    // Here we return the stub and pageImage directly
    // as if they were fetched from an API
    return {
      pageImage,
      contentData
    };
  }
};
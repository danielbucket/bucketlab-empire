import MythtaT from './MythtaT.jsx'; 
import pageImage from './assets/T100_0724.jpg';

export const route = {
  path: '/mythta-t',
  element: <MythtaT />,
  loader: async () => {
    // Simulate data fetching
    return {
      image: pageImage,
      content: {
        title: 'Mythta T',
        description: 'Description of Mythta T'
      }
    };
  }
}
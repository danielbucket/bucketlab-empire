import MythtaT from '../pages/MythtaT'; 
import pageImage from '../assets/images/T100_0724.jpg';

export const mythtaTRoute = {
  path: '/mythta-t',
  element: <MythtaT />,
  loader: async () => {
    return {
      image: pageImage,
      content: {
        title: 'Mythta T',
        description: '1998 Toyota T100 SR5 4x4'
      }
    };
  }
}
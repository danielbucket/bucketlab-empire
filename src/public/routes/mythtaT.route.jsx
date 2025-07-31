import MythtaT from '../pages/MythtaT'; 
import image from '../assets/images/T100_0724.jpg';

const content = {
  title: 'Mythta T',
  description: '1998 Toyota T100 SR5 4x4'
};

export const mythtaTRoute = {
  path: '/mythta-t',
  element: <MythtaT />,
  loader: async () => ({
      image,
      content
  })
};
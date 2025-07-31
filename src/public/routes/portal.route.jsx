import Portal from '../pages/Portal/index.jsx';
import pageImage from '../assets/images/lab_access_image.jpeg';

const contentData = {
  title: 'Portal',
  description: 'Super high-tech portal to the laboratory, resources, and tools.'
};

export const portalRoute = {
  path: '/portal',
  element: <Portal />,
  loader: () => ({
    pageImage,
    contentData
  }),
};
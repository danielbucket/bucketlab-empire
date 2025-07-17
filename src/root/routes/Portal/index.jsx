import Portal from './Portal.jsx';
import pageImage from '../../assets/images/lab_access_image.jpeg';

const contentData = {
  title: 'Portal',
  description: 'Super high-tech portal to the laboratory, resources, and tools.'
};

export const route = {
  path: '/portal',
  element: <Portal />,
  loader: () => ({
    pageImage,
    contentData
  }),
};
import Portal from '../pages/Portal/';
import pageImage from '../assets/images/lab_access_image.jpeg';
import { PUBLIC_URLS } from '../../globals/global.urls.js';

const contentData = {
  title: 'Portal',
  description: 'Super high-tech portal to the laboratory, resources, and tools.'
};

export const portalRoute = {
  path: PUBLIC_URLS.portal.root,
  element: <Portal />,
  loader: () => ({
    pageImage,
    contentData
  })
};
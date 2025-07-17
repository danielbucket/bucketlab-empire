import Inboarding from './Inboarding.jsx';
import pageImage from '../../assets/images/robot-builder.jpeg';

export const route = {
  path: '/portal/inboarding',
  element: <Inboarding />,
  loader: async () => {
    return {
      pageImage,
      contentData: {
        title: "Inboarding",
        description: "Fill out the form below to create a new user account."
      }
    };
  }
};
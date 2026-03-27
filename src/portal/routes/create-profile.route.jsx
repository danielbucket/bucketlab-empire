import CreateProfile from '../pages/CreateProfile/index.jsx';
import pageImage from '../assets/images/robot-builder.jpeg';

export const createProfileRoute = {
  path: '/portal/create-profile',
  element: <CreateProfile />,
  loader: async () => {
    return {
      pageImage,
      contentData: {
        title: "New Profile",
        description: "Fill out the form below to create a new profile."
      }
    };
  }
};
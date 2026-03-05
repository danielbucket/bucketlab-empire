import NewProfile from '../pages/NewProfile/index.jsx';
import pageImage from '../assets/images/robot-builder.jpeg';

export const newProfileRoute = {
  path: '/auth/new',
  element: <NewProfile />,
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
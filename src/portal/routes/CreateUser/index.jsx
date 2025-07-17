import CreateUser from './CreateUser.jsx';
import pageImage from '../../assets/images/robot-builder.jpeg';

export const route = {
  path: '/portal/create-user',
  element: <CreateUser />,
  loader: async () => {
    return {
      pageImage,
      contentData: {
        title: "Create User",
        description: "Fill out the form below to create a new user account."
      }
    };
  }
};
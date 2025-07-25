import NewUser from './NewLogin.jsx';
import pageImage from '../../assets/images/robot-builder.jpeg';

export const route = {
  path: '/portal/new-login',
  element: <NewUser />,
  loader: async () => {
    return {
      pageImage,
      contentData: {
        title: "New Login",
        description: "Fill out the form below to create a new loginw account."
      }
    };
  }
};
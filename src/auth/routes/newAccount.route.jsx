import NewAccount from '../pages/NewAccount/index.jsx';
import pageImage from '../assets/images/robot-builder.jpeg';

export const newAccountRoute = {
  path: '/auth/new',
  element: <NewAccount />,
  loader: async () => {
    return {
      pageImage,
      contentData: {
        title: "New Account",
        description: "Fill out the form below to create a new account."
      }
    };
  }
};
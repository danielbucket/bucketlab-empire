import NewTraveler from './NewTraveler.jsx';
import pageImage from '../../assets/images/robot-builder.jpeg';

export const route = {
  path: '/portal/new-traveler',
  element: <NewTraveler />,
  loader: async () => {
    return {
      pageImage,
      contentData: {
        title: "New Traveler",
        description: "Fill out the form below to create a new user account."
      }
    };
  }
};
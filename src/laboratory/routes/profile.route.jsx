import Profile from '../pages/Profile/Profile.jsx';

export const profileRoute = {
  path: '/laboratory/profile',
  element: <Profile />,
  loader: async () => {
    return {
      user: {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com'
      }
    };
  }
};
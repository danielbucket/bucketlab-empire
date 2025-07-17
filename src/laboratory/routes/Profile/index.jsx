import Profile from './Profile.jsx';

export const route = {
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
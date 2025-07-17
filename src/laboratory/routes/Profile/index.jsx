import Profile from './Profile.jsx';

export const route = {
  path: '/laboratory/profile',
  element: <Profile />,
  loader: async () => {
    // You can add any data fetching logic here if needed
    return {
      user: {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com'
      }
    };
  }
};
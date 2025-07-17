import Messages from './Messages.jsx';

export const route = {
  path: '/laboratory/messages',
  element: <Messages />,
  loader: async () => {
    // You can add any data fetching logic here if needed
    return {
      messages: [], // Placeholder for messages data
    };
  },
  errorElement: <div>Error loading messages</div>,
};
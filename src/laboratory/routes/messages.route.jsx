import Messages from '../pages/Messages/Messages.jsx';

export const messagesRoute = {
  path: '/laboratory/messages',
  element: <Messages />,
  loader: async () => {
    return {
      messages: []
    };
  },
};
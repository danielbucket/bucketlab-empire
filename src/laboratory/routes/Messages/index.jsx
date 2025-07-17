import Messages from './Messages.jsx';

export const route = {
  path: '/laboratory/messages',
  element: <Messages />,
  loader: async () => {
    return {
      messages: []
    };
  },
};
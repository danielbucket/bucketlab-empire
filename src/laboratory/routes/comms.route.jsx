import Comms from '../pages/Comms/Comms.jsx';

export const commsRoute = {
  path: '/laboratory/comms',
  element: <Comms />,
  loader: async () => {
    return {
      messages: []
    };
  },
};
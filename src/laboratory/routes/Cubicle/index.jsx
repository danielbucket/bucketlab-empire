import Cubicle from './Cubicle.jsx';

export const route = {
  element: <Cubicle />,
  index: true,
  loader: async () => {
    // You can add any data fetching logic here if needed
    return {};
  },
  errorElement: <div>Error loading cubicle</div>,
};
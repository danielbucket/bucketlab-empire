import Watchlist from './Watchlist.jsx';

export const route  = {
  path: '/laboratory/watchlist',
  element: <Watchlist />,
  loader: async () => {
    // You can add any data fetching logic here if needed
    return {
      watchlist: [] // Placeholder for watchlist data
    };
  },
  errorElement: <div>Error loading watchlist</div>
};
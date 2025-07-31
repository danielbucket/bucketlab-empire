import Watchlist from '../pages/Watchlist/Watchlist.jsx';

export const watchlistRoute  = {
  path: '/laboratory/watchlist',
  element: <Watchlist />,
  loader: async () => {
    return {
      watchlist: []
    }
  }
};
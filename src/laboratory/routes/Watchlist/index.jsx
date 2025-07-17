import Watchlist from './Watchlist.jsx';

export const route  = {
  path: '/laboratory/watchlist',
  element: <Watchlist />,
  loader: async () => {
    return {
      watchlist: []
    }
  }
};
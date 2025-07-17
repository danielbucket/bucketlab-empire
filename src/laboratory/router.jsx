import { route as RootRoute } from './routes/Root/';
import { route as CubicleRoute } from './routes/Cubicle';
import { route as ProfileRoute } from './routes/Profile';
import { route as WatchlistRoute } from './routes/Watchlist';
import { route as MessagesRoute } from './routes/Messages';
import LaboratoryError from './routes/LaboratoryError/LaboratoryError.jsx';

export const router = Object.assign({}, RootRoute, {
  errorElement: <LaboratoryError />,
  children: [
    { ...CubicleRoute, index: true },
    ProfileRoute,
    WatchlistRoute,
    MessagesRoute
  ]
});

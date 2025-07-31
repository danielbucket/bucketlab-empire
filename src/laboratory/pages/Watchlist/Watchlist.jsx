import { WatchlistContainer } from './watchlist.js';
import { useLoaderData } from 'react-router-dom';
// import WatchlistItem from './WatchlistItem.jsx';

export default function Watchlist() {
  const { watchlist } = useLoaderData();

  return (
    <WatchlistContainer>
      <h1>Watchlist</h1>
      {watchlist.length === 0 ? (
        <p>No items in watchlist.</p>
      ) : (
        <ul>
          {watchlist.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </WatchlistContainer>
  );
}

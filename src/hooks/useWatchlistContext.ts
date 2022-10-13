import { WatchlistContext } from 'src/context';
import { useContextSelector } from 'use-context-selector';

const useWatchlistContext = () => {
  const watchlist: any = useContextSelector(
    WatchlistContext,
    ({ movies }) => movies
  );

  const add = useContextSelector(WatchlistContext, ({ addMovie }) => addMovie);

  const setNewWatchlist = useContextSelector(
    WatchlistContext,
    ({ setWatchlist }) => setWatchlist
  );

  return { watchlist, add, setNewWatchlist };
};

export default useWatchlistContext;

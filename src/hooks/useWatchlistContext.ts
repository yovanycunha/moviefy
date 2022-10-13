import { WatchlistContext } from 'src/context';
import { useContextSelector } from 'use-context-selector';

const useWatchlistContext = () => {
  const watchlist: any = useContextSelector(
    WatchlistContext,
    ({ movies }) => movies
  );

  const add = useContextSelector(WatchlistContext, ({ addMovie }) => addMovie);

  return { watchlist, add };
};

export default useWatchlistContext;

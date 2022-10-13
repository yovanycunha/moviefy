import { useCallback, useState } from 'react';
import { createContext } from 'use-context-selector';

type TMovie = {
  Title: string;
  Poster: string;
};

type TWatchlistContext = {
  movies: TMovie[];
  addMovie: (newMoview: TMovie) => void;
  setWatchlist: (newWatchlist: TMovie[]) => void;
};

interface IWatchlistProviderProps {
  children: React.ReactNode;
}

export const WatchlistContext = createContext({} as TWatchlistContext);

const WatchlistProvider = ({ children }: IWatchlistProviderProps) => {
  const [watchlist, setWatchlist] = useState<TMovie[]>([]);

  const update = useCallback(
    (movie: TMovie) => {
      setWatchlist([...watchlist, movie]);
    },
    [watchlist]
  );

  const setNewWatchlist = useCallback((newWatchlist: TMovie[]) => {
    setWatchlist(newWatchlist);
  }, []);

  return (
    <WatchlistContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        movies: watchlist,
        addMovie: update,
        setWatchlist: setNewWatchlist,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export default WatchlistProvider;

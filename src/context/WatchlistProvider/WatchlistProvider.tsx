import { useCallback, useState } from 'react';
import { createContext } from 'use-context-selector';

type TMovie = {
  Title: string;
  Poster: string;
};

type TWatchlistContext = {
  movies: TMovie[];
  addMovie: (newMoview: TMovie) => void;
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

  return (
    <WatchlistContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        movies: watchlist,
        addMovie: update,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export default WatchlistProvider;

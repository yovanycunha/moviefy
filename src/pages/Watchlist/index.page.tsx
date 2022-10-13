import Image from 'next/image';

import Nav from '@components/Nav/Nav';
import useWatchlistContext from '@hooks/useWatchlistContext';

import style from './Watchlist.module.scss';

import GenericPoster from '../../../public/images/movie2.jpeg';

type TMovie = {
  Title: string;
  Poster: string;
  id: string;
};

function Watchlist() {
  const { watchlist, setNewWatchlist } = useWatchlistContext();

  const removeFromWatchlist = (id: string) => {
    const newWatchlist = watchlist.filter((movie: TMovie) => {
      return movie.id !== id;
    });

    setNewWatchlist(newWatchlist);
  };

  const renderWatchlist = () => {
    const cards = watchlist.map((movie: TMovie) => {
      let srcPoster = GenericPoster;
      if (movie.Poster !== 'N/A') {
        srcPoster = movie.Poster;
      }
      return (
        <div className={style.card} key={Math.random()}>
          <h3 className={style.cardTitle}>{movie.Title}</h3>
          <Image src={srcPoster} layout="responsive" width={320} height={420} />
          <button
            onClick={() => removeFromWatchlist(movie.id)}
            className={style.removeBtn}
            type="submit"
          >
            Remover da Watchlist
          </button>
        </div>
      );
    });

    return cards;
  };

  return (
    <div className={style.container}>
      <Nav />
      {watchlist.length !== 0 && (
        <div className={style.listContainer}>{renderWatchlist()}</div>
      )}
    </div>
  );
}

export default Watchlist;

import Image from 'next/image';

import Nav from '@components/Nav/Nav';
import useWatchlistContext from '@hooks/useWatchlistContext';

import style from './Watchlist.module.scss';

import GenericPoster from '../../../public/images/movie2.jpeg';

function Watchlist() {
  const { watchlist } = useWatchlistContext();

  const removeFromWatchlist = (index: number) => {
    const newWatchlist = watchlist.splice(index, 1);

    console.log('remove', newWatchlist, watchlist);
  };

  const renderWatchlist = () => {
    const cards = watchlist.map((movie, index: number) => {
      let srcPoster = GenericPoster;
      if (movie.Poster !== 'N/A') {
        srcPoster = movie.Poster;
      }
      return (
        <div className={style.card}>
          <h3 className={style.cardTitle}>{movie.Title}</h3>
          <Image src={srcPoster} layout="responsive" width={320} height={420} />
          <button
            onClick={() => removeFromWatchlist(index)}
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

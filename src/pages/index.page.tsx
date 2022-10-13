import type { NextPage } from 'next';
import Image from 'next/image';

import Nav from '@components/Nav/Nav';
import useWatchlistContext from '@hooks/useWatchlistContext';
import axios from 'axios';
import React, { useState } from 'react';

import style from './Home/Home.module.scss';

import genericPoster from '../../public/images/movie2.jpeg';

const Home: NextPage = () => {
  const { add } = useWatchlistContext();
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState<any[]>([]);

  const handleSearch = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchInput.length > 0) {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=ebcafd7d&s=${searchInput}`
      );
      if (data.response === 'false') {
        return;
      }

      setSearchResult(data.Search);
    }
  };

  const addToWatchlist = (index: number) => {
    const newMovie = searchResult[index];
    add({
      Title: newMovie.Title,
      Poster: newMovie.Poster,
      id: newMovie.imdbID,
    });
  };

  const renderCards = () => {
    const cards = searchResult.map((movie, index) => {
      let srcPoster = genericPoster;
      if (movie.Poster !== 'N/A') {
        srcPoster = movie.Poster;
      }
      return (
        <div className={style.card} key={Math.random()}>
          <h3 className={style.cardTitle}>{movie.Title}</h3>
          <Image src={srcPoster} layout="responsive" width={320} height={420} />
          <button
            onClick={() => addToWatchlist(index)}
            className={style.addBtn}
            type="submit"
          >
            Adicionar na Watchlist
          </button>
        </div>
      );
    });
    return cards;
  };

  return (
    <div className={style.container}>
      <Nav />
      <section className={style.aboutSection}>
        <div className={style.about}>
          <h1 className={style.title}>Moviefy</h1>
          <p className={style.subtitle}>
            Crie Edite e Compartilhe suas Wathclists
          </p>
        </div>
      </section>
      <section className={style.shows}>
        <input
          className={style.search}
          type="search"
          placeholder="Nome do filme ou série"
          onKeyDown={handleSearch}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        {searchResult.length !== 0 && (
          <div className={style.searchResults}>{renderCards()}</div>
        )}
      </section>
    </div>
  );
};

export default Home;

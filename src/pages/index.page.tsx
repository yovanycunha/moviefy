import type { NextPage } from 'next';
import Image from 'next/image';

import useWatchlistContext from '@hooks/useWatchlistContext';
import axios from 'axios';
import React, { useState } from 'react';

import style from './Home/Home.module.scss';

import genericPoster from './Home/images/movie2.jpeg';

const Home: NextPage = () => {
  const { watchlist, add } = useWatchlistContext();
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState<any[]>([]);

  const handleSearch = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchInput.length > 0) {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=ebcafd7d&s=${searchInput}`
      );
      setSearchResult(data.Search);
    }
  };

  const addToWatchlist = (index: any) => {
    const newMovie = searchResult[index];
    add({ Title: newMovie.Title, Poster: newMovie.Poster });
  };

  const renderNavItems = () => (
    <div className={style.listWrapper}>
      <ul className={style.itemsList}>
        <li className={style.item}>
          <a className={style.itemText} href="/">
            Home
          </a>
        </li>
        <li className={style.item}>
          <a className={style.itemText} href="/">
            Minha Watchlist
          </a>
        </li>
      </ul>
    </div>
  );

  const renderCards = () => {
    const cards = searchResult.map((movie, index) => {
      let srcPoster = genericPoster;
      if (movie.Poster !== 'N/A') {
        srcPoster = movie.Poster;
      }
      return (
        <div className={style.card}>
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
      <nav className={style.nav}>{renderNavItems()}</nav>
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

import Link from 'next/link';

import style from './Nav.module.scss';

function Nav() {
  return (
    <div className={style.nav}>
      <div className={style.listWrapper}>
        <ul className={style.itemsList}>
          <li className={style.item}>
            <Link href="/">
              <a className={style.itemText} href="/">
                Home
              </a>
            </Link>
          </li>
          <li className={style.item}>
            <Link href="/Watchlist">
              <a className={style.itemText} href="/Watchlist">
                Minha Watchlist
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;

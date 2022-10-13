import '@styles/index.scss';
import type { AppProps } from 'next/app';

import Providers from 'src/context/Providers';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default MyApp;

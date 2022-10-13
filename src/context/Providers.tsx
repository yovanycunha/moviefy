import WatchlistProvider from './WatchlistProvider/WatchlistProvider';

type TProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: TProvidersProps) => {
  return <WatchlistProvider>{children}</WatchlistProvider>;
};

export default Providers;

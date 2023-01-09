import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

type LoadingStatusContextType = {
  isAppLoaded: boolean;
  setAppLoaded: Dispatch<SetStateAction<boolean>>;
};

export const LoadingStatusContext = createContext<LoadingStatusContextType>({
  isAppLoaded: false,
  setAppLoaded: () => {},
});

const LoadingStatusProvider = ({ children }: { children: ReactNode }) => {
  const [isAppLoaded, setAppLoaded] = useState<boolean>(false);

  return <LoadingStatusContext.Provider value={{ isAppLoaded, setAppLoaded }}>{children}</LoadingStatusContext.Provider>;
};

export default LoadingStatusProvider;

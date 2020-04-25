import { createContext } from 'react';

import { Data } from '../../types';

type StoreContext = {
  store: Data | null;
  setStore(data: Data): void;
};

export const StoreContext = createContext<StoreContext>({
  store: null,
  setStore: (_data: Data) => {},
});

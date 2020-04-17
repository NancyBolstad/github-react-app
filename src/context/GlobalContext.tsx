import React from 'react';
import useApi from '../hooks/useApi';
import { Root, Item } from '../types/data';
import { API_BASE_URL, mockResponse } from '../util/constants';

interface Props {}

interface GlobalDataProps {
  default: Item[];
  loaded: boolean;
}

export const Context = React.createContext<GlobalDataProps>({
  default: [],
  loaded: true,
});

export const GlobalContext: React.FunctionComponent<Props> = ({ children }) => {
  const { data, loading } = useApi<Root>({
    endpoint: API_BASE_URL,
    fetchOnMount: true,
    initialData: mockResponse,
  });

  return (
    <Context.Provider
      value={{
        default: data.items,
        loaded: loading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default GlobalContext;

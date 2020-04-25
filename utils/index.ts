import fetch from 'isomorphic-unfetch';

import { useContext, useEffect } from 'react';

import { StoreContext } from '../components/store';
import { Data } from '../types';

export const fetchData = async () => {
  const data = await fetch('http://localhost:3000/api/data');
  const json = await data.json();
  return {
    data: json,
    error: null,
  };
};

export const useStore = (data: Data) => {
  console.log('hello');
  const { setStore, store } = useContext(StoreContext);
  if (store) {
    return { store };
  }
  if (data) {
    useEffect(() => {
      setStore(data);
    });
    return {
      store: data,
    };
  }
  return { error: 'meh' }; // check for error, return error handling info???
};

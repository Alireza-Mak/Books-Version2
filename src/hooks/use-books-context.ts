import { useContext } from 'react';
import { BooksContext } from '../context/BooksContext';
import { Store } from '../types';

export default function useBooksContext(): Store  {
  const store = useContext(BooksContext);
  if (!store) {
    throw new Error('');
  }
  return store;
}

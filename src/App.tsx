import BookList from './components/BookList';
import { useEffect } from 'react';
import CreateBook from './components/CreateBook';
import useBooksContext from './hooks/use-books-context';

const App = (): JSX.Element => {
  const { stableFetchBooks } = useBooksContext();
  useEffect((): void => {
    stableFetchBooks();
  }, [stableFetchBooks]);
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <CreateBook />
    </div>
  );
};

export default App;

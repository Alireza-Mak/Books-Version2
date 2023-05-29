import useBooksContext from '../hooks/use-books-context';
import { Book } from '../types';
import ShowBook from './ShowBook';

const BookList = (): JSX.Element => {
  const { books } = useBooksContext();
  const renderedBooks = books.map((book: Book) => {
    return <ShowBook key={book.id} book={book} />;
  });
  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;

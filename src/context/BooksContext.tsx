import { createContext ,useState ,useCallback} from 'react';
import { Book, Books, Store } from '../types';
import axios from 'axios';

export const BooksContext = createContext<Store | undefined>(undefined);
interface ProviderProps {
  children: React.ReactNode;
}
const url = 'http://localhost:3001/books';
const Provider: React.FC<ProviderProps> = ({ children }) => {
 const [books, setBooks] = useState<Books>([]);
 
const fetchBooks = async () => {
  const response = await axios.get<Books>(url);
  setBooks(response.data);
 };
 const stableFetchBooks = useCallback(fetchBooks, []);
  const createBook = async (title: string) => {
    const response = await axios.post<Book>(url, {
      title,
    });
    setBooks([...books, response.data]);
  };
  const deleteBook = async (id: number) => {
    await axios.delete<{}>(`${url}/${id}`);
    const updatedBooks = books.filter((book: Book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };
  const editBook = async (editedBook: Book) => {
    const response = await axios.put<Book>(`${url}/${editedBook.id}`, {
      title: editedBook.title,
    });
    const updatedBooks = books.map((book: Book) => {
      if (book.id === editedBook.id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };
 
  const state: Store = { books, stableFetchBooks, createBook, editBook, deleteBook};
  return (
    <BooksContext.Provider value={state}>{children}</BooksContext.Provider>
  );
};

export default Provider;

export interface Book {
  id: number;
  title: string;
}
export type Books = Book[];

export interface Store {
  books: Books;
  stableFetchBooks: () => Promise<void>;
  editBook: (book: Book) => Promise<void>;
  deleteBook: (id: number) => Promise<void>;
  createBook: (title: string) => Promise<void>;
}
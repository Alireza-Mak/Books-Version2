import React, { useState } from 'react';
import { Book } from '../types';
import EditBook from './EditBook';
import useBooksContext from '../hooks/use-books-context';
interface ShowBookProps {
  book: Book;
}
const ShowBook: React.FC<ShowBookProps> = ({ book }) => {
  const { deleteBook} = useBooksContext();
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const onDeleteBook = () => {
    deleteBook(book.id);
  };
  const OnEditBook = () => {
    setShowEdit(!showEdit);
  };
  const closeEditBook = () => {
    setShowEdit(false);
  };
  let content;
  if (showEdit) {
    content = <EditBook book={book} onEdit={closeEditBook} />;
  } else {
    content = <div>{book.title}</div>;
  }
  return (
    <div className="book-show">
      {content}
      <img
        alt={book.title}
        src={`https://picsum.photos/seed/${book.id}/300/200`}
      />
      <div className="actions">
        <button className="edit" onClick={OnEditBook}>
          Edit
        </button>
        <button className="delete" onClick={onDeleteBook}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ShowBook;

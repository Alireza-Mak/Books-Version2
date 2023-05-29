import React, { useState } from 'react';
import { Book } from '../types';
import useBooksContext from '../hooks/use-books-context';
interface EditBookProps {
  book: Book;
  onEdit: () => void;
}
const EditBook: React.FC<EditBookProps> = ({ book, onEdit }) => {
  const{editBook}=useBooksContext()
  const [title, setTitle] = useState<string>(book.title);
  const handleEdit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title && title.length > 0) {
      editBook({ id: book.id, title })
      onEdit();
      setTitle('');
    }
  };
  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTitle(value);
  };
  return (
    <form onSubmit={handleEdit} className="book-edit">
      <label htmlFor="BookTitle">Title</label>
      <input
        name="BookTitle"
        id="BookTitle"
        className="input"
        onChange={onChangeTitle}
        type="text"
        value={title}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default EditBook;

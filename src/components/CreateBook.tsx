import React, { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

const CreateBook = (): JSX.Element => {
  const { createBook } = useBooksContext();
  const [title, setTitle] = useState<string>('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title && title.length > 0) {
      createBook(title);
      setTitle('');
    }
  };
  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTitle(value);
  };
  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="BookTitle">Title:</label>
        <input
          name="BookTitle"
          id="BookTitle"
          className="input"
          onChange={onChangeTitle}
          type="text"
          value={title}
        />
        <button className="button">Add book</button>
      </form>
    </div>
  );
};

export default CreateBook;

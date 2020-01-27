import React from 'react';

const Book = (props) => {
  const { book, onRemove } = props;
  return <tr><td></td><td>{book.title}</td><td>{book.category}</td><td><button onClick={onRemove}>Remove</button></td></tr>
}

export default Book;

import React from 'react';

const Book = (props) => {
  const { title, category, onRemove } = props.book;
  return <tr><td>{title}</td><td>{category}</td><td><button onClick={onRemove}>Remove</button></td></tr>
}

export default Book;

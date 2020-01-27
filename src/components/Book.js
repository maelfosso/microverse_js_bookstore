import React from 'react';

const Book = (props) => {
  const { title, category } = props.book;
  return <tr><td>{title}</td><td>{category}</td></tr>
}

export default Book;

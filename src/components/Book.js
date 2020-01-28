import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book, onRemove } = props;
  return (
    <tr>
      <td />
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td><button type="button" onClick={onRemove}>Remove</button></td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Book;

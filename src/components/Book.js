import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book, onRemove } = props;
  return (
    <div className="Book">
      <div className="infos">
        <div className="category">{book.category}</div>
        <div className="title">{book.title}</div>
        <div className="id">{book.id}</div>
      </div>

      <button type="button" onClick={onRemove}>Remove</button>
    </div>
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

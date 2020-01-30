import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = props => {
  const { filter, removeBook, changeFilter } = props;
  let { bookList } = props;

  const handleRemove = book => removeBook(book);

  const renderBooks = () => {
    if (filter !== 'All') {
      bookList = bookList.filter(b => b.category === filter);
    }

    return bookList.map(b => <Book key={`${b.title}-${b.id}`} book={b} onRemove={() => handleRemove(b)} />);
  };

  const handleFilterChange = filter => changeFilter(filter);

  return (
    <div className="BooksList">
      <CategoryFilter onFilterChange={handleFilterChange} />
      <div>
        {renderBooks()}
      </div>
    </div>
  );
};

BooksList.propTypes = {
  bookList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  bookList: state.bookReducer.books,
  filter: state.filterReducer.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

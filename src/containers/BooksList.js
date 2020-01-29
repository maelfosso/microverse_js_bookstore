import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = (props) => {
  let { bookList, filter, removeBook, changeFilter } = props;

  const handleRemove = book => removeBook(book);

  const renderBooks = () => {
    if (filter !== 'All') {
      bookList = bookList.filter(b => b.category === filter);
    }
    
    return bookList.map(b => <Book key={`${b.title}-${b.id}`} book={b} onRemove={() => handleRemove(b)} />);
  }

  const handleFilterChange = (filter) => changeFilter(filter);

  return (
    <div>
      <CategoryFilter onFilterChange={handleFilterChange} />
      <p>List of books</p>
      <table>
        <thead>
          <tr>
            <td>&nbsp;</td>
            <td>Title</td>
            <td>Category</td>
            <td>Remove?</td>
          </tr>
        </thead>
        <tbody>{renderBooks()}</tbody>
      </table>
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
  removeBook: PropTypes.func.isRequired,
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

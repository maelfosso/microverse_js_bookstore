import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BooksList = props => {
  const { bookList, removeBook } = props;

  const handleRemove = book => removeBook(book);

  const renderBooks = () => bookList.map(b => <Book key={`${b.title}-${b.id}`} book={b} onRemove={() => handleRemove(b)} />);

  return (
    <div>
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
  bookList: PropTypes.arrayOf({}).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ bookList: state.bookReducer.books });

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

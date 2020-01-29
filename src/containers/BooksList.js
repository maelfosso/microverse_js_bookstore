import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'All',
    };
    
    this.handleRemove = this.handleRemove.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleRemove(book) {
    const { removeBook } = this.props;
    removeBook(book);
  };

  renderBooks() {
    let { bookList, filter } = this.props;
    if (filter !== 'All') {
      bookList = bookList.filter(b => b.category === filter);
    }
    
    return bookList.map(b => <Book key={`${b.title}-${b.id}`} book={b} onRemove={() => this.handleRemove(b)} />);
  }

  handleFilterChange(filter) {
    const { changeFilter } = this.props;
    changeFilter(filter);
  }

  render() {
    return (
      <div>
        <CategoryFilter onFilterChange={this.handleFilterChange} />
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
          <tbody>{this.renderBooks()}</tbody>
        </table>
      </div>
    );
  }
  
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

import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';
import { removeBook } from '../actions';

class BooksList extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
    this.renderBooks = this.renderBooks.bind(this);
  }

  handleRemove(book) {
    this.props.removeBook(book);
  }

  renderBooks() {
    const { bookList } = this.props;
    return bookList.map(b => <Book book={b} onRemove={this.handleRemove(b)} />)
  };

  render() {
    return (
      <div>
        <p>List of books</p>
        <table>
          <thead>
            <tr><td>&nbsp;</td><td>Title</td><td>Category</td><td></td></tr>
          </thead>
          <tbody>{this.renderBooks()}</tbody>
        </table>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({ bookList: state });

const mapDispatchToProps = dispatch => {
  return {
    removeBook: (book) => dispatch(removeBook(book)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

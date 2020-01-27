import React from 'react';
import Book from './Book';
import { removeBook } from '../actions';

class BooksList extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.renderBooks = this.renderBooks.bind(this);
  }

  handleDelete(book) {
    this.props.removeBook(book);
  }

  renderBooks() {
    const { bookList } = this.props;
    return bookList.map(b => <tr><td></td><td>{b.title}</td><td>{b.category}</td><td><button onClick={this.handleDelete(b)}>Remove</button></td></tr>)
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
    removeBook = (book) => dispatch(removeBook(book)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

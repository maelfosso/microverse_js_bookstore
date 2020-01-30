import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';
import CATEGORIES from '../utils/categories';
import '../App.css';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: CATEGORIES[0],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleCategoryChange(event) {
    this.setState({
      category: event.target.value,
    });
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleSubmit(event) {
    const { title, category } = this.state;
    const { createBook } = this.props;
    event.preventDefault();

    const book = {
      id: Math.round(Math.random() * 100),
      title,
      category,
    };
    createBook(book);
    this.setState({
      title: '',
      category: CATEGORIES[0],
    });
  }

  render() {
    const { title, category } = this.state;

    return (
      <div className="BooksForm">
        <div className="title">Add new book</div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="input content-inside" name="title" placeholder="Title" value={title} onChange={this.handleTitleChange} />
          <select className="input content-inside" style={{ height: 'auto' }} value={category} onChange={this.handleCategoryChange}>
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>

          <button type="submit">ADd book</button>
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);

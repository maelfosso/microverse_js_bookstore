import React from 'react';
import { createBook } from '../actions';
import { connect } from 'react-redux';

class BooksForm extends React.Component {
  categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };

    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCategoryChange(event) {
    this.setState({
      category: event.target.value,
    });
  }

  handleTitleChange() {
    this.setState({
      title: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const book = {
      title: this.state.title,
      category: this.state.category,
    };
    this.props.createBook(book);
    this.setState({
      title: '',
      category: '',
    });
  }

  render() {
    return (
      <div>
        <p>Create a book</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title
            <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange} />
          </label>
          <label>
            <select value={this.state.category} onChange={this.handleCategoryChange} >
              {this.categories.map(c => <option value={c}>{c}</option>)}
            </select> 
          </label>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createBook = (book) => dispatch(createBook(book))
  };
};

export default connect(null, mapDispatchToProps)(BooksForm);

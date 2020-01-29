import React from 'react';
import { connect } from 'react-redux';
import CATEGORIES from '../utils/categories';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'All',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      filter: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <p>Filter</p>
        <select value={category} onChange={this.handleChange}>
          <option key='All' value='All'>All</option>
          {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => dispatch(changeFilter(filter)),
});

export default connect(null, mapDispatchToProps)(CategoryFilter);

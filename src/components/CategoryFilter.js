import React from 'react';
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
    const { onFilterChange } = this.props;

    this.setState({
      filter: event.target.value,
    });
    onFilterChange(event.target.value);
  }

  render() {
    const { filter } = this.state;

    return (
      <div>
        <p>Filter</p>
        <select value={filter} onChange={this.handleChange}>
          <option key='All' value='All'>All</option>
          {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
    );
  }
}

export default CategoryFilter;

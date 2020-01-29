import { CHANGE_FILTER } from '../actions';

const initialState = { filter: 'All' };

const filterReducter = (state = initialState, action) => {
  const { filter } = state;
  switch (action.type) {
    case CHANGE_FILTER:
      if (filter !== action.category) {
        return { filter: action.category };
      }
      return state;

    default:
      return state;
  }
};

export default filterReducter;

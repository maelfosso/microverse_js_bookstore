import { CHANGE_FILTER } from '../actions';

const initialState = { filter: 'All' };

const filterReducter = (state = initialState, action) => {

  switch (action.type) {
    case CHANGE_FILTER:
      const { filter } = state;
      
      if (filter !== action.category) {
        return { filter: action.category };
      }
      break;

    default:
      return store;
  }
}

export default filterReducter;

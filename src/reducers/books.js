import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];

    case REMOVE_BOOK:
      const ix = state.findIndex(b => b.id === action.id);
      return state.splice(ix, 1);

    default:
      return state;
  }
}

export default bookReducer;
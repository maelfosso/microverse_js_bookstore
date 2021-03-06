import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

const initialState = { books: [] };

const bookReducer = (state = initialState, action) => {
  const { books } = state;

  switch (action.type) {
    case CREATE_BOOK:
      return { books: [...books, action.book] };

    case REMOVE_BOOK:
      return { books: books.filter(b => b.id !== action.id) };

    default:
      return state;
  }
};

export default bookReducer;

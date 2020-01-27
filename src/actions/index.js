export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const createBook = (book) => { 
  return {
    type: CREATE_BOOK, book 
  }
};
export const remoteBook = (book) => { 
  return {
    type: REMOVE_BOOK, id: book.id 
  }
};

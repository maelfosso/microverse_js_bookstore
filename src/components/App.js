import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import '../App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <div className="container">
          <BooksList />
          <BooksForm />
        </div>
      </div>
    </div>
  );
}

export default App;

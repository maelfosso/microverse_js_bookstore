import React from 'react';
import BooksList from './components/BooksList';
import BooksForm from './components/BooksForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;

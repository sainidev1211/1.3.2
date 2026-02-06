
import { useState } from 'react';
import './App.css';
import BookCard from './components/BookCard';

function App() {
  // State for the list of books
  // Initialized with two default books
  const [books, setBooks] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'S. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
  ]);

  // State for input fields
  const [titleInput, setTitleInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');

  // State for search query
  const [searchTerm, setSearchTerm] = useState('');

  // Function to add a new book
  const handleAddBook = () => {
    if (titleInput.trim() === '' || authorInput.trim() === '') {
      alert('Please enter both title and author.');
      return;
    }

    const newBook = {
      id: Date.now(), // Simple unique ID generation
      title: titleInput,
      author: authorInput
    };

    setBooks([...books, newBook]);
    // Clear inputs after adding
    setTitleInput('');
    setAuthorInput('');
  };

  // Function to remove a book by ID
  const handleRemoveBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  // Filter books based on search term
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      {/* Main Heading */}
      <h1>Library Management System</h1>

      {/* Search Input */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Add Book Section */}
      <div className="add-book-section">
        <input
          type="text"
          placeholder="Book Title"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Author"
          value={authorInput}
          onChange={(e) => setAuthorInput(e.target.value)}
          className="input-field"
        />
        <button className="add-btn" onClick={handleAddBook}>
          Add Book
        </button>
      </div>

      {/* Book List Display */}
      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <BookCard
              key={book.id}
              book={book}
              onRemove={handleRemoveBook}
            />
          ))
        ) : (
          <p className="no-books">No books found.</p>
        )}
      </div>
    </div>
  );
}

export default App;

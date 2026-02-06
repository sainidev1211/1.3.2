
import React from 'react';

// BookCard component to display individual book details
const BookCard = ({ book, onRemove }) => {
    return (
        <div className="book-card">
            <div className="book-info">
                <h3>{book.title}</h3>
                <p>by {book.author}</p>
            </div>
            <button
                className="remove-btn"
                onClick={() => onRemove(book.id)}
            >
                Remove
            </button>
        </div>
    );
};

export default BookCard;

import React, { useState, useEffect } from 'react';
import '../App'; // Import CSS file for styling

function Booklist() {
  const [books, setBooks] = useState([]);

  // Function to fetch books from API
  const fetchBooks = async () => {
    let API_URL = "https://example-data.draftbit.com/books?_limit=50";
    try {
      let response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      let data = await response.json();
      console.log(data);
      setBooks(data);
    } catch (err) {
      console.error('Fetching books failed:', err);
    }
  };

  // Fetch books when component mounts
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="booklist">
      <h1>Book List</h1>
      <div className="book-container">
        {books.map(book => (
          <div className="book-item" key={book.id}>
            <h2>{book.title}</h2>
            <img src={book.image_url} alt={book.title} />
            <p>{book.Quote3}</p>
            <p>Author{book.authors}</p>
            <p>Rating{book.rating_count}</p>

         <div><button>Add to Favourite</button></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Booklist;

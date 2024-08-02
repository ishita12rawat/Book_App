import React, { useState, useEffect } from 'react';
import '../App.css'; // Ensure the correct path to your CSS file
import { useParams } from 'react-router-dom';

function Bookdetails() {
  const [book, setBook] = useState(null); // Initialize with null
  const { id } = useParams(); // Extract the book ID from URL params

  // Fetch book details when the component mounts or ID changes
  useEffect(() => {
    const fetchBookDetails = async () => {
      let bookUrl = `https://example-data.draftbit.com/books/${id}`;
      try {
        let response = await fetch(bookUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        let data = await response.json();
        setBook(data); // Update state with fetched data
      } catch (err) {
        console.error('Fetching book details failed:', err);
      }
    };

    fetchBookDetails();
  }, [id]); // Dependency array includes `id` to refetch if it changes

  if (!book) {
    return <div>Loading...</div>; // Show loading message while data is being fetched
  }

  return (
    <div className='bookdetail'>
      <h1>Book Details</h1>
      <div className='book-detail-container'>
        <h2>{book.title}</h2>
        <img src={book.image_url} alt={book.title} />
        <p><b>Author:</b> {book.authors}</p>
        <p><b>Rating:</b> {book.rating_count}</p>
        <p><b>Edition:</b> {book.edition}</p>
        <p><b>Quote:</b> {book.Quote3}</p>
        <p><b>Description:</b> {book.description}</p>
      </div>
    </div>
  );
}

export default Bookdetails;

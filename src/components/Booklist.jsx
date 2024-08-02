import React, { useState, useEffect } from 'react';
import '../App.css'; // Import CSS file for styling
import { useAppContext } from '../context/appContext'; // Correct import for context hook
import { useNavigate } from 'react-router-dom';
function Booklist() {
  const [books, setBooks] = useState([]);
  const { favourite, addToFavourite, remove } = useAppContext(); // Destructure correctly
  const navigate=useNavigate();
const Favouritechecker=(id)=>{
  const boolean=favourite.some((book)=>book.id===id)
  return boolean;
}
  // Function to fetch books from API
  const fetchBooks = async () => {
    let API_URL = "https://example-data.draftbit.com/books?_limit=90";
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
            <img src={book.image_url} alt={book.title} onClick={()=>navigate(`/book/${book.id}`)} />
            <p>{book.Quote3}</p>
            <p><b>Author: {book.authors}</b></p>
            <p><b>Rating: {book.rating_count}</b></p>
            <p><b>Edition: {book.edition}</b></p>
            <div>
              {Favouritechecker(book.id)? 
               ( <button onClick={() => remove(book.id)}>remove favourite</button>):(
                <button onClick={() => addToFavourite(book)}>Add to Favourite</button>
               )
            }
        
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Booklist;


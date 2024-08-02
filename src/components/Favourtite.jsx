import React from 'react'
import '../App'
import { useAppContext } from '../context/appContext';

function Favourtite() {
  const { favourite, addToFavourite, remove } = useAppContext(); // Destructure correctly
const Favouritechecker=(id)=>{
  const boolean=favourite.some((book)=>book.id===id)
  return boolean;
}
  return (
    <div className="favourite">
    
    <div className="favourite-container">
        {favourite.length>0?favourite.map(book => (
          <div className="favourite-item" key={book.id}>
            <h2>{book.title}</h2>
            <img src={book.image_url} alt={book.title} />
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
        )):<h1>you donthave any favourite book yet</h1>}
      </div>
    </div>

  )
}

export default Favourtite
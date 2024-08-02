import React from 'react'
import '../App';
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <>
    <div className="navbar">
        <div><h1> Welcome to Book Store</h1></div>
        <div>
          <Link to="/favourite" >
          <h3>YOUR fAVOURITE</h3></Link>
        </div>
    </div>
    </>
  )
}

export default Navbar
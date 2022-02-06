import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {ThemeContext} from "../context/ThemeContext"

const Navbar = (props) =>{
  const {theme} = useContext(ThemeContext)
  console.log(theme)
  return(
    <>
      <nav className={`navbar navbar-expand-lg ${theme.navbar}`}>
  <div className="container-fluid">
    <button className="navbar-brand">Navbar</button>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/user-profile">UserProfile</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar;
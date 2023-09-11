import React from 'react'
import { decodeToken } from "react-jwt";
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  const handleSignout = ()=>{
    localStorage.clear()
    navigate('/')
  }

  return (
    <div className="col-12">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/admin">ShopBy</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className='nav-link' aria-current="page" to='/admin'>Profile</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='nav-link' aria-current="page" to='/admin/products'>Products List</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='nav-link' aria-current="page" to='/admin/add-product'>Add Product</NavLink>
        </li>

         <li>
         <button className="btn btn-outline-danger ms-4"  onClick={handleSignout}>Log out</button>
         </li>

      </ul>

    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
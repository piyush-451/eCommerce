import React from 'react'
import AdminNavbar from '../Admin/Navbar'
import UserNavbar from '../User/Navbar'
import NormalNavbar from './NormalNavbar'
function Navbar() {
    console.log(localStorage.getItem('isAdmin')===true)
  return (
    <>
    {
        localStorage.getItem('token') ? <>
        {
            localStorage.getItem('isAdmin')==="true" ? <AdminNavbar/> : <UserNavbar/>
        }
        </> : <NormalNavbar/>
    }
    </>
  )
}

export default Navbar
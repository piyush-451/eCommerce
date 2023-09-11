import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Navbar'
import ProductList from './ProductList'
import ProductRegistration from './ProductRegistration'
import Profile from './Profile'


function Home() {
  return (
    <div className="row justify-content-center align-items-center">
        <Routes>
            <Route path='/' element={<Profile/>} />
            <Route path='/add-product' element={<ProductRegistration/>} />
            <Route path='/products' element={<ProductList/>} />
        </Routes>
    </div>
  )
}

export default Home
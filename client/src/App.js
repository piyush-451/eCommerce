import React from "react";
import "./App.css";
import Signin from "./Authorisation/Signin";


import Navbar from "./Navbar/Navbar";
import {Route,Routes} from 'react-router-dom'
import Signup from "./Authorisation/Signup";
import UserHome from "./Home/Home";
import AdminHome from "./Admin/Home";
import Electronics from "./Product/Electronics";
import Basics from "./Product/Basics";
import Beauty from "./Product/Beauty";
import Book from "./Product/Book";
import Furniture from "./Product/Furniture";
import BuyProduct from "./Product/Buy/BuyProduct";

function App() {

  return(
    <div className="container-fluid p-0 overflow-hidden bg-light min-vh-100 d-flex flex-grow flex-column">

          <Navbar/>
         <Routes>
         <Route path='/' element={<UserHome/>} />
         <Route path='/admin/*' element={<AdminHome/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={ <Signup/>} />
          <Route path='products/electronic' element={<Electronics/>} />
          <Route path="products/basic" element={<Basics/>} />
          <Route path="products/beauty" element={<Beauty/>} />
          <Route path="products/book" element={<Book/>} />
          <Route path="products/furniture" element={<Furniture/>} />
          <Route path="/products/buy/:id" element={<BuyProduct/>} />
          {/* <Route path="products/:category/:id" element={<Product/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path='products/:category/:id/buy' element={<Order/>} />
          <Route path='update/:id' element={<Update/>} /> */}
         </Routes>


    </div>
  )
}

export default App;

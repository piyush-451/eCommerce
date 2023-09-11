import React, { useEffect, useState,useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Error from "../components/Error";
import image from "../images1/electronic-camera.jpg";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/Context";
function Product() {
  const {localstorage,addtowishlist,user} = useContext(UserContext)
  const params = useParams();
  const navigate = useNavigate()
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [admin,setAdmin] = useState(false)
  const [User,setUser] = useState(false)
  const fetchProduct = async () => {
    const id = { id: params.id };
    try {
      const result = await axios.post("http://localhost:5000/api/product", id);
      
      setProduct(result.data);
    } catch (error) {
      setError(error.response.data);
      setProduct("not found");
    }
  };
  useEffect(() => {
    if (product === null) fetchProduct();
    if(localStorage.getItem('admin')==='true'){
      setAdmin(true)
    }
    else if(localStorage.getItem('token')){
      setUser(true)
    }
    else{
      setAdmin(false)
      setUser(false)
    }
  }, [product,localstorage]);


  if (product === null) return <div>Getting the product</div>;

  if (error) return <Error message={error} />;

  const handleBuy = ()=>{
      if(!User)
      window.alert('Please login to buy')
      else{
        navigate('buy')
      }
  }

  const handleWishList = async ()=>{
    console.log(user)    
    if(!User){
      window.alert('Please login to add items to wishlist')
      return
    }

    try {
      let request = {
        productid: product._id,
      };
     
      
      const result = await axios.post("http://localhost:5000/api/user/wishlist", request,{
        headers:{
          'x-auth-token':localStorage.getItem('token')
        }
      });
      console.log(result.data)
      addtowishlist(result.data)
      window.alert("Successfully added product ot wishlist...")
    
    } catch (error) {
      window.alert("Something went wrong , please try again...")
      console.log(error);
    }

  }
  

  return (
    <div className="row justify-content-center align-items-center py-3 px-3">
      <div className="col-6">
        <img src={image} className="img-fluid" />
      </div>
      <div className="col-6">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 my-1 h3">{product.name}</div>
          <div className="col-12 my-1">
            <span className="d-inline-block me-2">Buy for only : </span>
            <span class=" material-icons material-symbols-outlined d-inline-block ms-3">currency_rupee</span>
            <span className="h3 d-inline-block ms-2">{product.price}</span>
            </div>
          <div className="col-12 my-1">
            <ul className="list-group list-group-horizontal ">
              <li className="list-group-item border-0 bg-transparent">
                <button className="btn btn-success" onClick={handleBuy} >Shop now</button>
              </li>
              <li className="list-group-item border-0 bg-transparent">
                <button className="btn btn-warning" onClick={handleWishList}>Add to wishlist</button>
              </li>
            </ul>
          </div>
          <div className="col-12 my-1">
            <ul className="list-group list-group-horizontal ">
              <li className="list-group-item border-0 bg-transparent">
                <span class=" material-icons material-symbols-outlined d-inline-block ms-3">currency_rupee</span>
                <br/>
                <span>Cash on delivery</span>
              </li>
              <li className="list-group-item border-0 bg-transparent">
                <span class=" material-icons material-symbols-outlined d-inline-block ms-3">assignment_return</span>
                <br/>
                <span>10 day return policy</span>
              </li>
              <li className="list-group-item border-0 bg-transparent">
                <span class=" material-icons material-symbols-outlined d-inline-block ms-3">local_shipping</span>
                <br/>
                <span>Free delivery</span>
              </li>
              <li className="list-group-item border-0 bg-transparent">
                <span class=" material-icons material-symbols-outlined d-inline-block ms-3">contactless</span>
                <br/>
                <span>Contactless delivery</span>
              </li>
            </ul>
          </div>
          <div className="col-12 my-1">
            <h4>About the item : </h4>
            <p className="lead">
            {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

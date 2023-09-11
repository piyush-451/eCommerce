import React from 'react'
import camera from '../images1/electronic-camera.jpg'
import { Link } from 'react-router-dom'
function WishlistCard({product}) {
  return (
    <div className="card col-3">
  <img src={camera} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    {
      product.category &&   <Link to={`/products/${product.category.toLowerCase()}/${product._id}`} className='btn btn-success'>Shop now</Link>
    }
  
  </div>
</div>
  )
}

export default WishlistCard
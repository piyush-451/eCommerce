import React, { useEffect, useState } from 'react'
import { UserContext } from '../Context/Context'
import { useContext } from 'react'
import noitem from '../images/noitems.webp'
import WishlistCard from './WishlistCard'
function Wishlist() {
  const {user} = useContext(UserContext)

  useEffect(()=>{
    console.log(user.wishlist)
    if(user.wishlist.length===0){
        return(
            <div className="row justify-content-center align-items-center flex-grow-1">
            <div className="col-12">
                <img src={noitem} alt="" />
            </div>
        </div>
        )
      }

  },[user.wishlist])
  
  

  return(
    <div className="row justify-content-center align-items-center flex-grow-1">
        
            {
                user.wishlist.map((product)=>(
                    <WishlistCard product={product} key={product._id} />
                ))
            }
    
        </div>
  )
  
}

export default Wishlist
import React, { useEffect } from 'react'
import { UserContext } from '../Context/Context'
import { useContext } from 'react'
import noitem from '../images/noitems.webp'
import OrderCard from './OrderCard'
function Orders() {
  const {user} = useContext(UserContext)
  useEffect(()=>{
    console.log(user.orders)
  },[user.orders])
  if(user.orders.length===0){
    return(
        <div className="row justify-content-center align-items-center flex-grow-1">
        <div className="col-12">
            <img src={noitem} alt="" />
        </div>
    </div>
    )
  }

  return(
    <div className="row justify-content-center align-items-center flex-grow-1">
        
        {
            user.orders.map((order)=>(
                <OrderCard order={order}/>
            ))
        }
      
        </div>
  )
  
}

export default Orders
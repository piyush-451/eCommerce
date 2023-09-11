import React from 'react'
import SubCard from './SubCard'

function Card({title,items,url}) {
   const style = {
      backgroundColor:'white',
      width:'30%',
      height:'400px'
   }
  return (
     <div className="col-4 d-flex  mx-3 my-2" style={style}>
        <div className="row h-100 justify-content-center align-items-center">
        <div className="col-12 text-center h3">{title}</div>
        <div className="col-12 images">
            <div className="row justify-content-center">
            {
               items.map((item)=>(
                  <SubCard item={item} key={item.title} />
               ))
            }
            </div>
        </div>
        <div className="col offset-1 redirect-link">

        </div>
        </div>
     </div>
  )
}

export default Card
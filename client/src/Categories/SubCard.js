import React from 'react'

function SubCard({item}) {
  return (
    <div className="col-5">
        <div className="row">
        <div className="col-12">
            <img src={item.img} className='img-fluid'  />
        </div>
        <div className="col-12" style={{fontSize:'15px'}}>{item.title}</div>
        </div>
    </div>
  )
}

export default SubCard
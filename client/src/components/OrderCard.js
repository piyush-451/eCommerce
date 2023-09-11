import React from 'react'
import camera from '../images1/electronic-camera.jpg'
import { Link } from 'react-router-dom'

function OrderCard({order}) {
  return (
    <div className="card col-4 mx-2">
    <img src={camera} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{order.name}</h5>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <h6>
          Order id
          <span className="badge bg-secondary d-inline-block ms-2">
            {order._id}
          </span>
        </h6>
      </li>
      <li className="list-group-item">
        <h6>
          Ordered at 
          <span className="badge bg-secondary d-inline-block ms-2">
            {order.orderedAt}
          </span>
        </h6>
      </li>
      <li className="list-group-item">
        <h6>
          Quantity
          <span className="badge bg-secondary d-inline-block ms-2">
            {order.quantity}
          </span>
        </h6>
      </li>
      <li className="list-group-item">
        <h6>
          Cost
          <span className="badge bg-secondary d-inline-block ms-2">
            {order.cost}
          </span>
        </h6>
      </li>
    </ul>
    
  </div>
  )
}

export default OrderCard
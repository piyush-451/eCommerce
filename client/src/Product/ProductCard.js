import React from "react";

import { Link } from "react-router-dom";

import camera from "../images1/electronic-camera.jpg";
import axios from "axios";
function ProductCard({ product }) {
  const handleDelete = async () => {
    const id = window.prompt(
      `Delete product ${product._id} : Enter product id to confirm`
    );
    if (id === product._id) {
      const request = { productid: product._id };
      try {
        const result = await axios.delete("http://localhost/product", request, {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        });
        window.alert("Product successfully deleted");
      } catch (error) {
        window.alert("Unable to delete the product");
      }
    } else window.alert("Wrong product id");
  };

  return (
    <div className="card col-4 mx-2 my-2">
      <img src={camera} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <h6>
            Category
            <span className="badge bg-secondary d-inline-block ms-2">
              {product.category}
            </span>
          </h6>
        </li>
        <li className="list-group-item">
          <h6>
            Price
            <span className="badge bg-secondary d-inline-block ms-2">
              {product.price}
            </span>
          </h6>
        </li>
        <li className="list-group-item">
          <h6>
            In stock
            <span className="badge bg-secondary d-inline-block ms-2">
              {product.quantity}
            </span>
          </h6>
        </li>
      </ul>
      <div className="card-body">
        {localStorage.getItem("token") &&
          localStorage.getItem("isAdmin") === "false" && (
            <Link className="btn btn-success" to={`/products/buy/${product._id}`}>
              Shop now
            </Link>
          )}
      </div>
    </div>
  );
}

export default ProductCard;

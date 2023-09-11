import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Loading from "../Alerts/Loading";
import Error from "../Alerts/Error";

function ProductList({ category }) {
  const [products, setProducts] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/all/${category}`)
      .then((res) => {
        setProducts({ status: "success", data: res.data });
        console.log(res.data)
      })
      .catch((error) => {
        setProducts({ status: "failure" });
      });
  }, []);

  return (
    <>
      {Object.keys(products).length === 0 ? (
        <Loading />
      ) : (
        <div>
          {products.status === "failure" ? (
            <Error />
          ) : (
            <div className="row mt-5 align-items-center justify-content-center">
              {products.data.map((product) => (
                <ProductCard product={product} key={product._id} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default ProductList;

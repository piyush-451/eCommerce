import React, { useState,useEffect,useContext} from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";
import { result } from "lodash";

function Update() {
  const params = useParams()
  const id = params.id

  const initialState = {
    name: null,
    description: null,
    quantity:null,
    price:null,
    category: null,
    image: null,
  };
  const [product, setProduct] = useState(initialState);
  
  const handleUpdate = async (e) => {
    e.preventDefault()
    let modified = {}
    if(product.name!==null)
    modified.name = product.name
    if(product.description!==null)
    modified.description = product.description
    if(product.quantity!==null)
    modified.quantity = product.quantity
    if(product.price!==null)
    modified.price = product.price
    if(product.category!==null)
    modified.category = product.category
    if(product.image!==null)
    modified.image = product.image

    const length = Object.keys(modified).length
    if(length===0){
        window.alert('You have not modified any property')
        return
    }
    try {
        const request = {
            productid:id,
            modified:modified
        }
      const result = await axios.put("http://localhost:5000/api/product",request,{
        headers:{
            'x-auth-token':localStorage.getItem('token')
        }
        
      })
      window.alert(`Produt ${id} successfully updates`)
    } catch (error) {
        console.log(error)
        window.alert(`Produt updation for product ${id} failed`)
    }
  };
  
  
  return (
    <div className="row justify-content-center align-items-center flex-grow-1">
      <div className="col-12 text-center h4 text-capitalize">
        <div className="row justify-content-center align-items-center">
          <div className="col-6">
          Product updation form:
       
        <p>
            You need to provide atleast one modified value
        </p>
          </div>
        </div>
      </div>
      <div className="col-6" style={{ backgroundColor: "white" }}>
        <form className="row g-3 p-3">
          <div className="col-md-6">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              defaultValue={initialState.name}
              onChange={(e) => {
                setProduct({ ...product, name: e.target.value });
              }}
            />
          </div>

          <div className="col-md-5">
            <label htmlFor="formFile" className="form-label">
              Product image
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              defaultValue={product.image}
              onChange={(e) => {
                setProduct({ ...product, image: "../images1/"+e.target.files[0].name });
              }}
            />
          </div>

          <div className="col-12">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              defaultValue={initialState.description}
              onChange={(e) => {
                setProduct({ ...product, description: e.target.value });
              }}
            ></textarea>
          </div>

          <div className="col-md-4">
            <label htmlFor="inputPrice" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="inputPrice"
              defaultValue={initialState.price}
              onChange={(e) => {
                setProduct({ ...product, price: Number(e.target.value) });
              }}
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="inputQuantity" className="form-label">
              Quantity
            </label>
            <input
              type="number"
              className="form-control"
              id="inputQuantity"
              defaultValue={initialState.quantity}
              onChange={(e) => {
                setProduct({ ...product, quantity: Number(e.target.value) });
              }}
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="inputCategory" className="form-label">
              Category
            </label>
            <select
              id="inputCategory"
              className="form-select"
              defaultValue={product.category}
              onChange={(e) => {
                setProduct({ ...product, category: e.target.value });
              }}
            >
              <option>Select Category</option>
              <option value="Electronic">Electronic</option>
              <option value="Basic">Daily Needs</option>
              <option value="Furniture">Furniture</option>
              <option value="Book">Books</option>
              <option value="Beauty">Beauty</option>
            </select>
          </div>

          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Update;

{/* <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          {
            !user ?
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">You are not logged in</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>Please login to continue or add item to wishlist</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  
                </div>
              </div>
            </div>
          :
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Order placement
                </h5>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div>
                  {error && <Error message={error} />}
                  {success && <Success message={success} />}
                </div>
                <form>
                  <div className="mb-3">
                    <label htmlFor="product-quantity" className="col-form-label">
                      How many items do you want to purchase?
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="product-quantity"
                      defaultValue={quantity}
                      placeholder={`Only ${product.quantity} items are available`}
                      onChange={(e) => {
                        setQuantity(e.target.value);
                      }}
                    />
                  </div>
                </form>
                <div>Your total amount to Rs.{quantity * product.price}</div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary d-inline-block mx-1"
                  onClick={wishlist}
                >
                  Add to wishlist
                </button>
                <button
                  type="button"
                  className="btn btn-primary d-inline-block mx-1"
                  onClick={buyProduct}
                >
                  Place order
                </button>
              </div>
            </div>
          </div>
}
        </div> */}
        // const buyProduct = async () => {
  //   if (quantity > product.quantity) {
  //     setError(`Product quantity must be less than ${product.quantity}`);
  //     return;
  //   }
  //   try {
  //     let request = {
  //       userid: user._id,
  //       productid: product._id,
  //       quantity:-Number(quantity),
  //       cost: quantity * product.price,
  //     };
     
      
  //     const result = await axios.post("http://localhost:5000/api/user/buy", request);
  //     setProduct({...product,quantity:product.quantity-quantity})
  //     addOrder(result.data)
  //     setSuccess('Order is placed')
  //   } catch (error) {
  //     setError('Something went wraong')
  //     console.log(error);
  //   }
  // };

  
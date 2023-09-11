import React, { useEffect, useState } from "react";
import Forbidden from "../Alerts/Forbidden";
import Spinner from "../Alerts/Spinner";
import axios from "axios";

function ProductList() {
  const [arr, setArr] = useState({});
  const [modalData, setModalData] = useState({});
  useEffect(() => {
    axios
      .post(`http://localhost:5000/product/all`, {
        token: localStorage.getItem("token"),
      })
      .then((res) => {
        console.log(res.data)
        if (res.data.length === 0) {
          setArr({ ...arr, count: 0 });
        } else {
          setArr({ ...arr, count: res.data.length, data: res.data });
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Error fetching data try again...");
      });
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {localStorage.getItem("token") &&
      localStorage.getItem("isAdmin") === "true" ? (
        <div className="row justify-content-center align-items-center mt-4">
          {Object.keys(arr).length === 0 ? (
            <Spinner />
          ) : (
            <React.Fragment>
              <div className="col-12">
                <div className="h3 text-center">Product List :</div>
                {arr.count === 0 ? (
                  <div className="col-12">No product available </div>
                ) : (
                  <div className="col-12">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Index</th>
                          <th scope="col">Product Id</th>
                          <th scope="col">Name</th>
                          <th scope="col">Price</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {arr.data.map((element, index) => (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{element._id}</td>
                            <td>{element.name}</td>
                            <td>{element.price}</td>
                            <td>{element.quantity}</td>
                            <td>{element.description}</td>
                            <td>
                              <button
                                className="btn btn-warning"
                                type="button"
                                value={index}
                                data-bs-toggle="modal"
                                data-bs-target="#responsemodal"
                                onClick={(e) => {
                                  setModalData(
                                    arr.data[Number(e.target.value)]
                                  );
                                  console.log(modalData);
                                }}
                              >
                                Update
                              </button>
                            </td>
                            <td>
                              <button
                                className="btn btn-warning"
                                type="button"
                                value={index}
                                data-bs-toggle="modal"
                                data-bs-target="#responsemodal"
                                onClick={(e) => {
                                  setModalData(
                                    arr.data[Number(e.target.value)]
                                  );
                                  console.log(modalData);
                                }}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {/* <div
                  className="modal fade"
                  id="responsemodal"
                  tabIndex="-1"
                  aria-labelledby="responsemodalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          {Object.keys(modalData).length === 0 ? (
                            <>Quiz Summary</>
                          ) : (
                            <>{modalData.quiz_name}</>
                          )}
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        {Object.keys(modalData).length === 0 ? (
                          <>Getting your responses</>
                        ) : (
                          <table className="table">
                            <thead>
                              <tr>
                                <th scope="col">Index</th>
                                <th scope="col">Question</th>
                                <th scope="col">Your response</th>
                              </tr>
                            </thead>
                            <tbody>
                              {modalData.responses.map((element, index) => (
                                <tr>
                                  <th scope="row" key={index}>
                                    {index + 1}
                                  </th>
                                  <td>{element.question}</td>
                                  <td>{element.answer}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        )}
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
                </div> */}
                  </div>
                )}
              </div>
            </React.Fragment>
          )}
        </div>
      ) : (
        <Forbidden />
      )}
    </>
  );
}

export default ProductList;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import image from "../../images1/electronic-camera.jpg";
import { useNavigate } from "react-router-dom";
import Spinner from "../../Alerts/Spinner";
import Error from "../../Alerts/Error";
import e from "cors";
import ValidationError from "../../Alerts/ValidationError";

function BuyProduct() {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const [validationSchema, setSchema] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/${params.id}`)
      .then((res) => {
        setProduct({ ...product, status: "success", data: res.data });
        console.log(res.data);
        const schema = Yup.object().shape({
          productid: Yup.string().required("required"),
          quantity: Yup.number()
            .min(0, "cannot be negative")
            .max(res.data.quantity, "max quantity exceed")
            .required(),
          cost: Yup.number().min(0).required(),
        });
        setSchema(schema);
      })
      .catch((error) => {
        console.log(error);
        setProduct({ ...product, status: "failure" });
      });
  }, []);

  return (
    <>
      {Object.keys(product).length === 0 ? (
        <Spinner />
      ) : (
        <>
          {product.status === "success" ? (
            <div className="row justify-content-center align-items-center py-3 px-3">
              <div className="col-6">
                <img src={image} className="img-fluid" />
              </div>
              <div className="col-6">
                <div className="row justify-content-center align-items-center">
                  <div className="col-12 my-1 h3">{product.data.name}</div>
                  <div className="col-12 my-1">{product.data.description}</div>
                  <div className="col-6 my-1">
                    <span className="d-inline-block me-2">Price : </span>
                    <span class=" material-icons material-symbols-outlined d-inline-block ms-3">
                      currency_rupee
                    </span>
                    <span className="h3 d-inline-block ms-2">
                      {product.data.price}
                    </span>
                  </div>
                  <div className="col-6">
                    Available items :{" "}
                    <span className="h3 d-inline-block ms-2">
                      {product.data.quantity}
                    </span>
                  </div>
                  <Formik
                    initialValues={{
                      productid: product.data._id,
                      quantity: 0,
                      cost: 0,
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                      values.cost = values.quantity * product.data.price
                      console.log(values)
                    }}
                  >
                    <Form>
                      <div class="input-group mb-3">
                        <span class="input-group-text">Quantity</span>
                        <Field
                          type="number"
                          class="form-control"
                          name="quantity"
                        />
                      </div>
                      <ErrorMessage name="quantity" component={ValidationError} />
                      <div className="input-group mb-3">
                      <span class="input-group-text">Cost $</span>
                        <Field type="number" class="form-control" name="cost">
                            {
                                ({form})=>{
                                    return <span class="input-group-text">{form.values.quantity * product.data.price}</span>
                                }
                            }
                        </Field>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-success" type="submit">
                          Place order
                        </button>
                      </div>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          ) : (
            <Error />
          )}
        </>
      )}
    </>
  );
}

export default BuyProduct;

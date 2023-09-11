import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import ValidationError from "../Alerts/ValidationError";
import axios from "axios";
import Forbidden from "../Alerts/Forbidden";

function ProductRegistration() {
  const categoryOptions = [
    "Electronic",
    "Basic",
    "Furniture",
    "Book",
    "Beauty",
  ];
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number().min(0,'cannot be negative').required("Price is required"),
    quantity: Yup.number().min(0,'cannot be negative').required("Quantity is required"),
    category: Yup.string().required("Select a category"),
    image: Yup.string().required("provide image url"),
  });
  return (
    <>
      {localStorage.getItem("token") &&
      localStorage.getItem("admin") === true ? (
        <Forbidden/>
      ) : (
        <div className="row justify-content-center align-items-center flex-grow-1">
          <div className="col-12  text-capitalize">
            <div className="row justify-content-center align-items-center">
              <div className="col-8 text-center h4 my-2">product registration form</div>
              <div className="col-6 border my-2">
              <Formik
                  initialValues={{
                    name: "",
                    description: "",
                    quantity: 0,
                    price: 0,
                    category: "Electronic",
                    image: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={async (values) => {
                   console.log(values)
                  }}
                >
                  <Form className="row g-3 p-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <Field
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                      />
                      <ErrorMessage name="name" component={ValidationError} />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="image" className="form-label">
                        Image
                      </label>
                      <Field
                        type="text"
                        name="image"
                        id="image"
                        className="form-control"
                      />
                      <ErrorMessage name="image" component={ValidationError} />
                    </div>

                    <div className="col-12">
                      <label htmlFor="name" className="form-label">
                        Description
                      </label>
                      <Field
                        as="textarea"
                        name="description"
                        id="description"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="description"
                        component={ValidationError}
                      />
                    </div>

                    <div className="col-md-4">
                      <label htmlFor="price" className="form-label">
                        Price
                      </label>
                      <Field
                        type="number"
                        name="price"
                        id="price"
                        className="form-control"
                      />
                      <ErrorMessage name="price" component={ValidationError} />
                    </div>

                    <div className="col-md-4">
                      <label htmlFor="price" className="form-label">
                        Quantity
                      </label>
                      <Field
                        type="number"
                        name="quantity"
                        id="quantity"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="quantity"
                        component={ValidationError}
                      />
                    </div>

                    <div className="col-md-4">
                      <label htmlFor="category" className="form-label">
                        Category
                      </label>
                      <Field as="select" name="category" id="category" className="form-select">
                        {categoryOptions.map((category, index) => (
                          <option value={category} key={index}>
                            {category}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name="category"
                        component={ValidationError}
                      />
                    </div>

                    <div className="col-12">
                      <button type="submit" className="btn btn-primary">
                        Register
                      </button>
                    </div>
                  </Form>
                </Formik>
              </div>

              </div>
            </div>
          </div>

      )}
    </>
  );
}

export default ProductRegistration;

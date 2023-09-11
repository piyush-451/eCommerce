import React from "react";
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import ValidationError from "../Alerts/ValidationError";

function Signin() {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string().required("password is required"),
  });

  return (
    <div className="row justify-content-center align-items-center flex-grow-1">
      <div className="col-6">
        <div className="h2 mb-5">Login:</div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            try {
              const res = await axios.post(
                "http://localhost:5000/authenticate/signin",
                values
              );
              console.log(res.data);
              localStorage.setItem("token", res.data);
              const {isAdmin} = decodeToken(res.data);
              localStorage.setItem("isAdmin",isAdmin)
              alert("Successfully logged in");
              navigate('/')
            } catch (error) {
              console.log(error);
              alert("error login in");
            }
          }}
        >
          <Form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <Field
                type="email"
                className="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
              />
              <ErrorMessage name="email" component={ValidationError} />
              <div id="email" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <Field
                type="password"
                name="password"
                className="form-control"
                id="password"
              />
              <ErrorMessage name="password" component={ValidationError} />
            </div>

            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Signin;

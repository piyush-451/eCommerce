import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Formik,Form,ErrorMessage,Field} from 'formik'
import * as Yup from 'yup'
import axios from "axios"
import ValidationError from "../Alerts/ValidationError";

function Signup() {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    name:Yup.string().required('Name is required'),
    email:Yup.string().email('Invalid Email').required('Email is required'),
    password:Yup.string().required().min(8,'Minimum 8 characters required')
  })
  return (
    <div className="row justify-content-center align-items-center flex-grow-1">
      <div className="col-6">
        <div className="h2 mb-5">Signup:</div>
        <Formik
        initialValues={{
          name:"",
          email:"",
          password:""
        }}
        validationSchema={validationSchema}
        onSubmit = {
          async (values)=>{
            try {
              const res = await axios.post("http://localhost:5000/authenticate/signup",values)
              localStorage.setItem('token',res.data)
              alert('Successfully registered')
              navigate('/signin')
            } catch (error) {
              console.log(error)
              alert('Registration Error')
            }
          }
        }
        >
        <Form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <Field type="text" name="name" id="name" className="form-control" />
            <ErrorMessage name="name" component={ValidationError} />
          </div>
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
            Sign up
          </button>
        </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Signup;

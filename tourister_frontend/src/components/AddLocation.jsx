import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import placesData from "./placesData";

const AddLocation = () => {

  const navigate=useNavigate();
  
  const signupForm = useFormik({
    initialValues: {
        title : "",
        image : "",
        description: "",
        place: ""
    },

    onSubmit: async (values) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/location/add',{
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type' : 'application/json'}
      });

      console.log(res.status);

      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title : 'Success',
          text : 'Location Added Successfully'
        });
      }else{
        Swal.fire({
          icon : 'error',
          title : 'Error',
          text : 'Something went wrong'
        })
      }
      // add code here to connect to backend
    }
  });

  return (
    <div>
      <div className="col-md-3 mx-auto">
        <div className="card">
          <div className="card-body">
            <h2 className="my-5 text-center">Signup Form</h2>

            <form onSubmit={signupForm.handleSubmit}>

              <label>Select Place</label>
              <select className="form-control" onChange={signupForm.handleChange} id="place" value={signupForm.values.place} >
                {
                  placesData.map(place => (
                    <option value={place.name}>{place.name}</option>
                  ))
                }
              </select>

              <label htmlFor="">Title</label>
              <span style={{color: 'red', fontSize: 15, marginLeft: 10}}>{signupForm.touched.name && signupForm.errors.name}</span>
              <input className="form-control mb-3" onChange={signupForm.handleChange} value={signupForm.values.title} name="title" />
              
              <label htmlFor="">Description</label>
              <span style={{color: 'red', fontSize: 15, marginLeft: 10}}>{signupForm.touched.email && signupForm.errors.email}</span>
              <textarea className="form-control mb-3" onChange={signupForm.handleChange} value={signupForm.values.description} name="description" ></textarea>

              <label htmlFor="">Upload Image</label>
              <span style={{color: 'red', fontSize: 15, marginLeft: 10}}>{signupForm.touched.password && signupForm.errors.password}</span>
              <input className="form-control mb-3" type="file" />

              <button type="submit" className="btn btn-primary mt-4">Login</button>
            </form>

          </div>
        </div>  
      </div>
    </div>
  );
};

export default AddLocation;

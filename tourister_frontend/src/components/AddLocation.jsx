import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import placesData from "./placesData";
import { useState } from "react";

const AddLocation = () => {

  // const navigate=useNavigate();

  const [selFile, setSelFile] = useState('');

  const uploadFile = (e) => {
    if(!e.target.files[0]) return;
    const file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };
  
  const signupForm = useFormik({
    initialValues: {
        title : "",
        image : "",
        description: "",
        place: ""
    },

    onSubmit: async (values) => {
      values.image = selFile;
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
    <div style={{
      backgroundImage: `url('https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2020/02/shutterstock_525154717-compressor.jpg')`,
      backgroundSize: 'cover',
    }}>
      <div className="col-md-3 mx-auto d-flex align-items-center vh-100">
        <div className="card w-100">
          <div className="card-body">
            <h2 className="my-5 text-center">Add New Location</h2>

            <form onSubmit={signupForm.handleSubmit}>

              <label>Select Place</label>
              <select className="form-control" onChange={signupForm.handleChange} id="place" value={signupForm.values.place} >
                <option value="">Select a Place</option>
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
              <input className="form-control mb-3" type="file" onChange={uploadFile} />

              <button type="submit" className="btn btn-primary mt-4">Add Location</button>
            </form>

          </div>
        </div>  
      </div>
    </div>
  );
};

export default AddLocation;

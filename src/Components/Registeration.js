import React, { useState } from "react";
import axios from "axios";
import "./Re.css";


import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
    let isvalid = true;
    let validationerros = {};
    if (formData.firstName === "" || formData.firstName == null) {
      isvalid = false;
      validationerros.firstName = "First name is required";
    }
    if (formData.lastName === "" || formData.lastName === null) {
      isvalid = false;
      validationerros.lastName = "Last name is required";
    }
    if (formData.email === "" || formData.email === null) {
      isvalid = false;
      validationerros.email = "Email is required";
    }

    if (formData.password === "" || formData.password === null) {
      isvalid = false;
      validationerros.password = "password  is required";
    } else if (formData.password.length < 6) {
      isvalid = false;
      validationerros.password = "password length should be atleat 8characters";
    }

    if (formData.password === "" || formData.password === null) {
      isvalid = false;
      validationerros.password = "password  is required";
    } else if (formData.password.length < 6) {
      isvalid = false;
      validationerros.password = "password length should be atleat 8characters";
    }

    if (formData.confirmPassword !== formData.password) {
      isvalid = false;
      
    }
    setErrors(validationerros);
    setValid(isvalid);

    if (Object.keys(validationerros).length == 0) {
      alert("Registered succesfull");
      navigate("/login");
      axios
        .post("http://localhost:3000/users", formData)
        .then(console.log(formData))
        .catch((err) => console.log(err, "err while posting"));
    }
  };
  return (
    <div className="cont">
    <div className="container1">
      <div className="box1">
        <div className="shadow1"></div>
        <div className="cover1"></div>
        <div className="content1">
          <div className="form1">
            <div className="logo1">
              <i className="icon1"><i class="fa-solid fa-key"></i></i>
            </div>
            <h2>Sign up</h2>
            <form className="form-container1" onSubmit={handleSubmit}>
              <div className="inputBox2">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <label>First Name</label>
                {errors.firstName && (
                  <span className="error">{errors.firstName}</span>
                )}
              </div>

              <div className="inputBox2">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <label>Last Name</label>
                {errors.lastName && (
                  <span className="error">{errors.lastName}</span>
                )}
              </div>
              
              <div className="inputBox2">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label>Email</label>
                {errors.email && (
                  <span className="error">{errors.email}</span>
                )}
              </div>

              <div className="inputBox2">
                <input
                  type="text"
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleChange}
                />
                 <label>MobileNo</label>
              </div>

              <div className="inputBox2">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <label>Password</label>
                {errors.password && (
                  <span className="error">{errors.password}</span>
                )}
              </div>

              <div className="inputBox2">
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <label>Confirm Password</label>
                {errors.confirmPassword && (
                  <span className="error">{errors.confirmPassword}</span>
                )}
              </div>

              <div className="inputBox2">
                <button type="submit">Submit</button>
              </div>

              <div className="links">
                <p>
                  Already have an account?{' '}
                  <span
                    className="LoginNav"
                    onClick={() => {
                      navigate("/login");
                    }}
                    style={{ color: "blue" }}
                  >
                    <u>Login here</u>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};


export default Register;

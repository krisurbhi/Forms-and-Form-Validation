import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

const FormComponent = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    emailAddress: "",
    password: "",
    passwordConfirmation: "",
    phoneNo: "",
    country: "",
    city: "",
    panNo: "",
    aadharNo: "",
    errors: {},
    isFormSubmitted: false,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    validateField(name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formFields = [
      "firstName", "lastName", "username", "emailAddress", "password",
      "passwordConfirmation", "phoneNo", "country", "city", "panNo", "aadharNo"
    ];

    let isValid = true;
    formFields.forEach((field) => {
      isValid = validateField(field) && isValid;
    });

    if (isValid) {
      setFormState((prevState) => ({ ...prevState, isFormSubmitted: true }));
      navigate('/details', { state: { ...formState } });
    } else {
      setFormState((prevState) => ({ ...prevState, isFormSubmitted: false }));
    }
  };

  const validateField = (name) => {
    let isValid = false;
    const errors = { ...formState.errors };

    switch (name) {
      case "firstName":
        isValid = formState.firstName.trim() !== "";
        errors.firstName = isValid ? "" : "First Name is required";
        break;
      case "lastName":
        isValid = formState.lastName.trim() !== "";
        errors.lastName = isValid ? "" : "Last Name is required";
        break;
      case "username":
        isValid = formState.username.trim() !== "";
        errors.username = isValid ? "" : "Username is required";
        break;
      case "emailAddress":
        isValid = emailValidator.test(formState.emailAddress);
        errors.emailAddress = isValid ? "" : "Email is not valid";
        break;
      case "password":
        isValid = passwordValidator.test(formState.password);
        errors.password = isValid ? "" : "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase";
        break;
      case "passwordConfirmation":
        isValid = formState.password === formState.passwordConfirmation;
        errors.passwordConfirmation = isValid ? "" : "Password does not match Confirmation";
        break;
      case "phoneNo":
        isValid = formState.phoneNo.trim() !== "";
        errors.phoneNo = isValid ? "" : "Phone Number is required";
        break;
      case "country":
        isValid = formState.country.trim() !== "";
        errors.country = isValid ? "" : "Country is required";
        break;
      case "city":
        isValid = formState.city.trim() !== "";
        errors.city = isValid ? "" : "City is required";
        break;
      case "panNo":
        isValid = formState.panNo.trim() !== "";
        errors.panNo = isValid ? "" : "Pan No. is required";
        break;
      case "aadharNo":
        isValid = formState.aadharNo.trim() !== "";
        errors.aadharNo = isValid ? "" : "Aadhar No. is required";
        break;
      default:
        break;
    }

    setFormState((prevState) => ({ ...prevState, errors }));
    return isValid;
  };

  return (
    <div className="main">
      <h3>SignUp Form</h3>
      {formState.isFormSubmitted ? (
        <div className="details">
          <h3>Thanks for signing up, find your details below:</h3>
          <div>First Name: {formState.firstName}</div>
          <div>Last Name: {formState.lastName}</div>
          <div>Email Address: {formState.emailAddress}</div>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formState.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
            <br />
            {formState.errors.firstName && (
              <div className="errorMsg">{formState.errors.firstName}</div>
            )}
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formState.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
            <br />
            {formState.errors.lastName && (
              <div className="errorMsg">{formState.errors.lastName}</div>
            )}
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formState.username}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
            <br />
            {formState.errors.username && (
              <div className="errorMsg">{formState.errors.username}</div>
            )}
            <input
              type="email"
              placeholder="Email Address"
              name="emailAddress"
              value={formState.emailAddress}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
            <br />
            {formState.errors.emailAddress && (
              <div className="errorMsg">{formState.errors.emailAddress}</div>
            )}
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formState.password}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
            <br />
            {formState.errors.password && (
              <div className="errorMsg">{formState.errors.password}</div>
            )}
            <input
              type="password"
              placeholder="Confirm Password"
              name="passwordConfirmation"
              value={formState.passwordConfirmation}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
            <br />
            {formState.errors.passwordConfirmation && (
              <div className="errorMsg">{formState.errors.passwordConfirmation}</div>
            )}
            <input
              type="text"
              placeholder="Phone No."
              name="phoneNo"
              value={formState.phoneNo}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
            <br />
            {formState.errors.phoneNo && (
              <div className="errorMsg">{formState.errors.phoneNo}</div>
            )}
            
            <select name="country"
              id="country"
              value={formState.country}
              onChange={handleChange}
              onBlur={handleBlur}>
              <option value="" disabled selected hidden>Country</option>
              <option value="India">India</option>
              <option value="China">China</option>
              <option value="USA">USA</option>
              <option value="England">England</option>
            </select>
            <br />
            {formState.errors.country && (
              <div className="errorMsg">{formState.errors.country}</div>
            )}
            
            <select name="city"
              id="city"
              value={formState.city}
              onChange={handleChange}
              onBlur={handleBlur}>
              
              <option value="" disabled selected hidden>City</option>
              <option value="Deoghar">Deoghar</option>
              <option value="Asansol">Asansol</option>
              <option value="Delhi">Delhi</option>
              <option value="New york">New york</option>
            </select>
            <br />
            {formState.errors.city && (
              <div className="errorMsg">{formState.errors.city}</div>
            )}
            <input
              type="text"
              placeholder="Pan No."
              name="panNo"
              value={formState.panNo}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
            <br />
            {formState.errors.panNo && (
              <div className="errorMsg">{formState.errors.panNo}</div>
            )}
            <input
              type="text"
              placeholder="Aadhar No."
              name="aadharNo"
              value={formState.aadharNo}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="off"
            />
            <br />
            {formState.errors.aadharNo && (
              <div className="errorMsg">{formState.errors.aadharNo}</div>
            )}
            <button type="submit" disabled={Object.values(formState.errors).some((error) => error !== "")}>
              Signup
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FormComponent;

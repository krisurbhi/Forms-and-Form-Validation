import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const { state } = useLocation();
  
  if (!state) {
    return <div>No details available. Please complete the form first.</div>;
  }

  return (
    <div className='details'>
      <h3>Thanks for signing up, find your details below:</h3>
      <div>First Name: {state.firstName}</div>
      <div>Last Name: {state.lastName}</div>
      <div>Username: {state.username}</div>
      <div>Email Address: {state.emailAddress}</div>
      <div>Phone No: {state.phoneNo}</div>
      <div>Country: {state.country}</div>
      <div>City: {state.city}</div>
      <div>Pan No: {state.panNo}</div>
      <div>Aadhar No: {state.aadharNo}</div>
    </div>
  );
}

export default Details;

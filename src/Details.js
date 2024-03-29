import React from 'react';

function Details(props) {
  return (
    <div>
      <h2>User Details</h2>
      <p>First Name: {props.firstName}</p>
      <p>Last Name: {props.lastName}</p>
      <p>Email: {props.email}</p>
      <p>Favorite Season: {props.season}</p>
    </div>
  );
}

export default Details;

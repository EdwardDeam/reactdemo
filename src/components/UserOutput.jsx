import React from 'react';
import './userOutput.css';

const UserOutput = (props) => {
  return (
    <div className="userOutput">
      <p>Username: {props.username}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, error.</p>
    </div> 
  );
};

export default UserOutput;
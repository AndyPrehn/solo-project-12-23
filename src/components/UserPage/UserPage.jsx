import React from 'react';
import {useSelector} from 'react-redux';
import './User.css';

// !This is where you start your work.


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p> Congratulaions on taking your first step to financial literacy!</p>
      <p>  With this app you will be building a lifelong habit of tracking
          your money </p>
          <p>  and keeping a record of where it comes from 
          and where it goes. 

      </p>
      <p>Your ID is: {user.id}</p>

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

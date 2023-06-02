import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsersFunction = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log(response.data); // Logging the response data to the console
        setUsers(response.data); // Updating the state with the list of users
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1> Functional Component Users</h1>
      {users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default UsersFunction;

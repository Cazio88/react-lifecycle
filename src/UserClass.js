import React, { Component } from 'react';

class UsersClass extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Logging the response data to the console
        this.setState({ users: data }); // Updating the state with the list of users
      });
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <h1>Users</h1>
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
}

export default UsersClass;

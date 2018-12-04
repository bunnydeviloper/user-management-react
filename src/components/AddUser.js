import React, { Component } from 'react';

export default class AddUser extends Component {
  state = {
    user: {
      firstName: "",
      lastName: "",
      username: ""
    },
    userExist: false
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    // take the original object in state, update the user's fields accoridingly
    // where firstName: value, lastName: value (of lastName input), & username: value(of username input)
    this.setState((currentState) => ({
      ...currentState,
      user: {
        ...currentState.user,
        [name]: value
      }
    }));
  }

  handleSubmit = () => {
    // 
  }

  render() {
    const { firstName, lastName, username } = this.state.user;

    return (
      <div>
        <h1>New User Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text"
              name="firstName"
              placeholder="Enter first name:"
              value={firstName}
              onChange={this.handleInputChange}
            />
            <input type="text"
              name="lastName"
              placeholder="Enter last name:"
              value={lastName}
              onChange={this.handleInputChange}
            />
            <input type="text"
              name="username"
              placeholder="Enter username:"
              value={username}
              onChange={this.handleInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

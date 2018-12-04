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
    return (
      <div>
        <h1> Hello from AddUser component </h1>
      </div>
    );
  }
}

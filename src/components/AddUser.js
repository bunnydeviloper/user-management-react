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

  handleSubmit = (e) => {
    e.preventDefault();
    // when someone submit the form, check if username is already exists or not
    const userExist = this.checkUserExist(this.state.user.username);

    // if the user is not exist yet, we pass the user's info to the parent's component and update its state
    if (!userExist) this.props.onAddUser(this.state.user);

    // we also update the current component's state
    this.setState(() => ({ userExist }));
  }

  checkUserExist = (inputUsername) => {
    const users = this.props.users;
    for (let user of users) {
      if (user.name === inputUsername) return true;
      // if (user.username === inputUsername) return true;
    }
    return false;
  }

  // if any of the fields (firstName, lastName, username) is blank, we will disable the 'Add' button
  isDisabled = () => {
    const { firstName, lastName, username } = this.state.user;
    return firstName === "" || lastName === "" || username === "";
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
        <button disabled={this.isDisabled()}>
          Add
        </button>
        <p>{this.state.userExist ? "You cannot add an existing users!" : ""}</p>
      </div>
    );
  }
}

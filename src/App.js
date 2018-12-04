import React, { Component } from 'react';
import './App.css';

import AddUser from './components/AddUser';
import UserList from './components/UserList';

class App extends Component {
  // if multiple child components needs to access the same state, put that state in the parent component
  state = {
    users: [] // initialize an array of users
  }

  createUser = (user) => {
    // initialize the status of new user
    user.totalGamesPlayed = 0;
    // set the new state of this component
    this.setState((currentState) => ({
      users: [...currentState.users, user]
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React State Management Practice</h1>
        </header>
        <AddUser users={this.state.users} onAddUser={this.state.createUser} />
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

import AddUser from './components/AddUser';
import UserList from './components/UserList';

class App extends Component {
  state = {
    users: {}
  }

  render() {
    return (
      <div className="App">
        <AddUser users={this.state.users} onAddUser={this.state.addNewUser} />
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default App;

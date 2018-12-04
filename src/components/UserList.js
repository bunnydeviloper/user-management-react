import React, { Component } from 'react';

import User from './User';

export default class UserList extends Component {
  render() {
    return (
      <div>
        <h1> Hello from UserList component </h1>
        <User />
      </div>
    );
  }
}

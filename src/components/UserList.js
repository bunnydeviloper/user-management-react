import React, { Component } from 'react';

import User from './User';

export default class UserList extends Component {
  state = {
    showGamesPlayed: false // initialize condition for showing # of games played
  }

  toggleGamesPlayedPanel = () => {
    this.setState({ showGamesPlayed: true });
  }

  render() {
    const { showGamesPlayed } = this.state;
    const users = this.props;

    const gamesPlayedButton = (
      <div>
        <button onClick={this.toggleGamesPlayedPanel}>
          {showGamesPlayed ? "Show" : "Hide"}
          the number of games played
        </button>
      </div>
    );

    return (
      <div>
        <h1> Hello from UserList component </h1>
        {users && users.length > 0 ? gamesPlayedButton : ""}

        <ol>
          {users.length > 0 ? users.map(user => (
            <User key={user.username}
              user={user}
              showGamesPlayed={showGamesPlayed}
            />
          )) : (<p>Add new user using the above form</p>)}
        </ol>

      </div>
    );
  }
}

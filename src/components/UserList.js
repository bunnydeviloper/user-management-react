import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User';

export default class UserList extends Component {
  state = {
    showGamesPlayed: true // initialize condition for showing # of games played
  }

  toggleGamesPlayedPanel = () => {
    this.setState(currentState => ({ showGamesPlayed: !currentState.showGamesPlayed }));
  }

  render() {
    const { showGamesPlayed } = this.state;
    const users = this.props;
    console.log(users);

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
          { /* {users.length > 0 ? users.map(user => ( */
            users.map(user => (
            <User key={user.username}
              user={user}
              showGamesPlayed={showGamesPlayed}
            />
          ))}
        </ol>

      </div>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

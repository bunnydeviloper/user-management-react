import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User';

export default class UserList extends Component {
  state = {
    showGamesPlayed: true // initialize condition for showing # of games played
  }

  toggleGamesPlayedPanel = () => {
    this.setState(currentState => ({
      showGamesPlayed: !currentState.showGamesPlayed
    }));
  }

  render() {
    const { showGamesPlayed } = this.state;
    const { users } = this.props;

    const gamesPlayedButton = (
      <div>
        <button className="smallButton" onClick={this.toggleGamesPlayedPanel}>
          {showGamesPlayed ? "Show" : "Hide"}
          the number of games played
        </button>
      </div>
    );

    return (
      <div>
        <h1>List of all current users:</h1>
        {users && users.length > 0 ? gamesPlayedButton : ""}

        <ol>
          {users.map(user => (
            <User key={user.username} user={user} showGamesPlayed={showGamesPlayed} />
          ))}
        </ol>

      </div>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

import React from 'react';

// since this component doesn't needs to manage state
// we can just use stateless functional component
const User = (props) => {
  return (
    <li>
      <p>Username: {props.user.username}</p>
      {/* <p>Total number of games played: {props.showGamesPlayed}</p> */}
      <p>Total number of games played: {" "}
        {props.showGamesPlayed ? props.user.numGamesPlayed : "*"}
      </p>
    </li>
  );
};

export default User;

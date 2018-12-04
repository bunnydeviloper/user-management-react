import React from 'react';
import PropTypes from 'prop-types';

// since this component doesn't needs to manage state
// we can just use stateless functional component
const User = (props) => {
  return (
    <li>
      <p>Username: {props.user.username}</p>
      {/* <p>Total number of games played: {props.showAvatar}</p> */}
      {props.showAvatar && props.user.avatarUrl
          ? (<p>Avatar: <img alt="avatar" src={props.user.avatarUrl} width="30px" /></p>)
          : ("")}
        </li>
  );
};

User.propTypes = {
  showAvatar: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
}

export default User;

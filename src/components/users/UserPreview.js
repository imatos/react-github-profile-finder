import React from 'react';
import { Link } from 'react-router-dom';

import './UserPreview.css';

const UserPreview = ({ user }) => {
  return (
    <Link to={`/user/${user.login}`} className="card floating-effect">
      <img className="card-img" src={user.avatar_url} alt={user.login} />
      <span className="user-name">{user.login}</span>
    </Link>
  );
};

export default UserPreview;

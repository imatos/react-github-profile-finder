import React from 'react';
import './UserPreview.css';

const UserPreview = ({ user }) => {
  return (
    <a target="_blank" href={user.html_url} className="card floating-effect">
      <img className="card-img" src={user.avatar_url} alt={user.login} />
      <span className="user-name">{user.login}</span>
    </a>
  );
};

export default UserPreview;

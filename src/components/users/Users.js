import React from 'react';
import UserPreview from './UserPreview';
import SearchForm from '../shared/searchForm/SearchForm';
import Spinner from '../shared/spinner/Spinner';
import './Users.css';

const Users = ({ users, isLoaded }) => {
  return (
    <div className="user-content">
      <SearchForm />
      <div className="users-preview-content">
        {isLoaded ? (
          users.map((user) => <UserPreview key={user.id} user={user} />)
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Users;

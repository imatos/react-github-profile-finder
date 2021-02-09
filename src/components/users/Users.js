import React from 'react';
import UserPreview from './UserPreview';

const Users = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <UserPreview key={user.id} user={user} />
      ))}
    </>
  );
};

export default Users;

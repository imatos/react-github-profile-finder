import React from 'react';

function NotFound() {
  return (
    <div className="flex flex-column justify-content-center align-items-center">
      <h1>
        <i className="fas fa-exclamation-triangle"></i> Page Not Found
      </h1>
      <h3 className="mt">The page you are looking for does not exist!</h3>
    </div>
  );
}

export default NotFound;

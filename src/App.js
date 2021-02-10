import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Spinner from './components/shared/Spinner';

import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((res) => res.json())
      .then((data) => {
        setIsLoaded(true);
        setUsers(data);
      });
  }, []);

  return (
    <>
      <Navbar title="Github Profile Finder" icon="fab fa-github" />
      <div className="container">
        {isLoaded ? <Users users={users} /> : <Spinner />}
      </div>
    </>
  );
};

export default App;

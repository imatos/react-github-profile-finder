import React, { useState, useEffect, useContext } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Spinner from './components/shared/spinner/Spinner';

import './App.css';
import { SearchContext } from './Context/useSearchContext';

const App = () => {
  const { searchParam } = useContext(SearchContext);

  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    setIsLoaded(false);

    const githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    const githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
    const githubKeys = `client_id=${githubClientId}&client_secret=${githubClientSecret}`;

    let resource = '';
    let filtered = false;
    if (searchParam !== '') {
      resource = `search/users?q=${searchParam}&${githubKeys}`;
      filtered = true;
    } else {
      resource = `users?${githubKeys}`;
      filtered = false;
    }

    fetch(`https://api.github.com/${resource}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoaded(true);
        if (filtered) {
          setUsers(data.items);
        } else {
          setUsers(data);
        }
      })
      .catch((error) => {
        setError(error);
      });
  }, [searchParam]);

  return (
    <>
      <Navbar title="Github Profile Finder" icon="fab fa-github" />
      <div className="container">
        {isLoaded ? <Users users={users} /> : <Spinner />}
      </div>

      {error ? JSON.stringify(error) : ''}
    </>
  );
};

export default App;

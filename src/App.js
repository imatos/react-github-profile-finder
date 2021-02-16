import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { SearchContext } from './Context/searchContext';
import { useGithubUsers } from './Hooks/useGithubUsers';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import UserProfile from './components/users/UserProfile';
import About from './about/About';

import './App.css';

const App = () => {
  const { searchParam } = useContext(SearchContext);
  const { users, isLoaded, error } = useGithubUsers(searchParam);

  return (
    <Router>
      <Navbar title="Github Profile Finder" icon="fab fa-github" />
      <div className="container">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Users users={users} isLoaded={isLoaded} />}
          />
          <Route exact path="/user/:login" render={() => <UserProfile />} />
          <Route exact path="/about" render={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

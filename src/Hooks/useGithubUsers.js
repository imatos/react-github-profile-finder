import { useEffect, useState } from 'react';

export const useGithubUsers = (searchParam) => {
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

  return { users, isLoaded, error };
};

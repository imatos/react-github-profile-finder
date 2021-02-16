import { useEffect, useState } from 'react';

export const useGithubUserProfile = (login) => {
  const [user, setUser] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    setIsLoaded(false);

    const githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    const githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
    const githubKeys = `client_id=${githubClientId}&client_secret=${githubClientSecret}`;

    fetch(`https://api.github.com/users/${login}?${githubKeys}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoaded(true);
        setUser(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [login]);

  return { user, isLoaded, error };
};

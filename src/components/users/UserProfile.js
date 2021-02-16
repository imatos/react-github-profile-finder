import React from 'react';
import { useParams } from 'react-router-dom';
import { useGithubUserProfile } from '../../Hooks/useGithubUserProfile';
import Spinner from '../shared/spinner/Spinner';
import './UserProfile.css';

import { Link } from 'react-router-dom';

const UserProfile = () => {
  const { login } = useParams();
  const { user, isLoaded } = useGithubUserProfile(login);
  return isLoaded ? (
    <div className="flex justify-content-center">
      <div className="profile-container">
        <img className="user-avatar" src={user.avatar_url} alt={user.login} />
        <div className="user-info">
          <span className="user-name">{user.name}</span>
          <span className="user-login">{user.login}</span>
          {user.bio && <span className="user-bio">{user.bio}</span>}

          <div
            className="flex justify-content-center"
            style={{ margin: '12px' }}
          >
            <span className="badge primary">{user.followers} followers</span>
            <span className="badge secondary">
              Following {user.following} users
            </span>

            <span className="badge dark">{user.public_repos} Repositories</span>
            <span className="badge success">{user.public_gists} Gists</span>
          </div>

          {user.company && (
            <span className="mt">
              <i className="fas fa-building"></i> {user.company}
            </span>
          )}

          {user.location && (
            <span className="mt">
              <i className="fas fa-map-marker-alt"></i> {user.location}
            </span>
          )}

          {user.blog && (
            <a className="mt" href={user.blog} target="_blank">
              <i className="fas fa-link"></i> {user.blog}
            </a>
          )}

          {user.email && (
            <span className="mt">
              <i className="fas fa-at"></i> {user.email}
            </span>
          )}

          {user.twitter_username && (
            <span className="mt">
              <i className="fab fa-twitter"></i> {user.twitter_username}
            </span>
          )}

          <a className="btn btn-dark mt" href={user.html_url} target="_blank">
            Go to Github Page
          </a>
        </div>
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

export default UserProfile;

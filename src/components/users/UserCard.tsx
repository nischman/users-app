import React from 'react';
import { Link } from 'react-router-dom';

import type { UserCardProps } from './types';

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Link to={`/users/${user.id}`} className="user-card">
      <div className="user-avatar">
        <div className="user-initials">
          {user.name.charAt(0)}
        </div>
      </div>
      <div className="user-info">
        <h3 className="user-name">{user.name}</h3>
        <p className="user-username">@{user.username}</p>
        <p className="user-email">{user.email}</p>
        <div className="user-company">
          <span className="company-label">Компания:</span> {user.company.name}
        </div>
        <div className="user-city">
          <span className="city-label">Город:</span> {user.address.city}
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
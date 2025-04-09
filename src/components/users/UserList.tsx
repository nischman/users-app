import React from 'react';
import UserCard from './UserCard';

import type { UserListProps } from './types';

const UserList: React.FC<UserListProps> = ({ users, isLoading, error }) => {
  if (error) {
    return (
      <div className="error-message">
        <p>Ошибка при загрузке пользователей: {error.message}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Загрузка списка пользователей...</p>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="no-results">
        <p>По вашему запросу не найдено пользователей</p>
      </div>
    );
  }

  return (
    <div className="user-list">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
import React from 'react';
import { Link } from 'react-router-dom';

import type{ UserDetailsProps } from './types';

const UserDetails: React.FC<UserDetailsProps> = ({ user, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Загрузка информации о пользователе...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        <p>Ошибка при загрузке пользователя: {error.message}</p>
        <Link to="/users" className="back-link">Вернуться к списку</Link>
      </div>
    );
  }

  return (
    <div className="user-details">
      <div className="back-navigation">
        <Link to="/users" className="back-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          Вернуться к списку
        </Link>
      </div>

      <div className="user-details-header">
        <div className="user-avatar large">
          <div className="user-initials">{user.name.charAt(0)}</div>
        </div>
        <div className="user-details-title">
          <h1>{user.name}</h1>
          <p className="username">@{user.username}</p>
        </div>
      </div>

      <div className="user-details-content">
        <div className="details-section">
          <h2>Контактная информация</h2>
          <div className="details-grid">
            <div className="details-item">
              <span className="details-label">Email:</span>
              <span className="details-value">{user.email}</span>
            </div>
            <div className="details-item">
              <span className="details-label">Телефон:</span>
              <span className="details-value">{user.phone}</span>
            </div>
            <div className="details-item">
              <span className="details-label">Веб-сайт:</span>
              <span className="details-value">
                <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
                  {user.website}
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="details-section">
          <h2>Адрес</h2>
          <div className="details-grid">
            <div className="details-item">
              <span className="details-label">Улица:</span>
              <span className="details-value">{user.address.street}</span>
            </div>
            <div className="details-item">
              <span className="details-label">Квартира/офис:</span>
              <span className="details-value">{user.address.suite}</span>
            </div>
            <div className="details-item">
              <span className="details-label">Город:</span>
              <span className="details-value">{user.address.city}</span>
            </div>
            <div className="details-item">
              <span className="details-label">Индекс:</span>
              <span className="details-value">{user.address.zipcode}</span>
            </div>
          </div>
        </div>

        <div className="details-section">
          <h2>Компания</h2>
          <div className="details-grid">
            <div className="details-item">
              <span className="details-label">Название:</span>
              <span className="details-value">{user.company.name}</span>
            </div>
            <div className="details-item">
              <span className="details-label">Слоган:</span>
              <span className="details-value">{user.company.catchPhrase}</span>
            </div>
            <div className="details-item">
              <span className="details-label">Сфера деятельности:</span>
              <span className="details-value">{user.company.bs}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>Запрашиваемая страница не существует или была перемещена.</p>
      <Link to="/" className="back-home-link">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFound;
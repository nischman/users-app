import React from 'react';
import { Navigate } from 'react-router-dom';

const Home: React.FC = () => {
  // Перенаправляем с главной страницы на страницу списка пользователей
  return <Navigate to="/users" replace />;
};

export default Home;
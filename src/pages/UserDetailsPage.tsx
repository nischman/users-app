import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchUserById } from '../api/users';
import UserDetails from '../components/users/UserDetails';

const UserDetailsPage: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();

  // Используем react-query для кеширования данных пользователя
  const { 
    data: user, 
    isLoading, 
    error 
  } = useQuery(
    ['user', userId], 
    () => fetchUserById(userId!),
    {
      staleTime: 5 * 60 * 1000, // Данные считаются актуальными в течение 5 минут
      cacheTime: 10 * 60 * 1000, // Кеш хранится 10 минут
      enabled: !!userId, // Запрос выполняется только при наличии userId
    }
  );

  return (
    <div className="user-details-page">
      {user ? (
        <UserDetails 
          user={user} 
          isLoading={isLoading} 
          error={error as Error | null} 
        />
      ) : !isLoading ? (
        <div className="error-message">
          <p>Пользователь не найден</p>
        </div>
      ) : null}
    </div>
  );
};

export default UserDetailsPage;
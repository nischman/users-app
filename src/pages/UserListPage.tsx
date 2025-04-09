import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import UserList from '../components/users/UserList';
import SearchBar from '../components/common/SearchBar';
import UserFiltersComponent from '../components/users/UserFilters';

import { fetchUsers } from '../api/users';
import { useDebounce } from '../hooks/useDebounce';
import { setFilters } from '../store/filterSlice';

import type { User } from '../api/types';
import type { AppDispatch, RootState } from '../store';

const UserListPage: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector((state: RootState) => state.filters);
  
  // Применяем дебаунс к поисковому запросу для оптимизации производительности
  const debouncedQuery = useDebounce(filters.query, 300);
  
  // Используем react-query для кеширования данных и управления состоянием загрузки/ошибок
  const { 
    data: users, 
    isLoading, 
    error
  } = useQuery<User[], Error>('users', fetchUsers, {
    staleTime: 5 * 60 * 1000, // Данные считаются актуальными в течение 5 минут
    cacheTime: 10 * 60 * 1000, // Кеш хранится 10 минут
  });

  // Фильтрация пользователей на основе критериев поиска и фильтров
  const filteredUsers = useMemo(() => {
    if (!users) return [];

    return users.filter((user) => {
      // Проверка поискового запроса (по имени или email)
      const matchesQuery = debouncedQuery
        ? user.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(debouncedQuery.toLowerCase())
        : true;

      // Проверка фильтра по городу
      const matchesCity = filters.city
        ? user.address.city === filters.city
        : true;

      // Проверка фильтра по компании
      const matchesCompany = filters.companyName
        ? user.company.name === filters.companyName
        : true;

      return matchesQuery && matchesCity && matchesCompany;
    });
  }, [users, debouncedQuery, filters.city, filters.companyName]);

  // Обработчик изменения фильтров
  const handleSearch = (query: string) => {
    dispatch(setFilters({ ...filters, query }));
  };

  return (
    <div className="user-list-page">
      <div className="page-header">
        <h1>Список пользователей</h1>
      </div>

      <div className="filters-container">
        <SearchBar onSearch={handleSearch} />
        
        {!isLoading && users && (
          <UserFiltersComponent
            users={users}
          />
        )}
      </div>

      <UserList 
        users={filteredUsers} 
        isLoading={isLoading} 
        error={error as Error | null} 
      />
    </div>
  );
};

export default UserListPage;
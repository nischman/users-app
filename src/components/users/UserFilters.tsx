import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { UserFiltersProps } from './types';
import type { RootState } from '../../store';
import { clearFilters, setFilters, setFilterOptions } from '../../store/filterSlice';

const UserFiltersComponent: React.FC<UserFiltersProps> = ({ 
  users
}) => {

  const dispatch = useDispatch();
  const { city, companyName, cities, companies } = useSelector(
    (state: RootState) => state.filters
  );
  const currentFilters = useSelector((state: RootState) => state.filters);

  // Получаем уникальные города и компании для фильтров
  useEffect(() => {
    if (users.length) {
      const uniqueCities = Array.from(
        new Set(users.map((user) => user.address.city))
      ).sort();

      const uniqueCompanies = Array.from(
        new Set(users.map((user) => user.company.name))
      ).sort();

      dispatch(setFilterOptions({ cities: uniqueCities, companies: uniqueCompanies }));
    }
  }, [users, dispatch]);

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = e.target.value || undefined;
    dispatch(setFilters({ ...currentFilters, city: selectedCity }));
  };

  const handleCompanyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCompany = e.target.value || undefined;
    dispatch(setFilters({ companyName: selectedCompany }));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  return (
    <div className="user-filters">
      <div className="filter-group">
        <select
          id="city-filter"
          value={city || ''}
          onChange={handleCityChange}
          className="filter-select"
        >
          <option value="">Все города</option>
          {cities.map(city => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <select
          id="company-filter"
          value={companyName || ''}
          onChange={handleCompanyChange}
          className="filter-select"
        >
          <option value="">Все компании</option>
          {companies.map(company => (
            <option key={company} value={company}>
              {company}
            </option>
          ))}
        </select>
      </div>

      {(city || companyName) && (
        <button 
          className="clear-filters-btn" 
          onClick={handleClearFilters}
        >
          Сбросить фильтры
        </button>
      )}
    </div>
  );
};

export default UserFiltersComponent;
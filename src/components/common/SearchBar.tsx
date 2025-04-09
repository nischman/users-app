import React, { useState, ChangeEvent } from 'react';

import type { SearchBarProps } from './types';

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  placeholder = 'Поиск по имени или email...' 
}) => {
  const [search, setSearch] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder={placeholder}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
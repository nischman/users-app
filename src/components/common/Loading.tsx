import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Загрузка данных...</p>
    </div>
  );
};

export default Loading;
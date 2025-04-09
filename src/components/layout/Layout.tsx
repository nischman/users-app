import React from 'react';
import Header from './Header';
import ErrorBoundary from '../common/ErrorBoundary';

import type { LayoutProps } from './types';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </main>
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Тестовое задание </p>
      </footer>
    </div>
  );
};

export default Layout;
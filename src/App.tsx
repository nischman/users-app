import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import { store } from './store';

import Layout from './components/layout/Layout';
import Loading from './components/common/Loading';

// Используем динамический импорт для code splitting
const Home = lazy(() => import('./pages/Home'));
const UserListPage = lazy(() => import('./pages/UserListPage'));
const UserDetailsPage = lazy(() => import('./pages/UserDetailsPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Создаем клиент React Query для кеширования данных
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Отключаем повторную загрузку при фокусе окна
      retry: 1, // Ограничиваем количество повторных попыток при ошибке
    },
  },
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UserListPage />} />
              <Route path="/users/:userId" element={<UserDetailsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
    </Provider>
  );
};

export default App;
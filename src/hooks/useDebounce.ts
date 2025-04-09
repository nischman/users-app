import { useState, useEffect } from 'react';

/**
 * Хук для дебаунсинга значений ввода
 * Используется для предотвращения частых обновлений при вводе в поле поиска
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
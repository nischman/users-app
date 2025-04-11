import { User } from './types';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Получение всех пользователей
 */
export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

/**
 * Получение конкретного пользователя по ID
 */
export const fetchUserById = async (userId: string): Promise<User> => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user details');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching user with ID ${userId}:`, error);
    throw error;
  }
};
import type { User } from "../../api/types";

export interface UserCardProps {
  user: User;
};

export interface UserDetailsProps {
  user: User;
  isLoading: boolean;
  error: Error | null;
};

export interface UserFilters {
  query: string;
  city?: string;
  companyName?: string;
};

export interface UserListProps {
  users: User[];
  isLoading: boolean;
  error: Error | null;
};

export interface UserFiltersProps {
  users: User[];
  onFilterChange?: (filters: UserFilters) => void;
  currentFilters?: UserFilters;
};
import { ReactNode } from "react";

export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
};

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
};

export interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
};
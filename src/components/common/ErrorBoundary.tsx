import { Component, ErrorInfo, ReactNode } from 'react';

import type { ErrorBoundaryProps, ErrorBoundaryState } from './types';

/**
 * Компонент для обработки ошибок в дочерних компонентах
 */

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="error-container">
          <h2>Что-то пошло не так</h2>
          <p>{this.state.error?.message || 'Произошла ошибка при загрузке.'}</p>
          <button onClick={() => this.setState({ hasError: false })}>
            Попробовать снова
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
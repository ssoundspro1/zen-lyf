// Export Firebase configuration and authentication methods
export * from './firebase';

// Export user service
export * from './userService';

// Export health data service
export * from './healthDataService';

// Export API client configuration
export const API_CONFIG = {
  baseURL: process.env.REACT_APP_API_BASE_URL || 'https://api.zen-lyf.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
}; 
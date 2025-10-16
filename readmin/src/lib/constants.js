// App-wide constants
export const APP_NAME = 'React Admin';
export const APP_VERSION = '1.0.0';

// API endpoints
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

// Local storage keys
export const STORAGE_KEYS = {
  THEME: 'readmin-theme',
  SIDEBAR_COLLAPSED: 'readmin-sidebar-collapsed',
  USER_PREFERENCES: 'readmin-user-preferences',
};

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const THEME_COLORS = {
  primary: '#3b82f6',
  secondary: '#a855f7',
  success: '#22c55e',
  warning: '#eab308',
  error: '#ef4444',
  info: '#06b6d4',
};

// Navigation items
export const NAVIGATION_ITEMS = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    href: '/dashboard',
    icon: 'LayoutDashboard',
  },
  {
    id: 'users',
    label: 'Users',
    href: '/users',
    icon: 'Users',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    href: '/analytics',
    icon: 'BarChart3',
  },
  {
    id: 'settings',
    label: 'Settings',
    href: '/settings',
    icon: 'Settings',
  },
];
import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  // Color palette inspired by Apple's clean aesthetic and NVIDIA's tech-focused dark mode
  colors: {
    // Primary brand colors
    primary: '#4F46E5', // Indigo
    secondary: '#10B981', // Emerald
    tertiary: '#F59E0B', // Amber
    
    // UI colors
    background: {
      primary: '#0F172A', // Dark blue/slate
      secondary: '#1E293B', // Slightly lighter slate
      card: 'rgba(30, 41, 59, 0.7)', // Semi-transparent card background
      glass: 'rgba(255, 255, 255, 0.05)', // Glass effect background
    },
    
    // Text colors
    text: {
      primary: '#F8FAFC', // Almost white
      secondary: '#94A3B8', // Light slate
      tertiary: '#64748B', // Darker slate
      accent: '#4F46E5', // Accent text (same as primary)
    },
    
    // Status colors
    status: {
      success: '#10B981', // Emerald
      warning: '#F59E0B', // Amber
      error: '#EF4444', // Red
      info: '#3B82F6', // Blue
    },
    
    // Gradient colors for Apple-like effects
    gradients: {
      primary: 'linear-gradient(90deg, #4F46E5, #10B981)', // Indigo to emerald
      secondary: 'linear-gradient(90deg, #F59E0B, #EF4444)', // Amber to red
      glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
    },
  },
  
  // Typography inspired by Apple's clean fonts
  typography: {
    fontFamily: {
      primary: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      secondary: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      mono: "'SF Mono', SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    },
    fontSizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      md: '1rem',       // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem',  // 60px
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeights: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
    letterSpacings: {
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
    },
  },
  
  // Spacing system inspired by Apple's consistent spacing
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
    '4xl': '6rem',    // 96px
  },
  
  // Border radius inspired by Apple's rounded corners
  borderRadius: {
    sm: '0.25rem',    // 4px
    md: '0.5rem',     // 8px
    lg: '1rem',       // 16px
    xl: '1.5rem',     // 24px
    full: '9999px',   // Fully rounded
  },
  
  // Shadows inspired by Apple's subtle shadows and NVIDIA's card effects
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.15)',
    '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
    glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  },
  
  // Breakpoints for responsive design
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Transitions inspired by Apple's smooth animations
  transitions: {
    default: 'all 0.2s ease',
    fast: 'all 0.1s ease',
    slow: 'all 0.3s ease',
    bounce: 'all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
  },
  
  // Z-index scale
  zIndices: {
    base: 0,
    elevated: 1,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    modal: 1300,
    popover: 1400,
    tooltip: 1500,
  },
};

export default theme; 
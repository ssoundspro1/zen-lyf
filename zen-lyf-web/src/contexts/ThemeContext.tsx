import React, { createContext, useContext, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyles from '../styles/GlobalStyles';

// Create a context for the theme
const ThemeContext = createContext(theme);

// Custom hook to use the theme
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider; 
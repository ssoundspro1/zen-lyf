import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  /* Import SF Pro fonts (Apple's system font) */
  @import url('https://fonts.cdnfonts.com/css/sf-pro-display');
  
  /* CSS Variables from theme */
  :root {
    /* Colors */
    --primary: ${theme.colors.primary};
    --secondary: ${theme.colors.secondary};
    --tertiary: ${theme.colors.tertiary};
    
    /* Background colors */
    --background: ${theme.colors.background.primary};
    --background-secondary: ${theme.colors.background.secondary};
    --background-card: ${theme.colors.background.card};
    --background-glass: ${theme.colors.background.glass};
    
    /* Text colors */
    --text-primary: ${theme.colors.text.primary};
    --text-secondary: ${theme.colors.text.secondary};
    --text-tertiary: ${theme.colors.text.tertiary};
    --text-accent: ${theme.colors.text.accent};
    
    /* Status colors */
    --success: ${theme.colors.status.success};
    --warning: ${theme.colors.status.warning};
    --error: ${theme.colors.status.error};
    --info: ${theme.colors.status.info};
    
    /* Gradients */
    --gradient-primary: ${theme.colors.gradients.primary};
    --gradient-secondary: ${theme.colors.gradients.secondary};
    --gradient-glass: ${theme.colors.gradients.glass};
    
    /* Typography */
    --font-family-primary: ${theme.typography.fontFamily.primary};
    --font-family-secondary: ${theme.typography.fontFamily.secondary};
    --font-family-mono: ${theme.typography.fontFamily.mono};
    
    /* Font sizes */
    --font-size-xs: ${theme.typography.fontSizes.xs};
    --font-size-sm: ${theme.typography.fontSizes.sm};
    --font-size-md: ${theme.typography.fontSizes.md};
    --font-size-lg: ${theme.typography.fontSizes.lg};
    --font-size-xl: ${theme.typography.fontSizes.xl};
    --font-size-2xl: ${theme.typography.fontSizes['2xl']};
    --font-size-3xl: ${theme.typography.fontSizes['3xl']};
    --font-size-4xl: ${theme.typography.fontSizes['4xl']};
    --font-size-5xl: ${theme.typography.fontSizes['5xl']};
    --font-size-6xl: ${theme.typography.fontSizes['6xl']};
    
    /* Font weights */
    --font-weight-light: ${theme.typography.fontWeights.light};
    --font-weight-regular: ${theme.typography.fontWeights.regular};
    --font-weight-medium: ${theme.typography.fontWeights.medium};
    --font-weight-semibold: ${theme.typography.fontWeights.semibold};
    --font-weight-bold: ${theme.typography.fontWeights.bold};
    
    /* Line heights */
    --line-height-tight: ${theme.typography.lineHeights.tight};
    --line-height-normal: ${theme.typography.lineHeights.normal};
    --line-height-relaxed: ${theme.typography.lineHeights.relaxed};
    
    /* Letter spacings */
    --letter-spacing-tight: ${theme.typography.letterSpacings.tight};
    --letter-spacing-normal: ${theme.typography.letterSpacings.normal};
    --letter-spacing-wide: ${theme.typography.letterSpacings.wide};
    
    /* Spacing */
    --spacing-xs: ${theme.spacing.xs};
    --spacing-sm: ${theme.spacing.sm};
    --spacing-md: ${theme.spacing.md};
    --spacing-lg: ${theme.spacing.lg};
    --spacing-xl: ${theme.spacing.xl};
    --spacing-2xl: ${theme.spacing['2xl']};
    --spacing-3xl: ${theme.spacing['3xl']};
    --spacing-4xl: ${theme.spacing['4xl']};
    
    /* Border radius */
    --radius-sm: ${theme.borderRadius.sm};
    --radius-md: ${theme.borderRadius.md};
    --radius-lg: ${theme.borderRadius.lg};
    --radius-xl: ${theme.borderRadius.xl};
    --radius-full: ${theme.borderRadius.full};
    
    /* Shadows */
    --shadow-sm: ${theme.shadows.sm};
    --shadow-md: ${theme.shadows.md};
    --shadow-lg: ${theme.shadows.lg};
    --shadow-xl: ${theme.shadows.xl};
    --shadow-2xl: ${theme.shadows['2xl']};
    --shadow-inner: ${theme.shadows.inner};
    --shadow-glass: ${theme.shadows.glass};
    
    /* Transitions */
    --transition-default: ${theme.transitions.default};
    --transition-fast: ${theme.transitions.fast};
    --transition-slow: ${theme.transitions.slow};
    --transition-bounce: ${theme.transitions.bounce};
    
    /* Z-indices */
    --z-base: ${theme.zIndices.base};
    --z-elevated: ${theme.zIndices.elevated};
    --z-dropdown: ${theme.zIndices.dropdown};
    --z-sticky: ${theme.zIndices.sticky};
    --z-fixed: ${theme.zIndices.fixed};
    --z-modal: ${theme.zIndices.modal};
    --z-popover: ${theme.zIndices.popover};
    --z-tooltip: ${theme.zIndices.tooltip};
  }
  
  /* Base styles */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: var(--font-family-primary);
    background-color: var(--background);
    color: var(--text-primary);
    line-height: var(--line-height-normal);
    font-weight: var(--font-weight-regular);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
  
  /* Apple-inspired scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: var(--radius-full);
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: var(--radius-full);
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  
  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-tight);
    margin-bottom: var(--spacing-md);
  }
  
  h1 {
    font-size: var(--font-size-4xl);
    letter-spacing: var(--letter-spacing-tight);
  }
  
  h2 {
    font-size: var(--font-size-3xl);
  }
  
  h3 {
    font-size: var(--font-size-2xl);
  }
  
  h4 {
    font-size: var(--font-size-xl);
  }
  
  h5 {
    font-size: var(--font-size-lg);
  }
  
  h6 {
    font-size: var(--font-size-md);
  }
  
  p {
    margin-bottom: var(--spacing-md);
  }
  
  a {
    color: var(--primary);
    text-decoration: none;
    transition: var(--transition-default);
  }
  
  a:hover {
    color: var(--secondary);
  }
  
  /* Buttons */
  button {
    font-family: var(--font-family-primary);
    cursor: pointer;
  }
  
  /* Images */
  img {
    max-width: 100%;
    height: auto;
  }
  
  /* Forms */
  input, textarea, select {
    font-family: var(--font-family-secondary);
    font-size: var(--font-size-md);
  }
  
  /* Utilities */
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  
  /* Animation keyframes */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  
  @keyframes shimmer {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
  }
  
  /* Lusion-inspired gradient text */
  .gradient-text {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  
  /* NVIDIA-inspired card */
  .nvidia-card {
    background: var(--background-card);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-glass);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: var(--transition-default);
  }
  
  .nvidia-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
  }
  
  /* Apple-inspired glass morphism */
  .apple-glass {
    background: var(--background-glass);
    backdrop-filter: blur(16px);
    border-radius: var(--radius-lg);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export default GlobalStyles; 
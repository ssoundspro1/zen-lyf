import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const StyledButton = styled(motion.button)<{
  primary?: boolean;
  size?: string;
  fullWidth?: boolean;
}>`
  /* Glass-morphic styling */
  background: ${props => props.primary 
    ? 'rgba(79, 70, 229, 0.25)' 
    : 'rgba(255, 255, 255, 0.15)'};
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  
  /* Size variants */
  padding: ${props => {
    switch(props.size) {
      case 'small': return '8px 16px';
      case 'large': return '16px 32px';
      default: return '12px 24px';
    }
  }};
  
  /* Typography */
  color: white;
  font-weight: 600;
  font-family: 'Inter', system-ui, sans-serif;
  font-size: ${props => {
    switch(props.size) {
      case 'small': return '0.875rem';
      case 'large': return '1.125rem';
      default: return '1rem';
    }
  }};
  
  /* Layout */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  
  /* Interactive states */
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.6 : 1};
  
  &:hover:not(:disabled) {
    background: ${props => props.primary 
      ? 'rgba(79, 70, 229, 0.35)' 
      : 'rgba(255, 255, 255, 0.25)'};
  }
  
  &:active:not(:disabled) {
    transform: translateY(1px);
  }
`;

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  label,
  onClick,
  disabled = false,
  icon,
  fullWidth = false,
  ...props
}) => {
  return (
    <StyledButton
      primary={primary}
      size={size}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...props}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {label}
    </StyledButton>
  );
};

export default Button; 
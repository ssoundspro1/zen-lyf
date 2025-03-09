import React from 'react';

// Use any type as a temporary workaround
type IconType = any;

interface IconWrapperProps {
  icon: IconType;
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  [x: string]: any; // Allow any additional props
}

/**
 * IconWrapper component solves TypeScript compatibility issues with react-icons
 * 
 * Usage:
 * <IconWrapper icon={FaIcon} size={24} color="red" />
 * 
 * Instead of:
 * <FaIcon size={24} color="red" />
 */
const IconWrapper: React.FC<IconWrapperProps> = ({ 
  icon: Icon, 
  size = 20, 
  color, 
  className, 
  style,
  ...rest
}) => {
  // Prevent render errors by ensuring Icon is valid
  if (!Icon) {
    console.warn('IconWrapper: Icon component is undefined');
    return null;
  }

  return (
    <span className={className} style={style}>
      {React.createElement(Icon, { 
        size, 
        color,
        ...rest
      })}
    </span>
  );
};

export default IconWrapper; 
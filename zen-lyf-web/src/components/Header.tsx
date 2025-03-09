import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  padding: var(--spacing-md) var(--spacing-lg);
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: var(--spacing-md) var(--spacing-xl);
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  
  span {
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Nav = styled.nav`
  display: none;
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    gap: var(--spacing-lg);
  }
`;

const NavLink = styled(Link)<{ active?: boolean }>`
  color: ${props => props.active ? 'var(--primary)' : 'var(--text-secondary)'};
  font-weight: ${props => props.active ? '600' : '400'};
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--primary);
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: var(--spacing-md);
`;

// Common button styles
const buttonStyles = (props: { primary?: boolean }) => `
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  
  ${props.primary ? `
    background: var(--primary);
    color: white;
    
    &:hover {
      background: #4338ca;
      color: white;
    }
  ` : `
    background: transparent;
    color: var(--text-primary);
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    &:hover {
      background: rgba(255, 255, 255, 0.05);
      color: var(--text-primary);
    }
  `}
`;

// Button component for links
const LinkButton = styled(Link)<{ primary?: boolean }>`
  ${props => buttonStyles(props)}
`;

// Button component for regular buttons
const RegularButton = styled.button<{ primary?: boolean }>`
  ${props => buttonStyles(props)}
  border: ${props => props.primary ? 'none' : '1px solid rgba(255, 255, 255, 0.1)'};
`;

// Combined Button component that renders either LinkButton or RegularButton
const Button = ({ as, to, ...props }: { as?: string; to?: string; [key: string]: any }) => {
  if (as === "button") {
    return <RegularButton {...props} />;
  }
  return <LinkButton to={to || "/"} {...props} />;
};

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--background);
  z-index: 99;
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
`;

const MobileNavLink = styled(Link)<{ active?: boolean }>`
  color: ${props => props.active ? 'var(--primary)' : 'var(--text-primary)'};
  font-size: 1.25rem;
  font-weight: ${props => props.active ? '600' : '400'};
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const CloseButton = styled.button`
  position: absolute;
  top: var(--spacing-lg);
  right: var(--spacing-lg);
  background: transparent;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
`;

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { currentUser, signOut } = useAuth();
  
  const isActive = (path: string) => location.pathname === path;
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">
          <span>ZEN-LYF</span> AI
        </Logo>
        
        <Nav>
          <NavLink to="/" active={isActive('/')}>Home</NavLink>
          <NavLink to="/features" active={isActive('/features')}>Features</NavLink>
          <NavLink to="/pricing" active={isActive('/pricing')}>Pricing</NavLink>
          <NavLink to="/wearable-demo" active={isActive('/wearable-demo')}>Wearable Device Demo</NavLink>
          <NavLink to="/medical-records/access" active={isActive('/medical-records/access')}>Medical Records</NavLink>
          <NavLink to="/about" active={isActive('/about')}>About</NavLink>
          <NavLink to="/contact" active={isActive('/contact')}>Contact</NavLink>
        </Nav>
        
        <AuthButtons>
          {currentUser ? (
            <>
              <Button to="/dashboard">Dashboard</Button>
              <Button as="button" onClick={handleSignOut}>Sign Out</Button>
            </>
          ) : (
            <>
              <Button to="/login">Log In</Button>
              <Button to="/signup" primary>Sign Up</Button>
            </>
          )}
        </AuthButtons>
        
        <MobileMenuButton onClick={toggleMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </MobileMenuButton>
      </HeaderContent>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
          >
            <CloseButton onClick={closeMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </CloseButton>
            
            <Logo to="/" onClick={closeMobileMenu}>
              <span>ZEN-LYF</span> AI
            </Logo>
            
            <MobileNav>
              <MobileNavLink to="/" active={isActive('/')} onClick={closeMobileMenu}>Home</MobileNavLink>
              <MobileNavLink to="/features" active={isActive('/features')} onClick={closeMobileMenu}>Features</MobileNavLink>
              <MobileNavLink to="/pricing" active={isActive('/pricing')} onClick={closeMobileMenu}>Pricing</MobileNavLink>
              <MobileNavLink to="/wearable-demo" active={isActive('/wearable-demo')} onClick={closeMobileMenu}>Wearable Device Demo</MobileNavLink>
              <MobileNavLink to="/medical-records/access" active={isActive('/medical-records/access')} onClick={closeMobileMenu}>Medical Records</MobileNavLink>
              <MobileNavLink to="/about" active={isActive('/about')} onClick={closeMobileMenu}>About</MobileNavLink>
              <MobileNavLink to="/contact" active={isActive('/contact')} onClick={closeMobileMenu}>Contact</MobileNavLink>
            </MobileNav>
            
            <div style={{ marginTop: 'auto' }}>
              {currentUser ? (
                <>
                  <Button to="/dashboard" onClick={closeMobileMenu} style={{ width: '100%', marginBottom: 'var(--spacing-md)' }}>Dashboard</Button>
                  <Button as="button" onClick={() => { handleSignOut(); closeMobileMenu(); }} style={{ width: '100%' }}>Sign Out</Button>
                </>
              ) : (
                <>
                  <Button to="/login" onClick={closeMobileMenu} style={{ width: '100%', marginBottom: 'var(--spacing-md)' }}>Log In</Button>
                  <Button to="/signup" primary onClick={closeMobileMenu} style={{ width: '100%' }}>Sign Up</Button>
                </>
              )}
            </div>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header; 
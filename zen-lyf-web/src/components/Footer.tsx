import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: rgba(15, 23, 42, 0.9);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: var(--spacing-xl) var(--spacing-lg);
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: var(--spacing-xl);
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xl);
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const FooterLogo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-sm);
  
  span {
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const FooterDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
`;

const SocialLink = styled.a`
  color: var(--text-secondary);
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--primary);
  }
`;

const FooterHeading = styled.h4`
  color: var(--text-primary);
  font-size: 1.125rem;
  margin-bottom: var(--spacing-md);
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

const FooterLink = styled(Link)`
  color: var(--text-secondary);
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--primary);
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: var(--spacing-xl) auto 0;
  padding-top: var(--spacing-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Copyright = styled.p`
  color: var(--text-secondary);
  font-size: 0.875rem;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
`;

const LegalLink = styled(Link)`
  color: var(--text-secondary);
  font-size: 0.875rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--primary);
  }
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo to="/">
            <span>ZEN-LYF</span> AI
          </FooterLogo>
          <FooterDescription>
            Personalized, AI-driven post-operative and wellness care. Integrating wearable tech, automated AI medical analysis, and continuous wellness guidance.
          </FooterDescription>
          <SocialLinks>
            <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </SocialLink>
            <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </SocialLink>
            <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </SocialLink>
            <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </SocialLink>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>Solutions</FooterHeading>
          <FooterLinks>
            <FooterLink to="/patient-solutions">Patient Solutions</FooterLink>
            <FooterLink to="/hospital-solutions">Hospital Solutions</FooterLink>
            <FooterLink to="/wearable-demo">Wearable Integration</FooterLink>
            <FooterLink to="/medical-record-analysis">Medical Record Analysis</FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>Company</FooterHeading>
          <FooterLinks>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/team">Our Team</FooterLink>
            <FooterLink to="/careers">Careers</FooterLink>
            <FooterLink to="/contact">Contact Us</FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>Resources</FooterHeading>
          <FooterLinks>
            <FooterLink to="/blog">Blog</FooterLink>
            <FooterLink to="/documentation">Documentation</FooterLink>
            <FooterLink to="/guides">Guides</FooterLink>
            <FooterLink to="/api">API</FooterLink>
          </FooterLinks>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <Copyright>
          &copy; {currentYear} ZEN-LYF AI. All rights reserved.
        </Copyright>
        
        <LegalLinks>
          <LegalLink to="/terms">Terms of Service</LegalLink>
          <LegalLink to="/privacy">Privacy Policy</LegalLink>
          <LegalLink to="/cookie-policy">Cookie Policy</LegalLink>
        </LegalLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer; 
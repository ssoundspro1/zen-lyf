import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  padding: var(--spacing-lg);
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: var(--spacing-xl);
  }
`;

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  );
};

export default MainLayout; 
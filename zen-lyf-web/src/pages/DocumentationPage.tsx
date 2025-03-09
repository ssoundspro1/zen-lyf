import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBook, FaClipboardList, FaCode, FaLaptopCode, FaServer, FaMobileAlt, FaDatabase } from 'react-icons/fa';
import IconWrapper from 'components/IconWrapper';

const DocumentationPage: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState('overview');

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Documentation sections
  const sections = [
    {
      id: 'overview',
      icon: FaBook,
      title: 'Overview',
      content: `
        # ZEN-LYF Documentation

        Welcome to the ZEN-LYF documentation. This documentation provides detailed information about using the ZEN-LYF platform, from basic concepts to advanced features.

        ## What is ZEN-LYF?

        ZEN-LYF is an AI-powered health monitoring and analytics platform that integrates with wearable devices to provide personalized health insights. The platform helps users track their health metrics, analyze medical reports, and receive AI-generated health recommendations.

        ## Key Features

        - **Real-time Health Monitoring**: Connect your wearable devices for continuous health tracking
        - **Medical Report Analysis**: Upload medical reports for AI-powered analysis and insights
        - **Personalized Health Recommendations**: Receive tailored health advice based on your data
        - **Emergency Detection**: Set up alerts for irregular health patterns
        - **Secure Data Management**: Industry-leading security for your sensitive health information
      `
    },
    {
      id: 'getting-started',
      icon: FaClipboardList,
      title: 'Getting Started',
      content: `
        # Getting Started with ZEN-LYF

        This guide will help you set up your ZEN-LYF account and connect your first device.

        ## Creating an Account

        1. Go to the [Sign Up page](/signup)
        2. Enter your email address and create a password
        3. Verify your email address by clicking the link in the verification email
        4. Complete your profile information
        5. Review and accept the Terms of Service and Privacy Policy

        ## Dashboard Overview

        After logging in, you'll be taken to your dashboard, which displays:

        - Key health metrics
        - Connected devices
        - Recent activity
        - Health insights
        - Recommended actions

        ## Connecting Your First Device

        1. Navigate to the Devices section in your dashboard
        2. Click "Add New Device"
        3. Select your device type from the list
        4. Follow the device-specific connection instructions
        5. Once connected, your device data will begin syncing with your ZEN-LYF account
      `
    },
    {
      id: 'web-application',
      icon: FaLaptopCode,
      title: 'Web Application',
      content: `
        # ZEN-LYF Web Application

        The ZEN-LYF web application provides a comprehensive interface for managing your health data and account.

        ## Dashboard

        The dashboard provides a quick overview of your health status and recent activity.

        ## Health Metrics

        View and analyze your health metrics over time, including:
        - Heart rate
        - Sleep quality
        - Activity levels
        - Stress levels
        - Blood oxygen
        - And more

        ## Medical Reports

        Upload and manage your medical reports, including:
        - Lab results
        - Doctor's notes
        - Imaging reports
        - Medication lists

        ## Settings

        Manage your account settings, including:
        - Profile information
        - Notification preferences
        - Privacy settings
        - Connected devices
        - Data sharing preferences
      `
    },
    {
      id: 'mobile-app',
      icon: FaMobileAlt,
      title: 'Mobile App',
      content: `
        # ZEN-LYF Mobile Application

        The ZEN-LYF mobile app extends the functionality of the web platform to your smartphone.

        ## Installation

        1. Download the app from the [App Store](https://apple.com) or [Google Play](https://play.google.com)
        2. Sign in with your existing ZEN-LYF account
        3. Follow the setup instructions

        ## Features

        The mobile app includes all the features of the web application, plus:

        - Real-time notifications
        - Location-based health insights
        - Offline data sync
        - Camera integration for capturing medical reports
        - Voice command support
        - Integration with health platforms (Apple Health, Google Fit)

        ## Troubleshooting

        If you encounter issues with the mobile app:
        
        1. Ensure your app is updated to the latest version
        2. Verify your internet connection
        3. Check device permissions
        4. Try restarting the app
        5. Contact support if issues persist
      `
    },
    {
      id: 'api-reference',
      icon: FaCode,
      title: 'API Reference',
      content: `
        # ZEN-LYF API Reference

        The ZEN-LYF API allows developers to integrate ZEN-LYF functionality into their own applications.

        ## Authentication

        All API requests require authentication using an API key or OAuth 2.0.

        \`\`\`
        Authorization: Bearer YOUR_ACCESS_TOKEN
        \`\`\`

        ## Base URL

        \`\`\`
        https://api.zen-lyf.com/v1
        \`\`\`

        ## User Endpoints

        - \`GET /users\` - List users
        - \`GET /users/{id}\` - Get user details
        - \`POST /users\` - Create user
        - \`PUT /users/{id}\` - Update user
        - \`DELETE /users/{id}\` - Delete user

        ## Health Data Endpoints

        - \`GET /health-data\` - List health data
        - \`GET /health-data/{id}\` - Get health data details
        - \`POST /health-data\` - Create health data
        - \`PUT /health-data/{id}\` - Update health data
        - \`DELETE /health-data/{id}\` - Delete health data

        ## Device Endpoints

        - \`GET /devices\` - List devices
        - \`GET /devices/{id}\` - Get device details
        - \`POST /devices\` - Register device
        - \`DELETE /devices/{id}\` - Unregister device
      `
    },
    {
      id: 'backend-services',
      icon: FaServer,
      title: 'Backend Services',
      content: `
        # ZEN-LYF Backend Services

        This section describes the backend services that power the ZEN-LYF platform.

        ## Architecture Overview

        ZEN-LYF uses a microservices architecture with the following components:

        - **User Service**: Manages user accounts and authentication
        - **Data Service**: Handles health data storage and retrieval
        - **Analysis Service**: Processes health data for insights
        - **Notification Service**: Manages alerts and notifications
        - **Integration Service**: Interfaces with third-party devices and services

        ## Technologies Used

        - Node.js and Express for API services
        - Firebase for authentication and real-time functionality
        - MongoDB for scalable data storage
        - Redis for caching
        - TensorFlow for AI/ML models
        - Docker and Kubernetes for deployment
        - AWS Cloud for infrastructure

        ## Deployment

        Backend services are deployed using containerization and orchestration:

        1. Services are packaged as Docker containers
        2. Containers are orchestrated with Kubernetes
        3. Auto-scaling is configured based on load
        4. Blue-green deployment strategy ensures zero downtime
      `
    },
    {
      id: 'database',
      icon: FaDatabase,
      title: 'Database',
      content: `
        # ZEN-LYF Database Structure

        This section describes the database structure used in the ZEN-LYF platform.

        ## Data Models

        ### User Model

        \`\`\`json
        {
          "id": "string",
          "email": "string",
          "name": "string",
          "dateOfBirth": "date",
          "gender": "string",
          "height": "number",
          "weight": "number",
          "medicalConditions": ["string"],
          "medications": ["string"],
          "createdAt": "timestamp",
          "updatedAt": "timestamp"
        }
        \`\`\`

        ### Device Model

        \`\`\`json
        {
          "id": "string",
          "userId": "string",
          "type": "string",
          "manufacturer": "string",
          "model": "string",
          "serialNumber": "string",
          "lastSyncedAt": "timestamp",
          "createdAt": "timestamp",
          "updatedAt": "timestamp"
        }
        \`\`\`

        ### Health Data Model

        \`\`\`json
        {
          "id": "string",
          "userId": "string",
          "deviceId": "string",
          "type": "string",
          "value": "number",
          "unit": "string",
          "timestamp": "timestamp",
          "createdAt": "timestamp"
        }
        \`\`\`

        ### Medical Report Model

        \`\`\`json
        {
          "id": "string",
          "userId": "string",
          "type": "string",
          "filename": "string",
          "fileUrl": "string",
          "analysisStatus": "string",
          "analysisResults": "object",
          "createdAt": "timestamp",
          "updatedAt": "timestamp"
        }
        \`\`\`
      `
    }
  ];

  return (
    <PageContainer>
      <Header
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <HeaderContent>
          <Heading>Documentation</Heading>
          <Subheading>Comprehensive guides and references for the ZEN-LYF platform</Subheading>
        </HeaderContent>
      </Header>

      <ContentContainer>
        <Sidebar>
          <SidebarTitle>Documentation</SidebarTitle>
          <NavList>
            {sections.map(section => (
              <NavItem 
                key={section.id}
                active={activeSectionId === section.id}
                onClick={() => setActiveSectionId(section.id)}
              >
                <NavIconWrapper>
                  <IconWrapper icon={section.icon} size={18} />
                </NavIconWrapper>
                <span>{section.title}</span>
              </NavItem>
            ))}
          </NavList>
          <SupportLinks>
            <SupportLink to="/support">
              Need Help? Contact Support
            </SupportLink>
            <SupportLink to="/api-documentation">
              API Documentation
            </SupportLink>
          </SupportLinks>
        </Sidebar>
        
        <MainContent
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {sections.map(section => (
            <Section 
              key={section.id}
              active={activeSectionId === section.id}
            >
              <SectionContent dangerouslySetInnerHTML={{ __html: formatMarkdown(section.content) }} />
            </Section>
          ))}
        </MainContent>
      </ContentContainer>
    </PageContainer>
  );
};

// Helper function to format markdown (simplified version)
const formatMarkdown = (markdown: string): string => {
  let html = markdown;
  
  // Format headings
  html = html.replace(/^# (.*$)/gm, '<h1>$1</h1>');
  html = html.replace(/^## (.*$)/gm, '<h2>$1</h2>');
  html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>');
  
  // Format lists
  html = html.replace(/^\d+\. (.*$)/gm, '<li>$1</li>');
  html = html.replace(/^- (.*$)/gm, '<li>$1</li>');
  
  // Add paragraph tags
  html = html.replace(/^(?!<h|<li|<ul|<ol|<p|<pre|<blockquote)(.*$)/gm, '<p>$1</p>');
  
  // Wrap lists
  html = html.replace(/<li>(.*)<\/li>\n<li>/g, '<li>$1</li>\n<li>');
  html = html.replace(/<li>(.*)<\/li>\n(?!<li>)/g, '<li>$1</li></ul>\n');
  html = html.replace(/(?<!<\/ul>\n)<li>/g, '<ul><li>');
  
  // Format code blocks
  html = html.replace(/\`\`\`([\s\S]*?)\`\`\`/g, '<pre><code>$1</code></pre>');
  
  // Format inline code
  html = html.replace(/\`([^\`]+)\`/g, '<code>$1</code>');
  
  // Format links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
  
  return html;
};

// Styled Components
const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--bg-primary);
  color: var(--text-primary);
`;

const Header = styled(motion.div)`
  background: linear-gradient(135deg, var(--primary) 0%, #3a0ca3 100%);
  padding: 3rem var(--spacing-xl);
  text-align: center;
`;

const HeaderContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: var(--spacing-sm);
  color: white;
  font-weight: 700;
`;

const Subheading = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 300;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 200px);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.aside`
  background: var(--bg-card);
  padding: var(--spacing-lg);
  border-right: 1px solid var(--border-color);
  
  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid var(--border-color);
  }
`;

const SidebarTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: var(--spacing-lg);
  color: var(--text-title);
  font-weight: 600;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li<{ active: boolean }>`
  padding: 12px 15px;
  border-radius: var(--radius-md);
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: ${props => props.active ? '600' : '400'};
  background: ${props => props.active ? 'var(--primary-light)' : 'transparent'};
  color: ${props => props.active ? 'var(--primary)' : 'var(--text-primary)'};
  
  &:hover {
    background: ${props => props.active ? 'var(--primary-light)' : 'var(--bg-hover)'};
  }
`;

const NavIconWrapper = styled.span`
  margin-right: 10px;
  display: inline-flex;
  align-items: center;
`;

const SupportLinks = styled.div`
  margin-top: var(--spacing-xl);
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

const SupportLink = styled(Link)`
  color: var(--primary);
  text-decoration: none;
  font-size: 0.9rem;
  padding: 8px 0;
  
  &:hover {
    text-decoration: underline;
  }
`;

const MainContent = styled(motion.div)`
  padding: var(--spacing-xl);
  background: var(--bg-primary);
`;

const Section = styled.div<{ active: boolean }>`
  display: ${props => props.active ? 'block' : 'none'};
`;

const SectionContent = styled.div`
  /* Heading styles */
  h1 {
    font-size: 2.25rem;
    margin-bottom: var(--spacing-lg);
    color: var(--text-title);
    font-weight: 700;
  }
  
  h2 {
    font-size: 1.75rem;
    margin: var(--spacing-xl) 0 var(--spacing-md);
    color: var(--text-title);
    font-weight: 600;
  }
  
  h3 {
    font-size: 1.35rem;
    margin: var(--spacing-lg) 0 var(--spacing-sm);
    color: var(--text-title);
    font-weight: 600;
  }
  
  /* Paragraph styles */
  p {
    margin-bottom: var(--spacing-md);
    line-height: 1.6;
    color: var(--text-primary);
  }
  
  /* List styles */
  ul {
    margin-bottom: var(--spacing-md);
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 8px;
    line-height: 1.5;
  }
  
  /* Code styles */
  code {
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    background: var(--bg-code);
    padding: 2px 4px;
    border-radius: 3px;
    font-size: 0.9em;
    color: var(--text-code);
  }
  
  pre {
    background: var(--bg-code);
    padding: var(--spacing-md);
    border-radius: var(--radius-md);
    overflow-x: auto;
    margin: var(--spacing-md) 0;
  }
  
  pre code {
    background: transparent;
    padding: 0;
    border-radius: 0;
  }
  
  /* Link styles */
  a {
    color: var(--primary);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default DocumentationPage; 
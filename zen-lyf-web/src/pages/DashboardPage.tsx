import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PageContainer = styled.div`
  padding: var(--spacing-xl) var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: var(--spacing-2xl) var(--spacing-xl);
  }
`;

const WelcomeSection = styled.section`
  margin-bottom: var(--spacing-xl);
`;

const WelcomeTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: var(--spacing-md);
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
  
  span {
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const WelcomeSubtitle = styled.p`
  color: var(--text-secondary);
  font-size: 1.125rem;
  margin-bottom: var(--spacing-lg);
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 2fr 1fr;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  padding: var(--spacing-xl);
  overflow: hidden;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
`;

const CardTitle = styled.h2`
  font-size: 1.25rem;
  color: var(--text-primary);
`;

const CardAction = styled.button`
  background: transparent;
  border: none;
  color: var(--primary);
  font-size: 0.875rem;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Metric = styled.div`
  text-align: center;
`;

const MetricValue = styled.div`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
  color: var(--primary);
`;

const MetricLabel = styled.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
`;

const MedicalRecordsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const MedicalRecord = styled(Link)`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.2s ease;
  text-decoration: none;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

const RecordIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  background: rgba(79, 70, 229, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    color: var(--primary);
  }
`;

const RecordInfo = styled.div`
  flex: 1;
`;

const RecordTitle = styled.div`
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 4px;
`;

const RecordDate = styled.div`
  font-size: 0.75rem;
  color: var(--text-secondary);
`;

const UploadButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
  background: var(--primary);
  color: white;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease;
  text-decoration: none;
  margin-top: var(--spacing-md);
  
  &:hover {
    background: #4338ca;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: var(--spacing-lg);
`;

const Tab = styled.button<{ active: boolean }>`
  padding: var(--spacing-md) var(--spacing-lg);
  background: transparent;
  border: none;
  color: ${props => props.active ? 'var(--primary)' : 'var(--text-secondary)'};
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--primary);
    opacity: ${props => props.active ? '1' : '0'};
    transition: opacity 0.2s ease;
  }
  
  &:hover {
    color: var(--primary);
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: var(--spacing-xl) 0;
  color: var(--text-secondary);
`;

const DashboardPage: React.FC = () => {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock data for demonstration
  const healthMetrics = {
    steps: 8432,
    heartRate: 72,
    sleep: 7.5,
    bloodPressure: '120/80',
    bloodOxygen: 98,
    weight: 70.5,
  };
  
  const medicalRecords = [
    {
      id: '1',
      title: 'X-Ray Results',
      date: '2023-05-15',
      type: 'xray',
    },
    {
      id: '2',
      title: 'Blood Test Results',
      date: '2023-04-22',
      type: 'lab_result',
    },
    {
      id: '3',
      title: 'Prescription',
      date: '2023-03-10',
      type: 'prescription',
    },
  ];
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <>
            <Card
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CardHeader>
                <CardTitle>Health Metrics</CardTitle>
                <CardAction>View All</CardAction>
              </CardHeader>
              
              <MetricsGrid>
                <Metric>
                  <MetricValue>{healthMetrics.steps}</MetricValue>
                  <MetricLabel>Steps Today</MetricLabel>
                </Metric>
                
                <Metric>
                  <MetricValue>{healthMetrics.heartRate}</MetricValue>
                  <MetricLabel>Heart Rate (bpm)</MetricLabel>
                </Metric>
                
                <Metric>
                  <MetricValue>{healthMetrics.sleep}h</MetricValue>
                  <MetricLabel>Sleep Duration</MetricLabel>
                </Metric>
                
                <Metric>
                  <MetricValue>{healthMetrics.bloodPressure}</MetricValue>
                  <MetricLabel>Blood Pressure</MetricLabel>
                </Metric>
                
                <Metric>
                  <MetricValue>{healthMetrics.bloodOxygen}%</MetricValue>
                  <MetricLabel>Blood Oxygen</MetricLabel>
                </Metric>
                
                <Metric>
                  <MetricValue>{healthMetrics.weight} kg</MetricValue>
                  <MetricLabel>Weight</MetricLabel>
                </Metric>
              </MetricsGrid>
            </Card>
            
            <Card
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardHeader>
                <CardTitle>Recent Medical Records</CardTitle>
                <CardAction>View All</CardAction>
              </CardHeader>
              
              <MedicalRecordsList>
                {medicalRecords.map(record => (
                  <MedicalRecord key={record.id} to={`/medical-records/${record.id}`}>
                    <RecordIcon>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                    </RecordIcon>
                    <RecordInfo>
                      <RecordTitle>{record.title}</RecordTitle>
                      <RecordDate>{record.date}</RecordDate>
                    </RecordInfo>
                  </MedicalRecord>
                ))}
              </MedicalRecordsList>
              
              <UploadButton to="/medical-records/upload">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
                Upload Medical Record
              </UploadButton>
            </Card>
          </>
        );
      
      case 'health':
        return (
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CardHeader>
              <CardTitle>Health Metrics</CardTitle>
            </CardHeader>
            
            <EmptyState>
              Detailed health metrics view coming soon.
            </EmptyState>
          </Card>
        );
      
      case 'records':
        return (
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CardHeader>
              <CardTitle>Medical Records</CardTitle>
            </CardHeader>
            
            <EmptyState>
              Detailed medical records view coming soon.
            </EmptyState>
          </Card>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <PageContainer>
      <WelcomeSection>
        <WelcomeTitle>Welcome back, <span>{currentUser?.displayName || 'User'}</span></WelcomeTitle>
        <WelcomeSubtitle>
          Here's an overview of your health metrics and medical records.
        </WelcomeSubtitle>
      </WelcomeSection>
      
      <TabsContainer>
        <Tab 
          active={activeTab === 'overview'} 
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </Tab>
        <Tab 
          active={activeTab === 'health'} 
          onClick={() => setActiveTab('health')}
        >
          Health Metrics
        </Tab>
        <Tab 
          active={activeTab === 'records'} 
          onClick={() => setActiveTab('records')}
        >
          Medical Records
        </Tab>
      </TabsContainer>
      
      <DashboardGrid>
        <MainContent>
          {renderTabContent()}
        </MainContent>
        
        <Sidebar>
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <CardHeader>
              <CardTitle>Upcoming Reminders</CardTitle>
            </CardHeader>
            
            <EmptyState>
              No upcoming reminders.
            </EmptyState>
          </Card>
          
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <CardHeader>
              <CardTitle>Wellness Tips</CardTitle>
            </CardHeader>
            
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.875rem' }}>
              Remember to stay hydrated throughout the day. Aim for at least 8 glasses of water daily to maintain optimal health.
            </p>
          </Card>
        </Sidebar>
      </DashboardGrid>
    </PageContainer>
  );
};

export default DashboardPage; 
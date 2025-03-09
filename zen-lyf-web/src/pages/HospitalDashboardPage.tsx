import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiUsers, FiActivity, FiAlertCircle, FiCalendar, FiSearch, FiBell, FiSettings, FiLogOut } from 'react-icons/fi';
import IconWrapper from 'components/IconWrapper';

// Mock data for demo
const mockPatients = [
  { id: 1, name: 'Emma Thompson', age: 45, status: 'Recovering', risk: 'Low', lastCheckin: '2 hours ago', progress: 85 },
  { id: 2, name: 'Robert Johnson', age: 67, status: 'Critical', risk: 'High', lastCheckin: '30 mins ago', progress: 35 },
  { id: 3, name: 'Sophie Williams', age: 32, status: 'Stable', risk: 'Medium', lastCheckin: '1 hour ago', progress: 60 },
  { id: 4, name: 'James Brown', age: 52, status: 'Improving', risk: 'Low', lastCheckin: '3 hours ago', progress: 75 },
  { id: 5, name: 'Olivia Davis', age: 28, status: 'Stable', risk: 'Low', lastCheckin: '45 mins ago', progress: 90 },
];

const mockAlerts = [
  { id: 1, patient: 'Robert Johnson', type: 'Emergency', message: 'Abnormal heart rate detected', time: '30 mins ago' },
  { id: 2, patient: 'Sophie Williams', type: 'Medication', message: 'Missed evening medication', time: '2 hours ago' },
  { id: 3, patient: 'James Brown', type: 'Check-in', message: 'Missed scheduled check-in', time: '4 hours ago' },
];

const HospitalDashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('patients');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPatients = mockPatients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardContainer>
      <Sidebar>
        <Logo>ZEN-LYF</Logo>
        <IconWrapper icon={SidebarDivider} />
        <NavItem 
          active={activeTab === 'patients'} 
          onClick={() => setActiveTab('patients')}
          whileHover={{ x: 8 }}
          whileTap={{ scale: 0.95 }}
        >
          <IconWrapper icon={FiUsers} />
          <span>Patients</span>
        </NavItem>
        <NavItem 
          active={activeTab === 'analytics'} 
          onClick={() => setActiveTab('analytics')}
          whileHover={{ x: 8 }}
          whileTap={{ scale: 0.95 }}
        >
          <IconWrapper icon={FiActivity} />
          <span>Analytics</span>
        </NavItem>
        <NavItem 
          active={activeTab === 'alerts'} 
          onClick={() => setActiveTab('alerts')}
          whileHover={{ x: 8 }}
          whileTap={{ scale: 0.95 }}
        >
          <IconWrapper icon={FiAlertCircle} />
          <span>Alerts</span>
          <AlertBadge>3</AlertBadge>
        </NavItem>
        <NavItem 
          active={activeTab === 'appointments'} 
          onClick={() => setActiveTab('appointments')}
          whileHover={{ x: 8 }}
          whileTap={{ scale: 0.95 }}
        >
          <IconWrapper icon={FiCalendar} />
          <span>Appointments</span>
        </NavItem>
        <SidebarFooter>
          <NavItem 
            onClick={() => console.log('Settings clicked')}
            whileHover={{ x: 8 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconWrapper icon={FiSettings} />
            <span>Settings</span>
          </NavItem>
          <NavItem 
            onClick={() => console.log('Logout clicked')}
            whileHover={{ x: 8 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconWrapper icon={FiLogOut} />
            <span>Logout</span>
          </NavItem>
        </SidebarFooter>
      </Sidebar>

      <MainContent>
        <Header>
          <SearchContainer>
            <SearchIcon><IconWrapper icon={FiSearch} /></SearchIcon>
            <SearchInput 
              placeholder="Search patients..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchContainer>
          <HeaderActions>
            <NotificationBell>
              <IconWrapper icon={FiBell} />
              <NotificationDot />
            </NotificationBell>
            <AdminProfile>
              <AdminAvatar>JD</AdminAvatar>
              <div>
                <AdminName>Dr. Jane Doe</AdminName>
                <AdminRole>Administrator</AdminRole>
              </div>
            </AdminProfile>
          </HeaderActions>
        </Header>

        <ContentArea>
          {activeTab === 'patients' && (
            <TabContent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ContentHeader>
                <ContentTitle>Patient Monitoring</ContentTitle>
                <ContentDescription>
                  Monitor post-operative progress and real-time health data
                </ContentDescription>
              </ContentHeader>

              <StatsRow>
                <StatCard>
                  <StatValue>42</StatValue>
                  <StatLabel>Active Patients</StatLabel>
                </StatCard>
                <StatCard>
                  <StatValue>85%</StatValue>
                  <StatLabel>Recovery Rate</StatLabel>
                </StatCard>
                <StatCard highlight>
                  <StatValue>3</StatValue>
                  <StatLabel>Critical Conditions</StatLabel>
                </StatCard>
                <StatCard>
                  <StatValue>12</StatValue>
                  <StatLabel>New Admissions</StatLabel>
                </StatCard>
              </StatsRow>

              <TableHeader>
                <TableTitle>Patient List</TableTitle>
                <TableControls>
                  <TableFilter>
                    <option value="all">All Patients</option>
                    <option value="critical">Critical</option>
                    <option value="stable">Stable</option>
                    <option value="recovering">Recovering</option>
                  </TableFilter>
                  <TableButton>Add Patient</TableButton>
                </TableControls>
              </TableHeader>

              <Table>
                <thead>
                  <tr>
                    <th>Patient Name</th>
                    <th>Age</th>
                    <th>Status</th>
                    <th>Risk Level</th>
                    <th>Last Check-in</th>
                    <th>Recovery Progress</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPatients.map(patient => (
                    <tr key={patient.id}>
                      <td>
                        <PatientName>{patient.name}</PatientName>
                      </td>
                      <td>{patient.age}</td>
                      <td>
                        <StatusBadge status={patient.status.toLowerCase()}>
                          {patient.status}
                        </StatusBadge>
                      </td>
                      <td>
                        <RiskBadge risk={patient.risk.toLowerCase()}>
                          {patient.risk}
                        </RiskBadge>
                      </td>
                      <td>{patient.lastCheckin}</td>
                      <td>
                        <ProgressContainer>
                          <ProgressBar width={patient.progress} />
                          <ProgressLabel>{patient.progress}%</ProgressLabel>
                        </ProgressContainer>
                      </td>
                      <td>
                        <ActionButton>View</ActionButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </TabContent>
          )}

          {activeTab === 'alerts' && (
            <TabContent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ContentHeader>
                <ContentTitle>Patient Alerts</ContentTitle>
                <ContentDescription>
                  Real-time notifications and critical patient alerts
                </ContentDescription>
              </ContentHeader>

              <AlertsContainer>
                {mockAlerts.map(alert => (
                  <AlertCard key={alert.id} type={alert.type.toLowerCase()}>
                    <AlertHeader>
                      <AlertType type={alert.type.toLowerCase()}>{alert.type}</AlertType>
                      <AlertTime>{alert.time}</AlertTime>
                    </AlertHeader>
                    <AlertPatient>{alert.patient}</AlertPatient>
                    <AlertMessage>{alert.message}</AlertMessage>
                    <AlertActions>
                      <AlertButton primary>Respond</AlertButton>
                      <AlertButton>Dismiss</AlertButton>
                    </AlertActions>
                  </AlertCard>
                ))}
              </AlertsContainer>
            </TabContent>
          )}

          {activeTab === 'analytics' && (
            <TabContent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ContentHeader>
                <ContentTitle>Hospital Analytics</ContentTitle>
                <ContentDescription>
                  Patient recovery metrics and hospital performance
                </ContentDescription>
              </ContentHeader>

              <AnalyticsPlaceholder>
                <AnalyticsIcon>📊</AnalyticsIcon>
                <AnalyticsTitle>Analytics Dashboard</AnalyticsTitle>
                <AnalyticsDescription>
                  Interactive charts and data visualizations would appear here, showing:
                </AnalyticsDescription>
                <AnalyticsList>
                  <AnalyticsListItem>Patient recovery rates over time</AnalyticsListItem>
                  <AnalyticsListItem>Readmission statistics</AnalyticsListItem>
                  <AnalyticsListItem>Medical adherence metrics</AnalyticsListItem>
                  <AnalyticsListItem>AI-powered risk predictions</AnalyticsListItem>
                </AnalyticsList>
              </AnalyticsPlaceholder>
            </TabContent>
          )}

          {activeTab === 'appointments' && (
            <TabContent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ContentHeader>
                <ContentTitle>Appointment Schedule</ContentTitle>
                <ContentDescription>
                  Manage patient appointments and follow-ups
                </ContentDescription>
              </ContentHeader>

              <AppointmentsPlaceholder>
                <AnalyticsIcon>📅</AnalyticsIcon>
                <AnalyticsTitle>Appointment Calendar</AnalyticsTitle>
                <AnalyticsDescription>
                  Calendar and appointment management interface would appear here.
                </AnalyticsDescription>
              </AppointmentsPlaceholder>
            </TabContent>
          )}
        </ContentArea>
      </MainContent>
    </DashboardContainer>
  );
};

// Styled Components
const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f7f9fc;
`;

const Sidebar = styled.div`
  width: 260px;
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 100vh;
  z-index: 10;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #1e88e5;
  padding: 0 24px;
  margin-bottom: 16px;
`;

const SidebarDivider = styled.div`
  height: 1px;
  background: rgba(0, 0, 0, 0.07);
  margin: 16px 0;
`;

const NavItem = styled(motion.div)<{ active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  color: ${props => props.active ? '#1e88e5' : '#505a6c'};
  background: ${props => props.active ? 'rgba(30, 136, 229, 0.05)' : 'transparent'};
  border-left: ${props => props.active ? '3px solid #1e88e5' : '3px solid transparent'};
  margin-bottom: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  
  &:hover {
    background: rgba(30, 136, 229, 0.05);
    color: #1e88e5;
  }
  
  > svg {
    margin-right: 16px;
    font-size: 18px;
  }
  
  > span {
    font-weight: ${props => props.active ? '600' : '500'};
  }
`;

const AlertBadge = styled.div`
  background: #f44336;
  color: white;
  border-radius: 10px;
  font-size: 11px;
  font-weight: 600;
  height: 18px;
  min-width: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  margin-left: auto;
`;

const SidebarFooter = styled.div`
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.07);
`;

const MainContent = styled.div`
  flex: 1;
  padding: 0;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 5;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 300px;
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #a4b0be;
  display: flex;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 16px 0 42px;
  border-radius: 8px;
  border: 1px solid #e5e9f2;
  font-size: 15px;
  background: #f4f7fc;
  
  &:focus {
    outline: none;
    border-color: #1e88e5;
    background: white;
  }
  
  &::placeholder {
    color: #a4b0be;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
`;

const NotificationBell = styled.div`
  font-size: 20px;
  color: #505a6c;
  margin-right: 24px;
  cursor: pointer;
  position: relative;
`;

const NotificationDot = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 8px;
  height: 8px;
  background: #f44336;
  border-radius: 50%;
  border: 2px solid white;
`;

const AdminProfile = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const AdminAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #1e88e5;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-right: 12px;
`;

const AdminName = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #2d3748;
`;

const AdminRole = styled.div`
  font-size: 12px;
  color: #a4b0be;
`;

const ContentArea = styled.div`
  padding: 32px;
`;

const TabContent = styled(motion.div)`
  
`;

const ContentHeader = styled.div`
  margin-bottom: 24px;
`;

const ContentTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 8px 0;
`;

const ContentDescription = styled.p`
  font-size: 15px;
  color: #718096;
  margin: 0;
`;

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 32px;
`;

const StatCard = styled.div<{ highlight?: boolean }>`
  background: ${props => props.highlight ? '#ffe1e0' : 'white'};
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid ${props => props.highlight ? '#ff8a80' : '#e5e9f2'};
`;

const StatValue = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 8px;
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: #718096;
`;

const TableHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const TableTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
`;

const TableControls = styled.div`
  display: flex;
  gap: 12px;
`;

const TableFilter = styled.select`
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid #e5e9f2;
  background: white;
  font-size: 14px;
  color: #2d3748;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #1e88e5;
  }
`;

const TableButton = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  background: #1e88e5;
  color: white;
  border: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: #1976d2;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  
  th, td {
    padding: 16px;
    text-align: left;
    border-bottom: 1px solid #e5e9f2;
  }
  
  th {
    font-weight: 600;
    color: #2d3748;
    background: #f7f9fc;
  }
  
  tbody tr:last-child td {
    border-bottom: none;
  }
  
  tbody tr:hover {
    background: #f9fafc;
  }
`;

const PatientName = styled.div`
  font-weight: 500;
  color: #1e88e5;
`;

const StatusBadge = styled.span<{ status: string }>`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  
  ${props => {
    switch (props.status) {
      case 'critical':
        return `
          background: #ffe1e0;
          color: #e53935;
        `;
      case 'stable':
        return `
          background: #e3f2fd;
          color: #1976d2;
        `;
      case 'recovering':
      case 'improving':
        return `
          background: #e8f5e9;
          color: #43a047;
        `;
      default:
        return `
          background: #f5f5f5;
          color: #757575;
        `;
    }
  }}
`;

const RiskBadge = styled.span<{ risk: string }>`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  
  ${props => {
    switch (props.risk) {
      case 'high':
        return `
          background: #ffe1e0;
          color: #e53935;
        `;
      case 'medium':
        return `
          background: #fff8e1;
          color: #ffa000;
        `;
      case 'low':
        return `
          background: #e8f5e9;
          color: #43a047;
        `;
      default:
        return `
          background: #f5f5f5;
          color: #757575;
        `;
    }
  }}
`;

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const ProgressBar = styled.div<{ width: number }>`
  height: 8px;
  flex: 1;
  background: #e5e9f2;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.width}%;
    background: ${props => {
      if (props.width < 40) return '#f44336';
      if (props.width < 70) return '#ffa000';
      return '#43a047';
    }};
    border-radius: 4px;
  }
`;

const ProgressLabel = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #718096;
  width: 36px;
`;

const ActionButton = styled.button`
  padding: 6px 12px;
  border-radius: 6px;
  background: #e3f2fd;
  color: #1976d2;
  border: none;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #bbdefb;
  }
`;

const AlertsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
`;

const AlertCard = styled.div<{ type: string }>`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-left: 4px solid ${props => {
    switch (props.type) {
      case 'emergency':
        return '#e53935';
      case 'medication':
        return '#ffa000';
      case 'check-in':
        return '#1976d2';
      default:
        return '#757575';
    }
  }};
`;

const AlertHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const AlertType = styled.span<{ type: string }>`
  font-size: 12px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 4px;
  
  ${props => {
    switch (props.type) {
      case 'emergency':
        return `
          background: #ffe1e0;
          color: #e53935;
        `;
      case 'medication':
        return `
          background: #fff8e1;
          color: #ffa000;
        `;
      case 'check-in':
        return `
          background: #e3f2fd;
          color: #1976d2;
        `;
      default:
        return `
          background: #f5f5f5;
          color: #757575;
        `;
    }
  }}
`;

const AlertTime = styled.span`
  font-size: 12px;
  color: #a4b0be;
`;

const AlertPatient = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #2d3748;
  margin-bottom: 8px;
`;

const AlertMessage = styled.div`
  font-size: 14px;
  color: #718096;
  margin-bottom: 16px;
`;

const AlertActions = styled.div`
  display: flex;
  gap: 8px;
`;

const AlertButton = styled.button<{ primary?: boolean }>`
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  ${props => props.primary ? `
    background: #1e88e5;
    color: white;
    border: none;
    
    &:hover {
      background: #1976d2;
    }
  ` : `
    background: white;
    color: #718096;
    border: 1px solid #e5e9f2;
    
    &:hover {
      background: #f7f9fc;
    }
  `}
`;

const AnalyticsPlaceholder = styled.div`
  background: white;
  border-radius: 12px;
  padding: 48px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const AppointmentsPlaceholder = styled(AnalyticsPlaceholder)``;

const AnalyticsIcon = styled.div`
  font-size: 48px;
  margin-bottom: 24px;
`;

const AnalyticsTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 16px 0;
`;

const AnalyticsDescription = styled.p`
  font-size: 16px;
  color: #718096;
  margin: 0 0 24px 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const AnalyticsList = styled.ul`
  list-style-type: none;
  padding: 0;
  max-width: 400px;
  margin: 0 auto;
  text-align: left;
`;

const AnalyticsListItem = styled.li`
  padding: 12px 0;
  border-bottom: 1px solid #e5e9f2;
  font-size: 15px;
  color: #4a5568;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:before {
    content: '✓';
    color: #1e88e5;
    margin-right: 12px;
    font-weight: bold;
  }
`;

export default HospitalDashboardPage; 
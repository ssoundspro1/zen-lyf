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

const PageHeader = styled.div`
  margin-bottom: var(--spacing-xl);
`;

const PageTitle = styled.h1`
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

const PageDescription = styled.p`
  color: var(--text-secondary);
  font-size: 1.125rem;
  margin-bottom: var(--spacing-lg);
  max-width: 800px;
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-xl);
  flex-wrap: wrap;
  gap: var(--spacing-md);
`;

const SearchBar = styled.div`
  position: relative;
  flex: 1;
  max-width: 500px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: var(--spacing-md) var(--spacing-lg);
  padding-left: calc(var(--spacing-lg) + 24px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: var(--spacing-md);
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
`;

const UploadButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--primary);
  color: white;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease;
  text-decoration: none;
  
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

const FiltersContainer = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: var(--spacing-sm) var(--spacing-md);
  background: ${props => props.active ? 'var(--primary)' : 'rgba(255, 255, 255, 0.05)'};
  color: ${props => props.active ? 'white' : 'var(--text-secondary)'};
  border: 1px solid ${props => props.active ? 'var(--primary)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.active ? 'var(--primary)' : 'rgba(255, 255, 255, 0.1)'};
  }
`;

const RecordsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const RecordCard = styled(motion(Link))`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  text-decoration: none;
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
`;

const RecordThumbnail = styled.div<{ type: string }>`
  height: 180px;
  background-color: ${props => {
    switch (props.type) {
      case 'xray':
        return 'rgba(79, 70, 229, 0.2)';
      case 'mri':
        return 'rgba(16, 185, 129, 0.2)';
      case 'ct_scan':
        return 'rgba(245, 158, 11, 0.2)';
      case 'lab_result':
        return 'rgba(239, 68, 68, 0.2)';
      case 'prescription':
        return 'rgba(59, 130, 246, 0.2)';
      default:
        return 'rgba(255, 255, 255, 0.1)';
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 48px;
    height: 48px;
    color: ${props => {
      switch (props.type) {
        case 'xray':
          return 'var(--primary)';
        case 'mri':
          return 'var(--success)';
        case 'ct_scan':
          return 'var(--warning)';
        case 'lab_result':
          return 'var(--error)';
        case 'prescription':
          return '#3b82f6';
        default:
          return 'var(--text-secondary)';
      }
    }};
  }
`;

const RecordContent = styled.div`
  padding: var(--spacing-lg);
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const RecordTitle = styled.h3`
  font-size: 1.125rem;
  margin-bottom: var(--spacing-sm);
`;

const RecordMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);
`;

const RecordDate = styled.span`
  font-size: 0.875rem;
  color: var(--text-secondary);
`;

const RecordType = styled.span<{ type: string }>`
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  background-color: ${props => {
    switch (props.type) {
      case 'xray':
        return 'rgba(79, 70, 229, 0.2)';
      case 'mri':
        return 'rgba(16, 185, 129, 0.2)';
      case 'ct_scan':
        return 'rgba(245, 158, 11, 0.2)';
      case 'lab_result':
        return 'rgba(239, 68, 68, 0.2)';
      case 'prescription':
        return 'rgba(59, 130, 246, 0.2)';
      default:
        return 'rgba(255, 255, 255, 0.1)';
    }
  }};
  color: ${props => {
    switch (props.type) {
      case 'xray':
        return 'var(--primary)';
      case 'mri':
        return 'var(--success)';
      case 'ct_scan':
        return 'var(--warning)';
      case 'lab_result':
        return 'var(--error)';
      case 'prescription':
        return '#3b82f6';
      default:
        return 'var(--text-secondary)';
    }
  }};
`;

const RecordDescription = styled.p`
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  flex: 1;
`;

const RecordFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RecordStatus = styled.div<{ hasAnalysis: boolean }>`
  font-size: 0.75rem;
  color: ${props => props.hasAnalysis ? 'var(--success)' : 'var(--warning)'};
`;

const ViewButton = styled.span`
  font-size: 0.875rem;
  color: var(--primary);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: var(--spacing-2xl) 0;
  color: var(--text-secondary);
  grid-column: 1 / -1;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: var(--spacing-xl);
  gap: var(--spacing-sm);
`;

const PageButton = styled.button<{ active?: boolean }>`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  background: ${props => props.active ? 'var(--primary)' : 'rgba(255, 255, 255, 0.05)'};
  color: ${props => props.active ? 'white' : 'var(--text-secondary)'};
  border: 1px solid ${props => props.active ? 'var(--primary)' : 'rgba(255, 255, 255, 0.1)'};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.active ? 'var(--primary)' : 'rgba(255, 255, 255, 0.1)'};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const MedicalRecordPage: React.FC = () => {
  const { currentUser } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Mock data for demonstration
  const medicalRecords = [
    {
      id: '1',
      title: 'Chest X-Ray Results',
      date: '2023-05-15',
      type: 'xray',
      description: 'Routine chest X-ray examination performed at City Hospital.',
      hasAnalysis: true,
    },
    {
      id: '2',
      title: 'Blood Test Results',
      date: '2023-04-22',
      type: 'lab_result',
      description: 'Complete blood count and metabolic panel from annual checkup.',
      hasAnalysis: true,
    },
    {
      id: '3',
      title: 'Prescription - Antibiotics',
      date: '2023-03-10',
      type: 'prescription',
      description: 'Prescription for amoxicillin 500mg for respiratory infection.',
      hasAnalysis: false,
    },
    {
      id: '4',
      title: 'MRI Scan - Knee',
      date: '2023-02-18',
      type: 'mri',
      description: 'MRI scan of right knee following sports injury.',
      hasAnalysis: true,
    },
    {
      id: '5',
      title: 'CT Scan - Abdomen',
      date: '2023-01-05',
      type: 'ct_scan',
      description: 'CT scan of abdomen to investigate persistent pain.',
      hasAnalysis: true,
    },
    {
      id: '6',
      title: 'Allergy Test Results',
      date: '2022-12-12',
      type: 'lab_result',
      description: 'Comprehensive allergy panel testing for common allergens.',
      hasAnalysis: false,
    },
  ];
  
  const filters = [
    { id: 'all', label: 'All Records' },
    { id: 'xray', label: 'X-Rays' },
    { id: 'mri', label: 'MRI Scans' },
    { id: 'ct_scan', label: 'CT Scans' },
    { id: 'lab_result', label: 'Lab Results' },
    { id: 'prescription', label: 'Prescriptions' },
    { id: 'analyzed', label: 'AI Analyzed' },
  ];
  
  const filteredRecords = medicalRecords.filter(record => {
    // Filter by search term
    const matchesSearch = record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          record.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by type
    let matchesFilter = true;
    if (activeFilter !== 'all') {
      if (activeFilter === 'analyzed') {
        matchesFilter = record.hasAnalysis;
      } else {
        matchesFilter = record.type === activeFilter;
      }
    }
    
    return matchesSearch && matchesFilter;
  });
  
  const getRecordIcon = (type: string) => {
    switch (type) {
      case 'xray':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        );
      case 'mri':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="4"></circle>
            <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
            <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
            <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
            <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
            <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
          </svg>
        );
      case 'ct_scan':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="22" y1="12" x2="18" y2="12"></line>
            <line x1="6" y1="12" x2="2" y2="12"></line>
            <line x1="12" y1="6" x2="12" y2="2"></line>
            <line x1="12" y1="22" x2="12" y2="18"></line>
          </svg>
        );
      case 'lab_result':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <path d="M9 15l2 2 4-4"></path>
          </svg>
        );
      case 'prescription':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3h18v18H3z"></path>
            <path d="M7 7h10v10H7z"></path>
            <path d="M10 10h4v4h-4z"></path>
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        );
    }
  };
  
  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'xray':
        return 'X-Ray';
      case 'mri':
        return 'MRI Scan';
      case 'ct_scan':
        return 'CT Scan';
      case 'lab_result':
        return 'Lab Result';
      case 'prescription':
        return 'Prescription';
      default:
        return 'Other';
    }
  };
  
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Your <span>Medical Records</span></PageTitle>
        <PageDescription>
          View and manage your medical records. Upload new records for AI analysis or review your existing records.
        </PageDescription>
      </PageHeader>
      
      <ActionBar>
        <SearchBar>
          <SearchIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </SearchIcon>
          <SearchInput 
            type="text" 
            placeholder="Search medical records..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBar>
        
        <UploadButton to="/medical-records/upload">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
          </svg>
          Upload Record
        </UploadButton>
      </ActionBar>
      
      <FiltersContainer>
        {filters.map(filter => (
          <FilterButton
            key={filter.id}
            active={activeFilter === filter.id}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </FilterButton>
        ))}
      </FiltersContainer>
      
      <RecordsGrid>
        {filteredRecords.length > 0 ? (
          filteredRecords.map(record => (
            <RecordCard
              key={record.id}
              to={`/medical-records/${record.id}`}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <RecordThumbnail type={record.type}>
                {getRecordIcon(record.type)}
              </RecordThumbnail>
              <RecordContent>
                <RecordTitle>{record.title}</RecordTitle>
                <RecordMeta>
                  <RecordDate>{record.date}</RecordDate>
                  <RecordType type={record.type}>{getTypeLabel(record.type)}</RecordType>
                </RecordMeta>
                <RecordDescription>{record.description}</RecordDescription>
                <RecordFooter>
                  <RecordStatus hasAnalysis={record.hasAnalysis}>
                    {record.hasAnalysis ? 'AI Analysis Available' : 'No AI Analysis'}
                  </RecordStatus>
                  <ViewButton>
                    View
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </ViewButton>
                </RecordFooter>
              </RecordContent>
            </RecordCard>
          ))
        ) : (
          <EmptyState>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 16px' }}>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <h3 style={{ marginBottom: '8px' }}>No medical records found</h3>
            <p>Upload a medical record to get started.</p>
          </EmptyState>
        )}
      </RecordsGrid>
      
      {filteredRecords.length > 0 && (
        <Pagination>
          <PageButton 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </PageButton>
          
          <PageButton active={currentPage === 1} onClick={() => setCurrentPage(1)}>1</PageButton>
          
          <PageButton disabled>...</PageButton>
          
          <PageButton 
            onClick={() => setCurrentPage(prev => prev + 1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </PageButton>
        </Pagination>
      )}
    </PageContainer>
  );
};

export default MedicalRecordPage; 
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PageContainer = styled.div`
  padding: var(--spacing-xl) var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: var(--spacing-2xl) var(--spacing-xl);
  }
`;

const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-xl);
  font-size: 0.875rem;
  color: var(--text-secondary);
  
  a {
    color: var(--text-secondary);
    text-decoration: none;
    
    &:hover {
      color: var(--primary);
    }
  }
  
  svg {
    margin: 0 var(--spacing-sm);
    width: 16px;
    height: 16px;
  }
`;

const AnalysisGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xl);
  
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
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

const RecordPreview = styled.div`
  width: 100%;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-lg);
  position: relative;
  overflow: hidden;
`;

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const PreviewPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  
  svg {
    width: 48px;
    height: 48px;
    margin-bottom: var(--spacing-md);
  }
`;

const RecordInfo = styled.div`
  margin-bottom: var(--spacing-lg);
`;

const RecordInfoItem = styled.div`
  display: flex;
  margin-bottom: var(--spacing-md);
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const RecordInfoLabel = styled.div`
  width: 120px;
  font-size: 0.875rem;
  color: var(--text-secondary);
`;

const RecordInfoValue = styled.div`
  flex: 1;
  font-size: 0.875rem;
  color: var(--text-primary);
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

const AnalysisSection = styled.div`
  margin-bottom: var(--spacing-xl);
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const AnalysisSectionTitle = styled.h3`
  font-size: 1.125rem;
  margin-bottom: var(--spacing-md);
  color: var(--primary);
`;

const AnalysisText = styled.p`
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
`;

const FindingsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const FindingItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--spacing-md);
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.6;
  
  svg {
    margin-right: var(--spacing-sm);
    min-width: 20px;
    margin-top: 3px;
  }
`;

const RecommendationsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const RecommendationItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--spacing-md);
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.6;
  
  svg {
    margin-right: var(--spacing-sm);
    min-width: 20px;
    margin-top: 3px;
  }
`;

const ConfidenceBar = styled.div`
  margin-top: var(--spacing-lg);
`;

const ConfidenceLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-sm);
  font-size: 0.75rem;
`;

const ConfidenceText = styled.span`
  color: var(--text-secondary);
`;

const ConfidenceValue = styled.span`
  color: var(--primary);
  font-weight: 600;
`;

const ConfidenceTrack = styled.div`
  width: 100%;
  height: 6px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  overflow: hidden;
`;

const ConfidenceFill = styled.div<{ value: number }>`
  height: 100%;
  width: ${props => `${props.value * 100}%`};
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  border-radius: var(--radius-full);
`;

const ActionButtons = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-xl);
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  
  ${props => props.primary ? `
    background: var(--primary);
    color: white;
    border: none;
    
    &:hover {
      background: #4338ca;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
    }
  ` : `
    background: transparent;
    color: var(--text-primary);
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    &:hover {
      background: rgba(255, 255, 255, 0.05);
      transform: translateY(-2px);
    }
  `}
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const LoadingState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-2xl) 0;
  color: var(--text-secondary);
  
  svg {
    width: 48px;
    height: 48px;
    margin-bottom: var(--spacing-lg);
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const MedicalRecordAnalysis: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  // Mock data for demonstration
  const record = {
    id: '1',
    title: 'Chest X-Ray Results',
    date: '2023-05-15',
    type: 'xray',
    description: 'Routine chest X-ray examination performed at City Hospital.',
    doctorName: 'Dr. Sarah Johnson',
    hospitalName: 'City Hospital',
    uploadDate: '2023-05-16',
    hasAnalysis: true,
    aiAnalysis: {
      summary: 'The chest X-ray shows normal lung fields with no evidence of active disease. Heart size and pulmonary vascularity appear within normal limits. No pleural effusion or pneumothorax is seen.',
      findings: [
        'Normal heart size and contour',
        'Clear lung fields bilaterally',
        'No evidence of consolidation or infiltrates',
        'No pleural effusion or pneumothorax',
        'Normal hilar and mediastinal contours',
        'No bony abnormalities noted',
      ],
      recommendations: [
        'No further imaging studies are required at this time',
        'Routine follow-up as clinically indicated',
        'Consider annual chest X-ray for preventive screening based on patient risk factors',
      ],
      processedAt: '2023-05-16T14:32:45Z',
      confidence: 0.92,
    },
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
  
  const handleDownload = () => {
    // In a real app, this would download the medical record file
    alert('Downloading medical record...');
  };
  
  const handleShare = () => {
    // In a real app, this would open a sharing dialog
    alert('Sharing medical record...');
  };
  
  if (isLoading) {
    return (
      <PageContainer>
        <LoadingState>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="2" x2="12" y2="6"></line>
            <line x1="12" y1="18" x2="12" y2="22"></line>
            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
            <line x1="2" y1="12" x2="6" y2="12"></line>
            <line x1="18" y1="12" x2="22" y2="12"></line>
            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
          </svg>
          <h3>Loading AI Analysis...</h3>
          <p>Please wait while we analyze your medical record.</p>
        </LoadingState>
      </PageContainer>
    );
  }
  
  return (
    <PageContainer>
      <Breadcrumbs>
        <Link to="/medical-records">Medical Records</Link>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        <span>{record.title}</span>
      </Breadcrumbs>
      
      <AnalysisGrid>
        <Card
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CardHeader>
            <CardTitle>Medical Record</CardTitle>
            <CardAction onClick={handleDownload}>Download</CardAction>
          </CardHeader>
          
          <RecordPreview>
            <PreviewPlaceholder>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
              <p>X-Ray Preview</p>
            </PreviewPlaceholder>
          </RecordPreview>
          
          <RecordInfo>
            <RecordInfoItem>
              <RecordInfoLabel>Record Type:</RecordInfoLabel>
              <RecordInfoValue>
                <RecordType type={record.type}>{getTypeLabel(record.type)}</RecordType>
              </RecordInfoValue>
            </RecordInfoItem>
            
            <RecordInfoItem>
              <RecordInfoLabel>Date:</RecordInfoLabel>
              <RecordInfoValue>{record.date}</RecordInfoValue>
            </RecordInfoItem>
            
            <RecordInfoItem>
              <RecordInfoLabel>Doctor:</RecordInfoLabel>
              <RecordInfoValue>{record.doctorName}</RecordInfoValue>
            </RecordInfoItem>
            
            <RecordInfoItem>
              <RecordInfoLabel>Hospital:</RecordInfoLabel>
              <RecordInfoValue>{record.hospitalName}</RecordInfoValue>
            </RecordInfoItem>
            
            <RecordInfoItem>
              <RecordInfoLabel>Uploaded:</RecordInfoLabel>
              <RecordInfoValue>{record.uploadDate}</RecordInfoValue>
            </RecordInfoItem>
          </RecordInfo>
          
          <ActionButtons>
            <Button onClick={handleDownload}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download
            </Button>
            
            <Button onClick={handleShare}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
              Share
            </Button>
          </ActionButtons>
        </Card>
        
        <Card
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CardHeader>
            <CardTitle>AI Analysis</CardTitle>
            <CardAction>Print</CardAction>
          </CardHeader>
          
          <AnalysisSection>
            <AnalysisSectionTitle>Summary</AnalysisSectionTitle>
            <AnalysisText>{record.aiAnalysis.summary}</AnalysisText>
          </AnalysisSection>
          
          <AnalysisSection>
            <AnalysisSectionTitle>Findings</AnalysisSectionTitle>
            <FindingsList>
              {record.aiAnalysis.findings.map((finding, index) => (
                <FindingItem key={index}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  {finding}
                </FindingItem>
              ))}
            </FindingsList>
          </AnalysisSection>
          
          <AnalysisSection>
            <AnalysisSectionTitle>Recommendations</AnalysisSectionTitle>
            <RecommendationsList>
              {record.aiAnalysis.recommendations.map((recommendation, index) => (
                <RecommendationItem key={index}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                  {recommendation}
                </RecommendationItem>
              ))}
            </RecommendationsList>
          </AnalysisSection>
          
          <ConfidenceBar>
            <ConfidenceLabel>
              <ConfidenceText>AI Confidence Level</ConfidenceText>
              <ConfidenceValue>{Math.round(record.aiAnalysis.confidence * 100)}%</ConfidenceValue>
            </ConfidenceLabel>
            <ConfidenceTrack>
              <ConfidenceFill value={record.aiAnalysis.confidence} />
            </ConfidenceTrack>
          </ConfidenceBar>
          
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: 'var(--spacing-md)', textAlign: 'center' }}>
            Analysis generated on {new Date(record.aiAnalysis.processedAt).toLocaleString()}
          </div>
          
          <ActionButtons>
            <Button primary>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Schedule Follow-up
            </Button>
          </ActionButtons>
        </Card>
      </AnalysisGrid>
    </PageContainer>
  );
};

export default MedicalRecordAnalysis; 
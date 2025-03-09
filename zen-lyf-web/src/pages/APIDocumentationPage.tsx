import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLock, FaCode, FaExchangeAlt, FaFileAlt, FaKey, FaIdCard, FaExclamationTriangle } from 'react-icons/fa';
import IconWrapper from '../components/IconWrapper';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
`;

const HeroSection = styled.section`
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: var(--spacing-xl) var(--spacing-lg);
  position: relative;
  margin-bottom: var(--spacing-xl);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(79, 70, 229, 0.15) 0%, transparent 70%);
    z-index: -1;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: var(--spacing-lg);
  max-width: 800px;
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 3.5rem;
  }
  
  span {
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
  max-width: 600px;
`;

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const SectionContainer = styled.section`
  margin-bottom: var(--spacing-xxl);
`;

const SectionHeader = styled.div`
  margin-bottom: var(--spacing-xl);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    border-radius: 2px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: var(--spacing-sm);
`;

const SectionDescription = styled.p`
  color: var(--text-secondary);
  font-size: 1.1rem;
  max-width: 800px;
`;

const CodeBlock = styled.div`
  background: var(--surface-dark);
  border-radius: var(--border-radius);
  padding: var(--spacing-lg);
  margin: var(--spacing-md) 0;
  overflow-x: auto;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.9rem;
  position: relative;
`;

const CodeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  border-bottom: 1px solid var(--border-color);
`;

const CodeTitle = styled.div`
  font-weight: 500;
  color: var(--text-primary);
`;

const CodeLanguage = styled.div`
  font-size: 0.8rem;
  color: var(--text-tertiary);
  background: var(--surface);
  padding: 0.2rem 0.5rem;
  border-radius: var(--border-radius-sm);
`;

const Pre = styled.pre`
  margin: 0;
  color: var(--text-code);
`;

const InfoCard = styled(motion.div)`
  background: var(--surface);
  border-radius: var(--border-radius);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  display: flex;
  border-left: 4px solid var(--primary);
`;

const InfoCardIcon = styled.div`
  margin-right: var(--spacing-md);
  color: var(--primary);
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

const InfoCardContent = styled.div`
  flex: 1;
`;

const InfoCardTitle = styled.h3`
  margin-bottom: var(--spacing-xs);
  font-size: 1.2rem;
`;

const InfoCardDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-sm);
  font-size: 0.95rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: var(--spacing-lg) 0;
`;

const TableHead = styled.thead`
  background: var(--surface-dark);
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background: var(--surface);
  }
`;

const TableHeader = styled.th`
  text-align: left;
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border-color);
`;

const TableCell = styled.td`
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border-color);
  font-size: 0.95rem;
`;

const APIDocumentationPage: React.FC = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ZEN-LYF <span>API Documentation</span>
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Comprehensive guide to integrate with the ZEN-LYF health platform
        </HeroSubtitle>
      </HeroSection>
      
      {/* Authentication Section */}
      <SectionContainer
        as={motion.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <SectionHeader>
          <SectionTitle>Authentication</SectionTitle>
          <SectionDescription>
            Secure your API requests with our authentication system
          </SectionDescription>
        </SectionHeader>
        
        <InfoCard
          variants={fadeIn}
        >
          <InfoCardIcon>
            <IconWrapper icon={FaLock} size={24} />
          </InfoCardIcon>
          <InfoCardContent>
            <InfoCardTitle>API Keys</InfoCardTitle>
            <InfoCardDescription>
              ZEN-LYF API uses API keys to authenticate requests. You can view and manage your API keys in the Developer Dashboard.
            </InfoCardDescription>
          </InfoCardContent>
        </InfoCard>
        
        <motion.div variants={fadeIn}>
          <h3>API Key Authentication</h3>
          <p>
            All API requests must include your API key in the request headers:
          </p>
          
          <CodeBlock>
            <CodeHeader>
              <CodeTitle>Example Request Header</CodeTitle>
              <CodeLanguage>HTTP</CodeLanguage>
            </CodeHeader>
            <Pre>
{`Authorization: Bearer YOUR_API_KEY
Content-Type: application/json`}
            </Pre>
          </CodeBlock>
        </motion.div>
        
        <motion.div variants={fadeIn}>
          <h3>OAuth 2.0 Authentication</h3>
          <p>
            For patient data access, ZEN-LYF supports OAuth 2.0 to ensure secure, authorized access to protected health information.
          </p>
          
          <CodeBlock>
            <CodeHeader>
              <CodeTitle>OAuth Authorization Example</CodeTitle>
              <CodeLanguage>JavaScript</CodeLanguage>
            </CodeHeader>
            <Pre>
{`const getAccessToken = async () => {
  try {
    const response = await fetch('https://api.zen-lyf.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        client_id: 'YOUR_CLIENT_ID',
        client_secret: 'YOUR_CLIENT_SECRET',
        grant_type: 'authorization_code',
        code: 'AUTHORIZATION_CODE',
        redirect_uri: 'YOUR_REDIRECT_URI'
      })
    });
    
    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
  }
}`}
            </Pre>
          </CodeBlock>
        </motion.div>
        
        <motion.div variants={fadeIn}>
          <h3>Security Best Practices</h3>
          
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Practice</TableHeader>
                <TableHeader>Description</TableHeader>
              </TableRow>
            </TableHead>
            <tbody>
              <TableRow>
                <TableCell><strong>Never share API keys</strong></TableCell>
                <TableCell>Keep your API keys secure and never expose them in client-side code or public repositories.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Use environment variables</strong></TableCell>
                <TableCell>Store API keys as environment variables rather than hardcoding them in your application.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Implement key rotation</strong></TableCell>
                <TableCell>Regularly rotate your API keys to minimize the impact of potential key exposure.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>Set appropriate permissions</strong></TableCell>
                <TableCell>Create API keys with the minimal permissions required for your use case.</TableCell>
              </TableRow>
            </tbody>
          </Table>
        </motion.div>
        
        <InfoCard
          variants={fadeIn}
          style={{ borderLeft: '4px solid var(--warning)' }}
        >
          <InfoCardIcon style={{ color: 'var(--warning)' }}>
            <IconWrapper icon={FaExclamationTriangle} size={24} />
          </InfoCardIcon>
          <InfoCardContent>
            <InfoCardTitle>Security Notice</InfoCardTitle>
            <InfoCardDescription>
              API keys grant access to sensitive patient health data. Ensure you follow all security best practices and comply with HIPAA regulations when handling API keys.
            </InfoCardDescription>
          </InfoCardContent>
        </InfoCard>
      </SectionContainer>
      
      {/* API Endpoints Section */}
      <SectionContainer
        as={motion.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <SectionHeader>
          <SectionTitle>API Endpoints</SectionTitle>
          <SectionDescription>
            Explore the available endpoints to integrate with ZEN-LYF's health platform
          </SectionDescription>
        </SectionHeader>
        
        {/* Patient Data API */}
        <motion.div variants={fadeIn}>
          <h3>Patient API</h3>
          <p>Access and manage patient health records, demographics, and medical history.</p>
          
          <CodeBlock>
            <CodeHeader>
              <CodeTitle>Get Patient Profile</CodeTitle>
              <CodeLanguage>HTTP</CodeLanguage>
            </CodeHeader>
            <Pre>
{`GET /api/v1/patients/:patientId

Response:
{
  "id": "patient_123456",
  "firstName": "John",
  "lastName": "Doe",
  "dateOfBirth": "1980-01-15",
  "gender": "male",
  "contactInformation": {
    "email": "john.doe@example.com",
    "phone": "+1234567890",
    "address": {
      "street": "123 Health St",
      "city": "Wellness City",
      "state": "CA",
      "zipCode": "90210",
      "country": "USA"
    }
  },
  "emergencyContacts": [
    {
      "name": "Jane Doe",
      "relationship": "Spouse",
      "phone": "+1098765432"
    }
  ],
  "insurance": {
    "provider": "HealthInsure",
    "policyNumber": "HI123456789",
    "groupNumber": "GRP987654",
    "coverageStartDate": "2022-01-01"
  },
  "createdAt": "2022-02-10T14:30:00Z",
  "updatedAt": "2023-05-22T09:15:00Z"
}`}
            </Pre>
          </CodeBlock>
          
          <CodeBlock>
            <CodeHeader>
              <CodeTitle>Create Patient Record</CodeTitle>
              <CodeLanguage>HTTP</CodeLanguage>
            </CodeHeader>
            <Pre>
{`POST /api/v1/patients

Request Body:
{
  "firstName": "John",
  "lastName": "Doe",
  "dateOfBirth": "1980-01-15",
  "gender": "male",
  "contactInformation": {
    "email": "john.doe@example.com",
    "phone": "+1234567890",
    "address": {
      "street": "123 Health St",
      "city": "Wellness City",
      "state": "CA",
      "zipCode": "90210",
      "country": "USA"
    }
  }
}

Response:
{
  "id": "patient_123456",
  "firstName": "John",
  "lastName": "Doe",
  "dateOfBirth": "1980-01-15",
  "gender": "male",
  "contactInformation": {
    "email": "john.doe@example.com",
    "phone": "+1234567890",
    "address": {
      "street": "123 Health St",
      "city": "Wellness City",
      "state": "CA",
      "zipCode": "90210",
      "country": "USA"
    }
  },
  "createdAt": "2023-09-18T14:30:00Z",
  "updatedAt": "2023-09-18T14:30:00Z"
}`}
            </Pre>
          </CodeBlock>
        </motion.div>
        
        {/* Medical Records API */}
        <motion.div variants={fadeIn}>
          <h3>Medical Records API</h3>
          <p>Access and manage patient medical records, reports, and diagnostic information.</p>
          
          <CodeBlock>
            <CodeHeader>
              <CodeTitle>Get Patient Medical Records</CodeTitle>
              <CodeLanguage>HTTP</CodeLanguage>
            </CodeHeader>
            <Pre>
{`GET /api/v1/patients/:patientId/medical-records

Response:
{
  "records": [
    {
      "id": "record_789012",
      "patientId": "patient_123456",
      "recordType": "labResult",
      "recordDate": "2023-06-15T09:30:00Z",
      "provider": {
        "id": "provider_345678",
        "name": "Dr. Sarah Johnson",
        "specialization": "Hematology"
      },
      "facility": {
        "id": "facility_901234",
        "name": "Central Medical Laboratory",
        "address": "456 Lab Avenue, Medical City, CA"
      },
      "data": {
        "testName": "Complete Blood Count",
        "results": [
          {
            "component": "WBC",
            "value": "7.2",
            "unit": "10^3/µL",
            "referenceRange": "4.5-11.0",
            "flag": "normal"
          },
          {
            "component": "RBC",
            "value": "5.1",
            "unit": "10^6/µL",
            "referenceRange": "4.5-5.9",
            "flag": "normal"
          },
          {
            "component": "Hemoglobin",
            "value": "14.2",
            "unit": "g/dL",
            "referenceRange": "13.5-17.5",
            "flag": "normal"
          }
        ],
        "interpretation": "All values within normal range. No significant abnormalities detected."
      },
      "attachments": [
        {
          "id": "attachment_567890",
          "fileName": "CBC_Report_20230615.pdf",
          "fileType": "application/pdf",
          "fileSize": 1256432,
          "uploadDate": "2023-06-15T10:15:00Z",
          "url": "https://api.zen-lyf.com/files/CBC_Report_20230615.pdf"
        }
      ],
      "createdAt": "2023-06-15T10:15:00Z",
      "updatedAt": "2023-06-15T10:15:00Z"
    }
  ],
  "pagination": {
    "totalRecords": 24,
    "currentPage": 1,
    "totalPages": 3,
    "perPage": 10
  }
}`}
            </Pre>
          </CodeBlock>
          
          <CodeBlock>
            <CodeHeader>
              <CodeTitle>Upload Medical Record</CodeTitle>
              <CodeLanguage>HTTP</CodeLanguage>
            </CodeHeader>
            <Pre>
{`POST /api/v1/patients/:patientId/medical-records

Request Body:
{
  "recordType": "imagingResult",
  "recordDate": "2023-09-10T13:45:00Z",
  "provider": {
    "id": "provider_234567",
    "name": "Dr. Michael Chen",
    "specialization": "Radiology"
  },
  "facility": {
    "id": "facility_345678",
    "name": "Advanced Imaging Center",
    "address": "789 Scan Street, Medical City, CA"
  },
  "data": {
    "studyType": "MRI",
    "bodyPart": "Knee",
    "findings": "Mild joint effusion. Small tear in the medial meniscus. No bone fractures observed.",
    "impression": "Grade II medial meniscus tear. Conservative treatment recommended."
  }
}

Response:
{
  "id": "record_890123",
  "patientId": "patient_123456",
  "recordType": "imagingResult",
  "recordDate": "2023-09-10T13:45:00Z",
  "provider": {
    "id": "provider_234567",
    "name": "Dr. Michael Chen",
    "specialization": "Radiology"
  },
  "facility": {
    "id": "facility_345678",
    "name": "Advanced Imaging Center",
    "address": "789 Scan Street, Medical City, CA"
  },
  "data": {
    "studyType": "MRI",
    "bodyPart": "Knee",
    "findings": "Mild joint effusion. Small tear in the medial meniscus. No bone fractures observed.",
    "impression": "Grade II medial meniscus tear. Conservative treatment recommended."
  },
  "createdAt": "2023-09-18T15:30:00Z",
  "updatedAt": "2023-09-18T15:30:00Z"
}`}
            </Pre>
          </CodeBlock>
        </motion.div>
        
        {/* Wearable Integration API */}
        <motion.div variants={fadeIn}>
          <h3>Wearable Data API</h3>
          <p>Integrate with patient wearable devices to access health metrics and activity data.</p>
          
          <CodeBlock>
            <CodeHeader>
              <CodeTitle>Get Patient Wearable Data</CodeTitle>
              <CodeLanguage>HTTP</CodeLanguage>
            </CodeHeader>
            <Pre>
{`GET /api/v1/patients/:patientId/wearable-data?startDate=2023-09-01&endDate=2023-09-18

Response:
{
  "wearableData": [
    {
      "date": "2023-09-17",
      "deviceInfo": {
        "type": "smartwatch",
        "manufacturer": "Apple",
        "model": "Watch Series 8",
        "osVersion": "9.1.0"
      },
      "healthMetrics": {
        "heartRate": {
          "average": 72,
          "min": 55,
          "max": 120,
          "readings": [
            {
              "timestamp": "2023-09-17T08:30:00Z",
              "value": 68
            },
            {
              "timestamp": "2023-09-17T12:15:00Z",
              "value": 85
            },
            // Additional readings...
          ]
        },
        "bloodOxygen": {
          "average": 98,
          "min": 95,
          "max": 99,
          "readings": [
            {
              "timestamp": "2023-09-17T08:30:00Z",
              "value": 98
            },
            // Additional readings...
          ]
        },
        "ecg": [
          {
            "timestamp": "2023-09-17T20:15:00Z",
            "classification": "normal",
            "dataUrl": "https://api.zen-lyf.com/files/ecg_20230917201500.csv"
          }
        ]
      },
      "activityData": {
        "steps": 8934,
        "distance": 6.2,
        "distanceUnit": "km",
        "activeCalories": 345,
        "totalCalories": 2250,
        "standHours": 12,
        "exerciseMinutes": 45,
        "workouts": [
          {
            "type": "walking",
            "startTime": "2023-09-17T07:30:00Z",
            "endTime": "2023-09-17T08:15:00Z",
            "duration": 2700,
            "durationUnit": "seconds",
            "distance": 2.4,
            "distanceUnit": "km",
            "calories": 145,
            "averageHeartRate": 98
          }
        ]
      },
      "sleepData": {
        "bedTime": "2023-09-16T22:30:00Z",
        "wakeTime": "2023-09-17T06:45:00Z",
        "sleepDuration": 29700,
        "sleepDurationUnit": "seconds",
        "deepSleepDuration": 7200,
        "remSleepDuration": 9000,
        "lightSleepDuration": 12600,
        "awakeTime": 900,
        "sleepQualityScore": 85
      }
    }
  ],
  "pagination": {
    "totalDays": 18,
    "currentPage": 1,
    "totalPages": 2,
    "perPage": 10
  }
}`}
            </Pre>
          </CodeBlock>
          
          <CodeBlock>
            <CodeHeader>
              <CodeTitle>Sync Wearable Data</CodeTitle>
              <CodeLanguage>HTTP</CodeLanguage>
            </CodeHeader>
            <Pre>
{`POST /api/v1/patients/:patientId/wearable-data/sync

Request Body:
{
  "deviceInfo": {
    "type": "smartwatch",
    "manufacturer": "Apple",
    "model": "Watch Series 8",
    "osVersion": "9.1.0"
  },
  "dateRange": {
    "startDate": "2023-09-17",
    "endDate": "2023-09-18"
  },
  "dataTypes": ["heartRate", "bloodOxygen", "ecg", "activity", "sleep"]
}

Response:
{
  "syncId": "sync_456789",
  "status": "completed",
  "syncedDataTypes": ["heartRate", "bloodOxygen", "ecg", "activity", "sleep"],
  "syncedDays": 2,
  "totalRecords": 487,
  "startTime": "2023-09-18T15:45:00Z",
  "endTime": "2023-09-18T15:45:30Z"
}`}
            </Pre>
          </CodeBlock>
        </motion.div>
        
        {/* AI Analysis API */}
        <motion.div variants={fadeIn}>
          <h3>AI Analysis API</h3>
          <p>Leverage ZEN-LYF's AI capabilities to analyze patient health data and generate insights.</p>
          
          <CodeBlock>
            <CodeHeader>
              <CodeTitle>Analyze Patient Health Data</CodeTitle>
              <CodeLanguage>HTTP</CodeLanguage>
            </CodeHeader>
            <Pre>
{`POST /api/v1/ai/analyze

Request Body:
{
  "patientId": "patient_123456",
  "analysisType": "comprehensive",
  "dataTimeRange": {
    "startDate": "2023-06-01",
    "endDate": "2023-09-18"
  },
  "includeDataTypes": [
    "medicalRecords",
    "wearableData",
    "medicationHistory"
  ]
}

Response:
{
  "analysisId": "analysis_567890",
  "patientId": "patient_123456",
  "analysisDate": "2023-09-18T16:00:00Z",
  "status": "completed",
  "insights": [
    {
      "category": "cardiovascular",
      "severity": "low",
      "finding": "Mild elevation in resting heart rate observed over the past 2 weeks, from average 65 bpm to 72 bpm.",
      "recommendation": "Monitor cardiovascular activity. Consider factors such as stress, caffeine intake, and sleep quality which may contribute to elevated heart rate.",
      "confidenceScore": 0.85,
      "dataPoints": {
        "heartRateTrend": [
          {"week": "2023-08-21", "averageHeartRate": 65},
          {"week": "2023-08-28", "averageHeartRate": 67},
          {"week": "2023-09-04", "averageHeartRate": 69},
          {"week": "2023-09-11", "averageHeartRate": 72}
        ]
      }
    },
    {
      "category": "sleep",
      "severity": "medium",
      "finding": "Consistent reduction in deep sleep duration, potentially affecting recovery and cognitive function.",
      "recommendation": "Prioritize sleep hygiene. Consider reducing screen time before bed and maintaining a consistent sleep schedule.",
      "confidenceScore": 0.92,
      "dataPoints": {
        "sleepTrend": [
          {"week": "2023-08-21", "avgDeepSleepMinutes": 120},
          {"week": "2023-08-28", "avgDeepSleepMinutes": 105},
          {"week": "2023-09-04", "avgDeepSleepMinutes": 90},
          {"week": "2023-09-11", "avgDeepSleepMinutes": 85}
        ]
      }
    }
  ],
  "summary": "Overall health status is good with minor concerns in cardiovascular and sleep patterns. Regular monitoring and lifestyle adjustments recommended. No urgent medical intervention required based on current data."
}`}
            </Pre>
          </CodeBlock>
        </motion.div>
      </SectionContainer>
      
      {/* Error Codes Section */}
      <SectionContainer
        as={motion.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <SectionHeader>
          <SectionTitle>Error Codes & Handling</SectionTitle>
          <SectionDescription>
            Understanding and handling API errors effectively
          </SectionDescription>
        </SectionHeader>
        
        <motion.div variants={fadeIn}>
          <p>
            The ZEN-LYF API uses conventional HTTP response codes to indicate the success or failure of an API request. 
            In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error that failed 
            given the information provided, and codes in the 5xx range indicate an error with ZEN-LYF's servers.
          </p>
          
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Error Code</TableHeader>
                <TableHeader>Description</TableHeader>
                <TableHeader>Resolution</TableHeader>
              </TableRow>
            </TableHead>
            <tbody>
              <TableRow>
                <TableCell><strong>400</strong> Bad Request</TableCell>
                <TableCell>The request was malformed or missing required parameters.</TableCell>
                <TableCell>Check your request syntax and ensure all required fields are included.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>401</strong> Unauthorized</TableCell>
                <TableCell>No valid API key was provided or the key doesn't have permission.</TableCell>
                <TableCell>Verify your API key is correct and has the necessary permissions.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>403</strong> Forbidden</TableCell>
                <TableCell>The API key doesn't have permissions to perform the request.</TableCell>
                <TableCell>Contact your account administrator to get proper permissions.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>404</strong> Not Found</TableCell>
                <TableCell>The requested resource doesn't exist.</TableCell>
                <TableCell>Verify the resource path and identifiers in your request.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>409</strong> Conflict</TableCell>
                <TableCell>The request conflicts with current state of the server.</TableCell>
                <TableCell>Resolve the conflict and retry the request.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>422</strong> Unprocessable Entity</TableCell>
                <TableCell>The request was well-formed but contains semantic errors.</TableCell>
                <TableCell>Check the error response for details about the issue.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>429</strong> Too Many Requests</TableCell>
                <TableCell>Rate limit has been exceeded.</TableCell>
                <TableCell>Implement exponential backoff and retry the request later.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>500</strong> Server Error</TableCell>
                <TableCell>An error occurred on ZEN-LYF's servers.</TableCell>
                <TableCell>Contact support if the issue persists.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><strong>503</strong> Service Unavailable</TableCell>
                <TableCell>The service is temporarily unavailable.</TableCell>
                <TableCell>Implement retry logic with exponential backoff.</TableCell>
              </TableRow>
            </tbody>
          </Table>
        </motion.div>
        
        <motion.div variants={fadeIn}>
          <h3>Error Response Format</h3>
          <p>
            All API errors return a JSON response with details about the error to help with debugging.
          </p>
          
          <CodeBlock>
            <CodeHeader>
              <CodeTitle>Error Response Example</CodeTitle>
              <CodeLanguage>JSON</CodeLanguage>
            </CodeHeader>
            <Pre>
{`{
  "error": {
    "code": "invalid_request",
    "status": 400,
    "message": "The request was malformed or invalid",
    "details": [
      {
        "field": "patientId",
        "issue": "Required field missing",
        "location": "body"
      }
    ],
    "requestId": "req_123456789",
    "timestamp": "2023-09-18T16:15:30Z",
    "documentation": "https://api.zen-lyf.com/docs/errors/invalid_request"
  }
}`}
            </Pre>
          </CodeBlock>
        </motion.div>
        
        <motion.div variants={fadeIn}>
          <h3>Handling Errors in Your Code</h3>
          
          <CodeBlock>
            <CodeHeader>
              <CodeTitle>JavaScript Error Handling</CodeTitle>
              <CodeLanguage>JavaScript</CodeLanguage>
            </CodeHeader>
            <Pre>
{`try {
  const response = await fetch('https://api.zen-lyf.com/api/v1/patients/patient_123456', {
    method: 'GET',
    headers: {
      'Authorization': \`Bearer \${apiKey}\`,
      'Content-Type': 'application/json'
    }
  });
  
  if (!response.ok) {
    const errorData = await response.json();
    
    // Handle specific error types
    switch (response.status) {
      case 400:
        console.error('Bad request:', errorData.error.details);
        // Fix request format and retry
        break;
      case 401:
        console.error('Authentication error. Refreshing token...');
        // Refresh token logic
        break;
      case 429:
        const retryAfter = response.headers.get('Retry-After') || 60;
        console.error(\`Rate limited. Retry after \${retryAfter} seconds\`);
        // Implement backoff strategy
        break;
      default:
        console.error(\`API Error (\${response.status}): \${errorData.error.message}\`);
    }
    
    throw new Error(\`API Error: \${errorData.error.message}\`);
  }
  
  const data = await response.json();
  return data;
} catch (error) {
  console.error('Error fetching patient data:', error);
  // Handle network errors and other exceptions
  throw error;
}`}
            </Pre>
          </CodeBlock>
        </motion.div>
      </SectionContainer>
      
      {/* SDKs & Libraries Section */}
      <SectionContainer
        as={motion.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <SectionHeader>
          <SectionTitle>SDKs & Libraries</SectionTitle>
          <SectionDescription>
            Official client libraries to simplify your integration
          </SectionDescription>
        </SectionHeader>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--spacing-lg)' }}>
          <InfoCard
            as={motion.div}
            variants={fadeIn}
            style={{ display: 'block', textAlign: 'center', padding: 'var(--spacing-xl)' }}
          >
            <InfoCardIcon style={{ fontSize: '2.5rem', justifyContent: 'center', marginBottom: 'var(--spacing-md)' }}>
              <IconWrapper icon={FaCode} size={40} />
            </InfoCardIcon>
            <InfoCardTitle>JavaScript SDK</InfoCardTitle>
            <InfoCardDescription>
              Our official JavaScript library for Node.js and browser applications
            </InfoCardDescription>
            <Pre style={{ background: 'var(--surface-dark)', padding: 'var(--spacing-sm)', marginTop: 'var(--spacing-md)', textAlign: 'left' }}>
              npm install @zen-lyf/api-client
            </Pre>
          </InfoCard>
          
          <InfoCard
            as={motion.div}
            variants={fadeIn}
            style={{ display: 'block', textAlign: 'center', padding: 'var(--spacing-xl)' }}
          >
            <InfoCardIcon style={{ fontSize: '2.5rem', justifyContent: 'center', marginBottom: 'var(--spacing-md)' }}>
              <IconWrapper icon={FaCode} size={40} />
            </InfoCardIcon>
            <InfoCardTitle>React Native SDK</InfoCardTitle>
            <InfoCardDescription>
              Mobile SDK optimized for React Native applications
            </InfoCardDescription>
            <Pre style={{ background: 'var(--surface-dark)', padding: 'var(--spacing-sm)', marginTop: 'var(--spacing-md)', textAlign: 'left' }}>
              npm install @zen-lyf/react-native
            </Pre>
          </InfoCard>
          
          <InfoCard
            as={motion.div}
            variants={fadeIn}
            style={{ display: 'block', textAlign: 'center', padding: 'var(--spacing-xl)' }}
          >
            <InfoCardIcon style={{ fontSize: '2.5rem', justifyContent: 'center', marginBottom: 'var(--spacing-md)' }}>
              <IconWrapper icon={FaCode} size={40} />
            </InfoCardIcon>
            <InfoCardTitle>Python SDK</InfoCardTitle>
            <InfoCardDescription>
              Python library for server-side integrations and data science
            </InfoCardDescription>
            <Pre style={{ background: 'var(--surface-dark)', padding: 'var(--spacing-sm)', marginTop: 'var(--spacing-md)', textAlign: 'left' }}>
              pip install zen-lyf-python
            </Pre>
          </InfoCard>
        </div>
        
        <motion.div variants={fadeIn} style={{ marginTop: 'var(--spacing-xl)' }}>
          <h3>JavaScript SDK Example</h3>
          <p>
            Here's a quick example of how to use our JavaScript SDK to access the ZEN-LYF API:
          </p>
          
          <CodeBlock>
            <CodeHeader>
              <CodeTitle>Using the JavaScript SDK</CodeTitle>
              <CodeLanguage>JavaScript</CodeLanguage>
            </CodeHeader>
            <Pre>
{`import { ZenLyfClient } from '@zen-lyf/api-client';

// Initialize the client
const zenLyf = new ZenLyfClient({
  apiKey: 'YOUR_API_KEY',
  environment: 'production' // or 'sandbox' for testing
});

// Get a patient's medical records
async function getPatientMedicalRecords(patientId) {
  try {
    const records = await zenLyf.medicalRecords.list({
      patientId: patientId,
      limit: 10,
      sortBy: 'recordDate',
      sortOrder: 'desc'
    });
    
    console.log(\`Retrieved \${records.data.length} medical records\`);
    return records;
  } catch (error) {
    console.error('Error retrieving medical records:', error);
    throw error;
  }
}

// Analyze patient health data
async function analyzePatientHealth(patientId) {
  try {
    const analysis = await zenLyf.ai.analyze({
      patientId: patientId,
      analysisType: 'comprehensive',
      dataTimeRange: {
        startDate: '2023-06-01',
        endDate: '2023-09-18'
      },
      includeDataTypes: [
        'medicalRecords',
        'wearableData',
        'medicationHistory'
      ]
    });
    
    console.log('Analysis completed:', analysis.summary);
    return analysis;
  } catch (error) {
    console.error('Error analyzing patient health:', error);
    throw error;
  }
}`}
            </Pre>
          </CodeBlock>
        </motion.div>
        
        <motion.div variants={fadeIn} style={{ marginTop: 'var(--spacing-xl)' }}>
          <h3>Getting Started</h3>
          <p>
            Follow these steps to start integrating with the ZEN-LYF API:
          </p>
          
          <ol style={{ lineHeight: '1.6', paddingLeft: 'var(--spacing-xl)' }}>
            <li>
              <strong>Sign up for Developer Account:</strong> Create a developer account at <a href="https://developers.zen-lyf.com">developers.zen-lyf.com</a>
            </li>
            <li>
              <strong>Create an Application:</strong> Register your application and get your API keys from the Developer Dashboard
            </li>
            <li>
              <strong>Install SDK:</strong> Choose the appropriate SDK for your platform and install it
            </li>
            <li>
              <strong>Read Documentation:</strong> Review the API documentation for the endpoints you need
            </li>
            <li>
              <strong>Start in Sandbox:</strong> Test your integration in our sandbox environment before going to production
            </li>
            <li>
              <strong>Request Production Access:</strong> Once your integration is ready, request production access
            </li>
          </ol>
          
          <p style={{ marginTop: 'var(--spacing-lg)' }}>
            Need help getting started? Our support team is available to assist with your integration.
            <br />
            <a href="mailto:api-support@zen-lyf.com">Contact API Support</a>
          </p>
        </motion.div>
      </SectionContainer>
      
    </PageContainer>
  );
};

export default APIDocumentationPage;

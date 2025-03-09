import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaApple, 
  FaGoogle, 
  FaMicrosoft, 
  FaAmazon, 
  FaHospital, 
  FaNetworkWired, 
  FaDatabase, 
  FaMobileAlt,
  FaLock,
  FaClipboardList,
  FaExchangeAlt,
  FaHeartbeat
} from 'react-icons/fa';
import { SiFitbit, SiGooglefit, SiSamsung, SiApple, SiHuawei, SiAmazonfiretv, SiAmazon, SiGoogle } from 'react-icons/si';
import { GiHealthNormal } from 'react-icons/gi';
import { MdSyncAlt, MdHealthAndSafety, MdWatchLater } from 'react-icons/md';
import { ImLab } from 'react-icons/im';
import IconWrapper from 'components/IconWrapper';

const IntegrationsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Define integration categories
  const categories = [
    { id: 'all', name: 'All Integrations' },
    { id: 'wearables', name: 'Wearable Devices' },
    { id: 'ehr', name: 'Healthcare Systems' },
    { id: 'cloud', name: 'Cloud Services' },
    { id: 'lab', name: 'Lab Systems' },
    { id: 'telehealth', name: 'Telehealth' }
  ];

  // Define integrations with their categories
  const integrations = [
    {
      id: 'apple-health',
      name: 'Apple Health',
      logo: <IconWrapper icon={SiApple} />,
      categories: ['wearables'],
      description: 'Sync health data from Apple Watch and iPhone, including heart rate, ECG, sleep, activity, and more.',
      features: [
        'Real-time sync of vital signs',
        'Activity and workout tracking',
        'Sleep analysis',
        'ECG and irregular rhythm notifications',
        'Fall detection alerts'
      ],
      primaryColor: '#000000',
      secondaryColor: '#f5f5f7'
    },
    {
      id: 'fitbit',
      name: 'Fitbit',
      logo: <IconWrapper icon={SiFitbit} />,
      categories: ['wearables'],
      description: 'Connect your Fitbit device to track activity, sleep patterns, and health metrics for comprehensive monitoring.',
      features: [
        'Continuous heart rate monitoring',
        'Sleep stage analysis',
        'Activity and exercise tracking',
        'Stress management scores',
        'SpO2 monitoring'
      ],
      primaryColor: '#00B0B9',
      secondaryColor: '#F0F0F0'
    },
    {
      id: 'google-fit',
      name: 'Google Fit',
      logo: <IconWrapper icon={SiGooglefit} />,
      categories: ['wearables'],
      description: 'Integrate with Google Fit to track fitness goals, heart points, and health data from compatible devices.',
      features: [
        'Heart Points and Move Minutes tracking',
        'Activity recognition',
        'Integration with hundreds of third-party apps',
        'Nutrition and hydration tracking',
        'Android Wear OS compatibility'
      ],
      primaryColor: '#4285F4',
      secondaryColor: '#E8F0FE'
    },
    {
      id: 'samsung-health',
      name: 'Samsung Health',
      logo: <IconWrapper icon={SiSamsung} />,
      categories: ['wearables'],
      description: 'Connect Samsung Galaxy Watches and phones to track comprehensive health and fitness data.',
      features: [
        'Blood pressure monitoring (with compatible devices)',
        'ECG monitoring',
        'Advanced sleep tracking',
        'Stress levels and guided breathing',
        'Samsung Galaxy Watch integration'
      ],
      primaryColor: '#1428A0',
      secondaryColor: '#E6F7FF'
    },
    {
      id: 'epic',
      name: 'Epic Systems',
      logo: <IconWrapper icon={FaHospital} />,
      categories: ['ehr'],
      description: 'Securely integrate with Epic EHR systems for seamless patient data sharing and interoperability.',
      features: [
        'FHIR-based API integration',
        'MyChart patient portal integration',
        'Care Everywhere network connectivity',
        'Secure health data exchange',
        'Real-time clinical updates'
      ],
      primaryColor: '#D72735',
      secondaryColor: '#F9F1F2'
    },
    {
      id: 'cerner',
      name: 'Cerner',
      logo: <IconWrapper icon={GiHealthNormal} />,
      categories: ['ehr'],
      description: 'Connect to Cerner EHR systems to enable streamlined healthcare data exchange and clinical workflows.',
      features: [
        'Millennium EHR integration',
        'PowerChart clinical data access',
        'HealtheIntent population health connectivity',
        'Secure patient data sharing',
        'Clinical decision support integration'
      ],
      primaryColor: '#007AC3',
      secondaryColor: '#E6F3FA'
    },
    {
      id: 'allscripts',
      name: 'Allscripts',
      logo: <IconWrapper icon={FaClipboardList} />,
      categories: ['ehr'],
      description: 'Integrate with Allscripts EHR solutions for unified patient records and clinical data exchange.',
      features: [
        'Sunrise Clinical Manager integration',
        'Professional EHR connectivity',
        'FollowMyHealth patient portal integration',
        'Veradigm analytics integration',
        'Prescription management'
      ],
      primaryColor: '#343741',
      secondaryColor: '#F2F2F3'
    },
    {
      id: 'aws-healthcare',
      name: 'AWS Healthcare',
      logo: <IconWrapper icon={SiAmazon} />,
      categories: ['cloud'],
      description: 'Leverage AWS healthcare services for secure, scalable storage and processing of health data.',
      features: [
        'HIPAA-compliant data storage',
        'AWS HealthLake integration',
        'Healthcare analytics with Amazon Comprehend Medical',
        'Scalable medical imaging storage',
        'Secure healthcare APIs'
      ],
      primaryColor: '#FF9900',
      secondaryColor: '#FFEFD9'
    },
    {
      id: 'google-cloud-healthcare',
      name: 'Google Cloud Healthcare',
      logo: <IconWrapper icon={SiGoogle} />,
      categories: ['cloud'],
      description: 'Connect to Google Cloud Healthcare APIs for advanced health data processing and analytics.',
      features: [
        'FHIR, HL7v2, and DICOM support',
        'Healthcare Natural Language API',
        'Healthcare data analytics',
        'Medical imaging AI integration',
        'HIPAA-compliant infrastructure'
      ],
      primaryColor: '#4285F4',
      secondaryColor: '#E8F0FE'
    },
    {
      id: 'azure-health',
      name: 'Microsoft Azure Health',
      logo: <IconWrapper icon={FaMicrosoft} />,
      categories: ['cloud'],
      description: 'Integrate with Microsoft Azure healthcare services for comprehensive health data management.',
      features: [
        'Azure API for FHIR',
        'Healthcare data analytics',
        'IoT health device connectivity',
        'Microsoft Cloud for Healthcare integration',
        'AI-powered health insights'
      ],
      primaryColor: '#0078D4',
      secondaryColor: '#E6F2FB'
    },
    {
      id: 'labcorp',
      name: 'Labcorp',
      logo: <IconWrapper icon={ImLab} />,
      categories: ['lab'],
      description: 'Connect with Labcorp systems to integrate laboratory test results and diagnostics.',
      features: [
        'Lab test results integration',
        'Automated results analysis',
        'Historical test comparison',
        'Abnormal result alerts',
        'Patient-friendly result explanations'
      ],
      primaryColor: '#005EB8',
      secondaryColor: '#E6F0FA'
    },
    {
      id: 'quest-diagnostics',
      name: 'Quest Diagnostics',
      logo: <IconWrapper icon={FaExchangeAlt} />,
      categories: ['lab'],
      description: 'Integrate Quest Diagnostics lab results for comprehensive health monitoring and analysis.',
      features: [
        'Secure lab results delivery',
        'Trend analysis of lab values',
        'Abnormal result identification',
        'In-app result visualization',
        'Natural language explanations of complex tests'
      ],
      primaryColor: '#006B54',
      secondaryColor: '#E6F5F0'
    },
    {
      id: 'teladoc',
      name: 'Teladoc',
      logo: <IconWrapper icon={FaMobileAlt} />,
      categories: ['telehealth'],
      description: 'Connect with Teladoc virtual care services for integrated telehealth consultations.',
      features: [
        'On-demand virtual consultations',
        'Health data sharing with providers',
        'Appointment scheduling',
        'Follow-up management',
        'Prescription integration'
      ],
      primaryColor: '#254998',
      secondaryColor: '#EBF0FA'
    },
    {
      id: 'amwell',
      name: 'Amwell',
      logo: <IconWrapper icon={MdHealthAndSafety} />,
      categories: ['telehealth'],
      description: 'Integrate Amwell telehealth services for virtual care coordination and remote monitoring.',
      features: [
        'Virtual visits integration',
        'Remote patient monitoring',
        'Specialist referrals',
        'Digital care plans',
        'Secure messaging with providers'
      ],
      primaryColor: '#1D5DAB',
      secondaryColor: '#EAF1F9'
    },
    {
      id: 'mdlive',
      name: 'MDLIVE',
      logo: <IconWrapper icon={MdWatchLater} />,
      categories: ['telehealth'],
      description: 'Connect with MDLIVE telehealth platform for virtual urgent care and behavioral health services.',
      features: [
        'Virtual urgent care integration',
        'Behavioral health consultations',
        'Health data sharing with providers',
        'Medication management',
        'Follow-up coordination'
      ],
      primaryColor: '#00B0E1',
      secondaryColor: '#E6F9FE'
    }
  ];

  // Filter integrations based on active category
  const filteredIntegrations = activeCategory === 'all' 
    ? integrations 
    : integrations.filter(integration => integration.categories.includes(activeCategory));

  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <HeroTitle>Integrations</HeroTitle>
          <HeroSubtitle>
            Connect ZEN-LYF with your favorite devices, healthcare systems, and services
            for a seamless health management experience
          </HeroSubtitle>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <IntegrationStats>
            <StatItem>
              <StatNumber>15+</StatNumber>
              <StatLabel>Wearable Devices</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>20+</StatNumber>
              <StatLabel>Healthcare Systems</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>10+</StatNumber>
              <StatLabel>Lab Networks</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>100%</StatNumber>
              <StatLabel>HIPAA Compliant</StatLabel>
            </StatItem>
          </IntegrationStats>
        </motion.div>
      </HeroSection>

      {/* Integration Categories */}
      <CategoriesSection>
        <CategoriesContainer>
          {categories.map(category => (
            <CategoryButton 
              key={category.id} 
              active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </CategoryButton>
          ))}
        </CategoriesContainer>
      </CategoriesSection>

      {/* Integrations Showcase */}
      <Section>
        <IntegrationsGrid>
          {filteredIntegrations.map(integration => (
            <IntegrationCard 
              key={integration.id}
              as={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              primaryColor={integration.primaryColor}
              secondaryColor={integration.secondaryColor}
            >
              <IntegrationLogoContainer primaryColor={integration.primaryColor}>
                <IntegrationLogo>
                  {integration.logo}
                </IntegrationLogo>
              </IntegrationLogoContainer>
              <IntegrationContent>
                <IntegrationName>{integration.name}</IntegrationName>
                <IntegrationDescription>
                  {integration.description}
                </IntegrationDescription>
                <IntegrationFeaturesList>
                  {integration.features.map((feature, index) => (
                    <IntegrationFeature key={index}>
                      {feature}
                    </IntegrationFeature>
                  ))}
                </IntegrationFeaturesList>
                <IntegrationButton primaryColor={integration.primaryColor}>
                  Connect
                </IntegrationButton>
              </IntegrationContent>
            </IntegrationCard>
          ))}
        </IntegrationsGrid>
      </Section>

      {/* Integration Process */}
      <ProcessSection>
        <SectionHeader>
          <SectionTitle>How Integration Works</SectionTitle>
          <SectionDescription>
            Setting up your integrations with ZEN-LYF is simple and secure
          </SectionDescription>
        </SectionHeader>

        <ProcessSteps
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <ProcessStep variants={fadeIn}>
            <ProcessIcon>
              <IconWrapper icon={FaMobileAlt} />
            </ProcessIcon>
            <ProcessContent>
              <ProcessTitle>Connect Your Account</ProcessTitle>
              <ProcessDescription>
                Select the service you want to connect and authorize ZEN-LYF to securely access your data using OAuth authentication.
              </ProcessDescription>
            </ProcessContent>
          </ProcessStep>

          <ProcessStep variants={fadeIn}>
            <ProcessIcon>
              <IconWrapper icon={MdSyncAlt} />
            </ProcessIcon>
            <ProcessContent>
              <ProcessTitle>Control Your Data</ProcessTitle>
              <ProcessDescription>
                Choose exactly what health data you want to share and sync with ZEN-LYF. You maintain complete control of your privacy settings.
              </ProcessDescription>
            </ProcessContent>
          </ProcessStep>

          <ProcessStep variants={fadeIn}>
            <ProcessIcon>
              <IconWrapper icon={FaHeartbeat} />
            </ProcessIcon>
            <ProcessContent>
              <ProcessTitle>Experience Unified Health</ProcessTitle>
              <ProcessDescription>
                Your data from different sources is combined into a comprehensive health profile, providing deeper insights and seamless monitoring.
              </ProcessDescription>
            </ProcessContent>
          </ProcessStep>

          <ProcessStep variants={fadeIn}>
            <ProcessIcon>
              <IconWrapper icon={FaLock} />
            </ProcessIcon>
            <ProcessContent>
              <ProcessTitle>Benefit From Secure Sharing</ProcessTitle>
              <ProcessDescription>
                Securely share selected health information with healthcare providers, caregivers, or family members as needed.
              </ProcessDescription>
            </ProcessContent>
          </ProcessStep>
        </ProcessSteps>
      </ProcessSection>

      {/* Enterprise Integration */}
      <EnterpriseSection>
        <EnterpriseContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <EnterpriseTitle>Enterprise Integration Solutions</EnterpriseTitle>
            <EnterpriseDescription>
              For healthcare providers, hospitals, and enterprise organizations looking to integrate 
              ZEN-LYF into their existing systems, we offer custom integration solutions and 
              dedicated support.
            </EnterpriseDescription>
            <EnterpriseFeatures>
              <EnterpriseFeature>
                <FeatureIcon><IconWrapper icon={FaNetworkWired} /></FeatureIcon>
                <FeatureText>Custom API integration with existing healthcare systems</FeatureText>
              </EnterpriseFeature>
              <EnterpriseFeature>
                <FeatureIcon><IconWrapper icon={FaDatabase} /></FeatureIcon>
                <FeatureText>Secure data migration and synchronization</FeatureText>
              </EnterpriseFeature>
              <EnterpriseFeature>
                <FeatureIcon><IconWrapper icon={FaHospital} /></FeatureIcon>
                <FeatureText>Integration with hospital information systems</FeatureText>
              </EnterpriseFeature>
              <EnterpriseFeature>
                <FeatureIcon><IconWrapper icon={FaLock} /></FeatureIcon>
                <FeatureText>HIPAA-compliant security and data protection</FeatureText>
              </EnterpriseFeature>
            </EnterpriseFeatures>
            <EnterpriseButton>Contact Enterprise Sales</EnterpriseButton>
          </motion.div>
        </EnterpriseContent>
        <EnterpriseImageContainer>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <EnterpriseImage src="/assets/enterprise-integration.png" alt="Enterprise Integration" />
          </motion.div>
        </EnterpriseImageContainer>
      </EnterpriseSection>

      {/* Integration Security */}
      <SecuritySection>
        <SectionHeader>
          <SectionTitle>Security & Compliance</SectionTitle>
          <SectionDescription>
            Your health data security and privacy are our top priorities
          </SectionDescription>
        </SectionHeader>

        <SecurityGrid>
          <SecurityCard
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SecurityIcon><IconWrapper icon={FaLock} /></SecurityIcon>
            <SecurityTitle>HIPAA Compliance</SecurityTitle>
            <SecurityDescription>
              All integrations adhere to HIPAA regulations, ensuring your health data is handled according to the strictest healthcare privacy standards.
            </SecurityDescription>
          </SecurityCard>

          <SecurityCard
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SecurityIcon><IconWrapper icon={FaExchangeAlt} /></SecurityIcon>
            <SecurityTitle>Secure Data Transfer</SecurityTitle>
            <SecurityDescription>
              All data is encrypted in transit and at rest using industry-leading encryption protocols to ensure your information remains secure.
            </SecurityDescription>
          </SecurityCard>

          <SecurityCard
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SecurityIcon><IconWrapper icon={FaMobileAlt} /></SecurityIcon>
            <SecurityTitle>User Controlled Access</SecurityTitle>
            <SecurityDescription>
              You control exactly what data is shared with each integration, with transparent permission settings that can be changed at any time.
            </SecurityDescription>
          </SecurityCard>

          <SecurityCard
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SecurityIcon><IconWrapper icon={FaDatabase} /></SecurityIcon>
            <SecurityTitle>Regular Audits</SecurityTitle>
            <SecurityDescription>
              Our systems undergo regular security audits and compliance assessments to ensure the highest standards of data protection.
            </SecurityDescription>
          </SecurityCard>
        </SecurityGrid>
      </SecuritySection>

      {/* CTA Section */}
      <CTASection>
        <CTAContent>
          <CTATitle>Ready to Connect Your Health Ecosystem?</CTATitle>
          <CTADescription>
            Start integrating your devices and healthcare services with ZEN-LYF
          </CTADescription>
          <CTAButtons>
            <PrimaryButton>Get Started</PrimaryButton>
            <SecondaryButton>View Documentation</SecondaryButton>
          </CTAButtons>
        </CTAContent>
      </CTASection>
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  max-width: 100%;
  overflow-x: hidden;
  color: #333;
  font-family: 'Inter', sans-serif;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #0a2463 0%, #3e92cc 100%);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #ffffff, #a6d8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const IntegrationStats = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 12px;
  min-width: 150px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    min-width: 120px;
    padding: 1rem;
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  background: linear-gradient(to right, #ffffff, #a6d8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  opacity: 0.9;
`;

const CategoriesSection = styled.section`
  padding: 2rem;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 10;
`;

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const CategoryButton = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  background: ${props => props.active ? '#3e92cc' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  border: 1px solid ${props => props.active ? '#3e92cc' : '#e0e0e0'};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background: ${props => props.active ? '#3e92cc' : '#f5f5f5'};
  }
`;

const Section = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const IntegrationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const IntegrationCard = styled.div<{ primaryColor: string, secondaryColor: string }>`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-top: 5px solid ${props => props.primaryColor};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  }
`;

const IntegrationLogoContainer = styled.div<{ primaryColor: string }>`
  background: ${props => props.primaryColor};
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IntegrationLogo = styled.div`
  font-size: 3rem;
  color: white;
`;

const IntegrationContent = styled.div`
  padding: 2rem;
`;

const IntegrationName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #0a2463;
`;

const IntegrationDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;
`;

const IntegrationFeaturesList = styled.ul`
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
`;

const IntegrationFeature = styled.li`
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  color: #555;
`;

const IntegrationButton = styled.button<{ primaryColor: string }>`
  background: ${props => props.primaryColor};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
  }
`;

const ProcessSection = styled.section`
  padding: 5rem 2rem;
  background: #f8f9fa;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #0a2463;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  color: #666;
  line-height: 1.6;
`;

const ProcessSteps = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 992px) {
    flex-direction: column;
    max-width: 600px;
  }
`;

const ProcessStep = styled(motion.div)`
  flex: 1;
  min-width: 200px;
  max-width: 250px;
  text-align: center;

  @media (max-width: 992px) {
    max-width: none;
    display: flex;
    text-align: left;
  }
`;

const ProcessIcon = styled.div`
  font-size: 3rem;
  color: #3e92cc;
  margin-bottom: 1.5rem;

  @media (max-width: 992px) {
    margin-right: 1.5rem;
    margin-bottom: 0;
  }
`;

const ProcessContent = styled.div`
  @media (max-width: 992px) {
    flex: 1;
  }
`;

const ProcessTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #0a2463;
`;

const ProcessDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #555;
`;

const EnterpriseSection = styled.section`
  padding: 5rem 2rem;
  background: white;
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const EnterpriseContent = styled.div`
  flex: 1;
  padding-right: 3rem;

  @media (max-width: 992px) {
    padding-right: 0;
    margin-bottom: 3rem;
  }
`;

const EnterpriseTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #0a2463;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const EnterpriseDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 2rem;
`;

const EnterpriseFeatures = styled.div`
  margin-bottom: 2rem;
`;

const EnterpriseFeature = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const FeatureIcon = styled.div`
  font-size: 1.5rem;
  color: #3e92cc;
  margin-right: 1rem;
  min-width: 24px;
`;

const FeatureText = styled.div`
  font-size: 1rem;
  color: #555;
`;

const EnterpriseButton = styled.button`
  background: #0a2463;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #3e92cc;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(62, 146, 204, 0.3);
  }
`;

const EnterpriseImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EnterpriseImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;

const SecuritySection = styled.section`
  padding: 5rem 2rem;
  background: #f8f9fa;
`;

const SecurityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SecurityCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SecurityIcon = styled.div`
  font-size: 2.5rem;
  color: #3e92cc;
  margin-bottom: 1.5rem;
`;

const SecurityTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #0a2463;
`;

const SecurityDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
`;

const CTASection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #0a2463 0%, #3e92cc 100%);
  text-align: center;
  color: white;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled.button`
  background: white;
  color: #0a2463;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

export default IntegrationsPage; 
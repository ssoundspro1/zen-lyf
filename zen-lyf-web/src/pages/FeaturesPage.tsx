import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import IconWrapper from 'components/IconWrapper';
import { HiLightningBolt, HiChartBar, HiShieldCheck, HiCloudUpload } from 'react-icons/hi';

const FeaturesPage: React.FC = () => {
  // Track which category is active for filtering
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Define feature categories
  const categories = [
    { id: 'all', name: 'All Features' },
    { id: 'post-op', name: 'Post-Op Care' },
    { id: 'monitoring', name: 'Health Monitoring' },
    { id: 'ai', name: 'AI Analysis' },
    { id: 'wearables', name: 'Wearable Tech' },
    { id: 'emergency', name: 'Emergency Care' },
    { id: 'wellness', name: 'Mental Wellness' }
  ];

  // Define all features with their categories
  const features = [
    {
      id: 1,
      title: 'AI Medical Report Analysis',
      description: 'Upload medical reports, X-rays, MRIs, and CT scans for instant AI analysis and plain-language explanations of complex medical terminology.',
      icon: '🔬',
      categories: ['ai'],
      highlight: true
    },
    {
      id: 2,
      title: 'Wearable Integration',
      description: 'Seamlessly connect your Apple Watch, Fitbit, or Google Fit to track vital signs, activity, and sleep patterns with automated health alerts.',
      icon: '⌚',
      categories: ['wearables', 'monitoring'],
      highlight: true
    },
    {
      id: 3,
      title: 'Personalized Recovery Plans',
      description: 'Receive customized recovery guidance based on your specific procedure, health history, and real-time progress metrics.',
      icon: '📈',
      categories: ['post-op'],
      highlight: true
    },
    {
      id: 4,
      title: 'Medication Management',
      description: 'Smart reminders, adherence tracking, and interaction warnings ensure you stay on track with medications and avoid complications.',
      icon: '💊',
      categories: ['post-op'],
      highlight: false
    },
    {
      id: 5,
      title: 'Fall Detection & Emergency Alerts',
      description: 'Automatic detection of falls or abnormal vital signs triggers immediate alerts to emergency contacts with your location and health data.',
      icon: '🚨',
      categories: ['emergency', 'wearables'],
      highlight: false
    },
    {
      id: 6,
      title: 'Healthcare Provider Sharing',
      description: 'Securely share selected health data, recovery progress, and medical reports with your doctors for better coordinated care.',
      icon: '🏥',
      categories: ['post-op', 'monitoring'],
      highlight: false
    },
    {
      id: 7,
      title: 'AI-Guided Exercises',
      description: 'Follow video-guided rehabilitation exercises with real-time feedback on form and intensity based on your recovery stage.',
      icon: '🏋️‍♂️',
      categories: ['post-op', 'ai'],
      highlight: false
    },
    {
      id: 8,
      title: 'Vital Signs Monitoring',
      description: 'Track heart rate, blood pressure, oxygen levels, and other critical health metrics with personalized normal ranges and trend analysis.',
      icon: '❤️',
      categories: ['monitoring', 'wearables'],
      highlight: false
    },
    {
      id: 9,
      title: 'Pain & Symptom Tracking',
      description: 'Log and monitor pain levels, symptoms, and side effects with AI pattern recognition to identify potential complications early.',
      icon: '📊',
      categories: ['post-op', 'monitoring', 'ai'],
      highlight: false
    },
    {
      id: 10,
      title: 'Wellness Meditations & Exercises',
      description: 'Access guided meditations, breathing exercises, and mental health activities tailored to your recovery needs and stress levels.',
      icon: '🧘',
      categories: ['wellness'],
      highlight: false
    },
    {
      id: 11,
      title: 'Sleep Quality Analysis',
      description: 'Track sleep patterns with detailed metrics on quality, duration, and disturbances, plus personalized improvement suggestions.',
      icon: '😴',
      categories: ['wellness', 'monitoring', 'ai'],
      highlight: false
    },
    {
      id: 12,
      title: 'Caregiver Monitoring',
      description: 'Allow family members or caregivers to remotely monitor your recovery progress and receive alerts about important changes.',
      icon: '👨‍👩‍👧',
      categories: ['post-op', 'emergency'],
      highlight: false
    },
    {
      id: 13,
      title: 'Nutrition Guidance',
      description: 'Receive personalized nutritional recommendations based on your recovery needs, health conditions, and healing progress.',
      icon: '🥗',
      categories: ['wellness', 'post-op'],
      highlight: false
    },
    {
      id: 14,
      title: 'Recovery Milestone Tracking',
      description: 'Visualize your healing journey with achievement-based milestones and celebration of progress to keep you motivated.',
      icon: '🏆',
      categories: ['post-op', 'wellness'],
      highlight: false
    },
    {
      id: 15,
      title: 'Mental Health Monitoring',
      description: 'AI-powered detection of anxiety, depression, and stress through activity patterns, sleep changes, and optional check-ins.',
      icon: '🧠',
      categories: ['wellness', 'ai'],
      highlight: false
    },
    {
      id: 16,
      title: 'Voice-Assisted Health Checks',
      description: 'Perform hands-free daily health check-ins using voice commands for convenience during limited mobility or recovery.',
      icon: '🎤',
      categories: ['monitoring', 'post-op'],
      highlight: false
    },
    {
      id: 17,
      title: 'Environmental Health Factors',
      description: 'Track environmental factors affecting recovery like air quality, temperature, and humidity through smart home integrations.',
      icon: '🏠',
      categories: ['monitoring', 'wearables'],
      highlight: false
    },
    {
      id: 18,
      title: 'Health Data Encryption',
      description: 'Enterprise-grade security with end-to-end encryption and HIPAA compliance ensuring your sensitive health data remains private.',
      icon: '🔐',
      categories: ['post-op', 'monitoring'],
      highlight: false
    }
  ];

  // Filter features based on active category
  const filteredFeatures = activeCategory === 'all' 
    ? features 
    : features.filter(feature => feature.categories.includes(activeCategory));

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HeroTitle>Powerful Features for Complete Health Management</HeroTitle>
          <HeroSubtitle>
            Discover how ZEN-LYF AI creates a seamless bridge from hospital to home with innovative, 
            AI-driven health tools designed for your recovery and wellness journey
          </HeroSubtitle>
        </motion.div>
      </HeroSection>

      {/* Highlight Features Section */}
      <HighlightFeaturesSection>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>Key Capabilities</SectionTitle>
            <SectionDescription>
              Our platform offers powerful features designed to transform healthcare delivery and patient outcomes
            </SectionDescription>
          </SectionHeader>
          
          <HighlightGrid>
            <HighlightItem>
              <HighlightIcon>
                <IconWrapper icon={HiChartBar} size={32} />
              </HighlightIcon>
              <HighlightContent>
                <HighlightTitle>Advanced Analytics</HighlightTitle>
                <HighlightDescription>
                  Comprehensive health data visualization and trend analysis for informed decision making
                </HighlightDescription>
              </HighlightContent>
            </HighlightItem>
            
            <HighlightItem>
              <HighlightIcon>
                <IconWrapper icon={HiShieldCheck} size={32} />
              </HighlightIcon>
              <HighlightContent>
                <HighlightTitle>HIPAA Compliant</HighlightTitle>
                <HighlightDescription>
                  Enterprise-grade security ensuring your health data remains private and protected
                </HighlightDescription>
              </HighlightContent>
            </HighlightItem>
            
            <HighlightItem>
              <HighlightIcon>
                <IconWrapper icon={HiCloudUpload} size={32} />
              </HighlightIcon>
              <HighlightContent>
                <HighlightTitle>Seamless Integration</HighlightTitle>
                <HighlightDescription>
                  Connect with existing healthcare systems and wearable devices with minimal setup
                </HighlightDescription>
              </HighlightContent>
            </HighlightItem>
          </HighlightGrid>
        </SectionContainer>
      </HighlightFeaturesSection>

      {/* Filter Categories Section */}
      <CategoriesSection>
        <SectionContainer>
          <CategoryTabs>
            {categories.map(category => (
              <CategoryTab
                key={category.id}
                active={category.id === activeCategory}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </CategoryTab>
            ))}
          </CategoryTabs>
        </SectionContainer>
      </CategoriesSection>

      {/* All Features Grid Section */}
      <FeaturesSection>
        <SectionContainer>
          <FeaturesGrid
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredFeatures.map(feature => (
              <FeatureCard
                key={feature.id}
                as={motion.div}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
              >
                <FeatureIconContainer>
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                </FeatureIconContainer>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
                <FeatureCategories>
                  {feature.categories.map(cat => {
                    const categoryObj = categories.find(c => c.id === cat);
                    return categoryObj ? (
                      <FeatureCategory key={cat}>
                        {categoryObj.name}
                      </FeatureCategory>
                    ) : null;
                  })}
                </FeatureCategories>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </SectionContainer>
      </FeaturesSection>

      {/* Integration Partners Section */}
      <PartnersSection>
        <SectionContainer>
          <CategorySectionTitle>Seamless Integration Partners</CategorySectionTitle>
          <SectionSubtitle>
            ZEN-LYF connects with your favorite devices and services for a complete health ecosystem
          </SectionSubtitle>
          
          <PartnersGrid>
            <PartnerCategory>
              <PartnerCategoryTitle>Wearable Devices</PartnerCategoryTitle>
              <PartnerLogos>
                <PartnerLogo>
                  <PartnerIcon>⌚</PartnerIcon>
                  <PartnerName>Apple Watch</PartnerName>
                </PartnerLogo>
                <PartnerLogo>
                  <PartnerIcon>⌚</PartnerIcon>
                  <PartnerName>Fitbit</PartnerName>
                </PartnerLogo>
                <PartnerLogo>
                  <PartnerIcon>⌚</PartnerIcon>
                  <PartnerName>Google Fit</PartnerName>
                </PartnerLogo>
                <PartnerLogo>
                  <PartnerIcon>⌚</PartnerIcon>
                  <PartnerName>Samsung Health</PartnerName>
                </PartnerLogo>
              </PartnerLogos>
            </PartnerCategory>
            
            <PartnerCategory>
              <PartnerCategoryTitle>Healthcare Systems</PartnerCategoryTitle>
              <PartnerLogos>
                <PartnerLogo>
                  <PartnerIcon>🏥</PartnerIcon>
                  <PartnerName>Epic</PartnerName>
                </PartnerLogo>
                <PartnerLogo>
                  <PartnerIcon>🏥</PartnerIcon>
                  <PartnerName>Cerner</PartnerName>
                </PartnerLogo>
                <PartnerLogo>
                  <PartnerIcon>🏥</PartnerIcon>
                  <PartnerName>Allscripts</PartnerName>
                </PartnerLogo>
                <PartnerLogo>
                  <PartnerIcon>🏥</PartnerIcon>
                  <PartnerName>MEDITECH</PartnerName>
                </PartnerLogo>
              </PartnerLogos>
            </PartnerCategory>
            
            <PartnerCategory>
              <PartnerCategoryTitle>Smart Home</PartnerCategoryTitle>
              <PartnerLogos>
                <PartnerLogo>
                  <PartnerIcon>🏠</PartnerIcon>
                  <PartnerName>Apple HomeKit</PartnerName>
                </PartnerLogo>
                <PartnerLogo>
                  <PartnerIcon>🏠</PartnerIcon>
                  <PartnerName>Google Home</PartnerName>
                </PartnerLogo>
                <PartnerLogo>
                  <PartnerIcon>🏠</PartnerIcon>
                  <PartnerName>Amazon Alexa</PartnerName>
                </PartnerLogo>
                <PartnerLogo>
                  <PartnerIcon>🏠</PartnerIcon>
                  <PartnerName>Samsung SmartThings</PartnerName>
                </PartnerLogo>
              </PartnerLogos>
            </PartnerCategory>
          </PartnersGrid>
        </SectionContainer>
      </PartnersSection>

      {/* CTA Section */}
      <CTASection>
        <SectionContainer>
          <CTAContent>
            <CTATitle>Ready to Transform Your Health Journey?</CTATitle>
            <CTADescription>
              Join thousands of patients experiencing better recovery outcomes and improved wellness
            </CTADescription>
            <CTAButtons>
              <PrimaryButton to="/signup">Get Started</PrimaryButton>
              <SecondaryButton to="/contact">Contact Sales</SecondaryButton>
            </CTAButtons>
          </CTAContent>
        </SectionContainer>
      </CTASection>
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  padding: 100px 24px;
  text-align: center;
  background: linear-gradient(135deg, #1a237e 0%, #1e88e5 100%);
  color: white;
  
  @media (max-width: 768px) {
    padding: 80px 24px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 24px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 20px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const HighlightFeaturesSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(120deg, #f0f5ff 0%, #ffffff 100%);
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 800;
  color: #0f2b5b;
  margin-bottom: 16px;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #4f46e5, #3b82f6);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const SectionDescription = styled.p`
  font-size: 18px;
  color: #334155;
  max-width: 700px;
  margin: 30px auto 0;
  line-height: 1.7;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 40px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const HighlightItem = styled.div`
  display: flex;
  gap: 24px;
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const HighlightIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  flex-shrink: 0;
  box-shadow: 0 8px 15px rgba(59, 130, 246, 0.2);
`;

const HighlightContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const HighlightTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #0f2b5b;
  margin-bottom: 12px;
`;

const HighlightDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #334155;
`;

const CategoriesSection = styled.section`
  padding: 40px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

const CategoryTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`;

const CategoryTab = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  background: ${props => props.active ? '#1e88e5' : 'rgba(0, 0, 0, 0.05)'};
  color: ${props => props.active ? 'white' : '#334155'};
  border: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#1976d2' : 'rgba(0, 0, 0, 0.1)'};
  }
`;

const FeaturesSection = styled.section`
  padding: 80px 0;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const FeatureIcon = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #f5f7ff 0%, #e6f0ff 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

const FeatureTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 12px;
`;

const FeatureDescription = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: #64748b;
  flex-grow: 1;
  margin-bottom: 16px;
`;

const FeatureCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
`;

const FeatureCategory = styled.span`
  padding: 4px 10px;
  background: #eef2ff;
  color: #4f46e5;
  font-size: 12px;
  font-weight: 600;
  border-radius: 30px;
`;

const PartnersSection = styled.section`
  padding: 80px 0;
  background: #f8fafc;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const CategorySectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #1e3a8a;
  text-align: center;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 18px;
  color: #64748b;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 48px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const PartnerCategory = styled.div``;

const PartnerCategoryTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #1e3a8a;
  margin-bottom: 24px;
  text-align: center;
`;

const PartnerLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const PartnerLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const PartnerIcon = styled.div`
  font-size: 32px;
`;

const PartnerName = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #334155;
`;

const CTASection = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #1a237e 0%, #1e88e5 100%);
  color: white;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const CTAContent = styled.div`
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const CTADescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 32px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-block;
  padding: 16px 32px;
  background: white;
  color: #1e88e5;
  font-weight: 600;
  font-size: 16px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-block;
  padding: 16px 32px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-weight: 600;
  font-size: 16px;
  border-radius: 8px;
  text-decoration: none;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
  }
`;

export default FeaturesPage; 
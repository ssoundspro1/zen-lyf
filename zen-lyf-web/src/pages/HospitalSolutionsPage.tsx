import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HospitalSolutionsPage: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HeroTitle>
              Transform Patient Care with AI-Powered Solutions
            </HeroTitle>
            <HeroSubtitle>
              ZEN-LYF AI empowers hospitals and healthcare providers with advanced tools to improve patient outcomes, reduce readmissions, and streamline care management.
            </HeroSubtitle>
            <HeroButtons>
              <PrimaryButton to="/hospital-login">Enterprise Login</PrimaryButton>
              <SecondaryButton to="/contact">Schedule Demo</SecondaryButton>
            </HeroButtons>
          </motion.div>
        </HeroContent>
        <HeroImageContainer>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroImage src="/images/hospital-dashboard-mockup.png" alt="ZEN-LYF Hospital Dashboard" />
          </motion.div>
        </HeroImageContainer>
      </HeroSection>

      {/* Key Benefits Section */}
      <SectionContainer>
        <SectionTitle>How ZEN-LYF Benefits Your Hospital</SectionTitle>
        <SectionSubtitle>
          Our comprehensive platform helps healthcare providers deliver exceptional care while reducing costs and administrative burden
        </SectionSubtitle>
        
        <BenefitsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <BenefitCard as={motion.div} variants={itemVariants}>
            <BenefitIcon>📉</BenefitIcon>
            <BenefitTitle>Reduce Readmissions</BenefitTitle>
            <BenefitDescription>
              Lower readmission rates by 35% with continuous remote monitoring, AI-driven recovery plans, and automated intervention alerts.
            </BenefitDescription>
          </BenefitCard>
          
          <BenefitCard as={motion.div} variants={itemVariants}>
            <BenefitIcon>⏱️</BenefitIcon>
            <BenefitTitle>Save Staff Time</BenefitTitle>
            <BenefitDescription>
              Automate routine follow-ups and monitoring, saving your medical staff up to 15 hours per week while improving patient satisfaction.
            </BenefitDescription>
          </BenefitCard>
          
          <BenefitCard as={motion.div} variants={itemVariants}>
            <BenefitIcon>📱</BenefitIcon>
            <BenefitTitle>Remote Monitoring</BenefitTitle>
            <BenefitDescription>
              Track patient vitals, medication adherence, and recovery progress in real-time through integrated wearable devices and our secure platform.
            </BenefitDescription>
          </BenefitCard>
          
          <BenefitCard as={motion.div} variants={itemVariants}>
            <BenefitIcon>💯</BenefitIcon>
            <BenefitTitle>Improve HCAHPS Scores</BenefitTitle>
            <BenefitDescription>
              Enhance patient experience and satisfaction metrics with personalized care plans and ongoing support beyond hospital walls.
            </BenefitDescription>
          </BenefitCard>
          
          <BenefitCard as={motion.div} variants={itemVariants}>
            <BenefitIcon>📊</BenefitIcon>
            <BenefitTitle>Data-Driven Insights</BenefitTitle>
            <BenefitDescription>
              Access comprehensive analytics on patient outcomes, care effectiveness, and operational efficiency to continuously improve care protocols.
            </BenefitDescription>
          </BenefitCard>
          
          <BenefitCard as={motion.div} variants={itemVariants}>
            <BenefitIcon>🔒</BenefitIcon>
            <BenefitTitle>HIPAA Compliant</BenefitTitle>
            <BenefitDescription>
              Rest assured with enterprise-grade security, complete HIPAA compliance, and comprehensive audit trails for all patient interactions.
            </BenefitDescription>
          </BenefitCard>
        </BenefitsGrid>
      </SectionContainer>

      {/* ROI Statistics Section */}
      <StatisticsSection>
        <SectionTitle light>Proven Results for Healthcare Providers</SectionTitle>
        <SectionSubtitle light>
          ZEN-LYF delivers measurable improvements in key healthcare metrics
        </SectionSubtitle>

        <StatisticsGrid>
          <StatisticCard>
            <StatisticValue>35%</StatisticValue>
            <StatisticLabel>Reduction in 30-day Readmissions</StatisticLabel>
          </StatisticCard>
          
          <StatisticCard>
            <StatisticValue>42%</StatisticValue>
            <StatisticLabel>Improvement in Medication Adherence</StatisticLabel>
          </StatisticCard>
          
          <StatisticCard>
            <StatisticValue>$1.2M</StatisticValue>
            <StatisticLabel>Average Annual Savings for Hospitals</StatisticLabel>
          </StatisticCard>
          
          <StatisticCard>
            <StatisticValue>22%</StatisticValue>
            <StatisticLabel>Increase in HCAHPS Scores</StatisticLabel>
          </StatisticCard>
        </StatisticsGrid>
      </StatisticsSection>

      {/* Features Section */}
      <SectionContainer alternate>
        <SectionTitle>Enterprise-Grade Features</SectionTitle>
        <SectionSubtitle>
          Explore the powerful platform that's transforming hospital care management
        </SectionSubtitle>

        <FeaturesList>
          <FeatureItem
            as={motion.div}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FeatureContent>
              <FeatureTitle>Comprehensive Patient Monitoring</FeatureTitle>
              <FeatureDescription>
                Monitor patients' recovery progress in real-time with automated data collection from wearable devices. Track vital signs, physical activity, medication adherence, and symptom reports through our intuitive dashboard.
              </FeatureDescription>
              <FeatureList>
                <FeatureListItem>Real-time vital sign monitoring</FeatureListItem>
                <FeatureListItem>Automated alert system for abnormal patterns</FeatureListItem>
                <FeatureListItem>Customizable thresholds by patient condition</FeatureListItem>
                <FeatureListItem>Multi-device support (Apple Watch, Fitbit, etc.)</FeatureListItem>
              </FeatureList>
            </FeatureContent>
            <FeatureImageContainer>
              <FeatureImage src="/images/patient-monitoring.png" alt="Patient Monitoring Dashboard" />
            </FeatureImageContainer>
          </FeatureItem>

          <FeatureItem
            as={motion.div}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            reverse
          >
            <FeatureContent>
              <FeatureTitle>AI Hospital Assistant</FeatureTitle>
              <FeatureDescription>
                Streamline hospital operations with our AI-powered administrative assistant that handles routine inquiries, manages schedules, and automates documentation. Free up your staff to focus on patient care while improving operational efficiency.
              </FeatureDescription>
              <FeatureList>
                <FeatureListItem>Automated patient follow-up scheduling</FeatureListItem>
                <FeatureListItem>AI-powered triage and prioritization</FeatureListItem>
                <FeatureListItem>Intelligent staff resource allocation</FeatureListItem>
                <FeatureListItem>Automated documentation and reporting</FeatureListItem>
              </FeatureList>
            </FeatureContent>
            <FeatureImageContainer>
              <FeatureImage src="/images/ai-hospital-assistant.png" alt="AI Hospital Assistant" />
            </FeatureImageContainer>
          </FeatureItem>

          <FeatureItem
            as={motion.div}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FeatureContent>
              <FeatureTitle>Advanced Analytics Dashboard</FeatureTitle>
              <FeatureDescription>
                Gain valuable insights into patient outcomes, operational efficiency, and care quality through our comprehensive analytics dashboard. Identify trends, track performance metrics, and make data-driven decisions to optimize hospital resources.
              </FeatureDescription>
              <FeatureList>
                <FeatureListItem>Customizable KPI tracking and reporting</FeatureListItem>
                <FeatureListItem>Predictive analytics for resource planning</FeatureListItem>
                <FeatureListItem>Comparative benchmarking with similar facilities</FeatureListItem>
                <FeatureListItem>Exportable reports for board meetings and accreditation</FeatureListItem>
              </FeatureList>
            </FeatureContent>
            <FeatureImageContainer>
              <FeatureImage src="/images/analytics-dashboard.png" alt="Analytics Dashboard" />
            </FeatureImageContainer>
          </FeatureItem>
        </FeaturesList>
      </SectionContainer>

      {/* Integration Section */}
      <IntegrationSection>
        <SectionTitle>Seamless Integration with Your Systems</SectionTitle>
        <SectionSubtitle>
          ZEN-LYF easily connects with your existing healthcare infrastructure
        </SectionSubtitle>

        <IntegrationLogos
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <IntegrationLogo as={motion.div} variants={itemVariants}>
            <IntegrationIcon src="/images/epic-logo.png" alt="Epic Integration" />
            <IntegrationName>Epic</IntegrationName>
          </IntegrationLogo>
          
          <IntegrationLogo as={motion.div} variants={itemVariants}>
            <IntegrationIcon src="/images/cerner-logo.png" alt="Cerner Integration" />
            <IntegrationName>Cerner</IntegrationName>
          </IntegrationLogo>
          
          <IntegrationLogo as={motion.div} variants={itemVariants}>
            <IntegrationIcon src="/images/allscripts-logo.png" alt="Allscripts Integration" />
            <IntegrationName>Allscripts</IntegrationName>
          </IntegrationLogo>
          
          <IntegrationLogo as={motion.div} variants={itemVariants}>
            <IntegrationIcon src="/images/meditech-logo.png" alt="Meditech Integration" />
            <IntegrationName>Meditech</IntegrationName>
          </IntegrationLogo>
          
          <IntegrationLogo as={motion.div} variants={itemVariants}>
            <IntegrationIcon src="/images/hl7-logo.png" alt="HL7 FHIR Integration" />
            <IntegrationName>HL7 FHIR</IntegrationName>
          </IntegrationLogo>
          
          <IntegrationLogo as={motion.div} variants={itemVariants}>
            <IntegrationIcon src="/images/athenahealth-logo.png" alt="athenahealth Integration" />
            <IntegrationName>athenahealth</IntegrationName>
          </IntegrationLogo>
        </IntegrationLogos>

        <IntegrationDescription>
          Our platform offers robust API connections, HL7 FHIR compatibility, and pre-built integrations with all major EHR systems. Our implementation team will work with your IT department to ensure a smooth deployment with minimal disruption to your existing workflows.
        </IntegrationDescription>
      </IntegrationSection>

      {/* Testimonials Section */}
      <SectionContainer>
        <SectionTitle>Trusted by Leading Healthcare Providers</SectionTitle>
        <SectionSubtitle>
          Hear from hospitals and clinics that have transformed patient care with ZEN-LYF
        </SectionSubtitle>

        <TestimonialsContainer
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <TestimonialCard as={motion.div} variants={itemVariants}>
            <TestimonialQuote>"ZEN-LYF has revolutionized our post-operative care. We've seen a 38% reduction in readmissions and significantly improved patient satisfaction scores. The ROI has been remarkable."</TestimonialQuote>
            <TestimonialAuthor>
              <TestimonialName>Dr. Sarah Johnson</TestimonialName>
              <TestimonialDetail>Chief Medical Officer, Memorial Healthcare</TestimonialDetail>
            </TestimonialAuthor>
          </TestimonialCard>

          <TestimonialCard as={motion.div} variants={itemVariants}>
            <TestimonialQuote>"The analytics dashboard gives us unprecedented visibility into patient recovery trends. We've been able to optimize our protocols based on real data, improving outcomes while reducing costs."</TestimonialQuote>
            <TestimonialAuthor>
              <TestimonialName>Mark Thompson</TestimonialName>
              <TestimonialDetail>Director of Operations, University Medical Center</TestimonialDetail>
            </TestimonialAuthor>
          </TestimonialCard>

          <TestimonialCard as={motion.div} variants={itemVariants}>
            <TestimonialQuote>"Implementation was surprisingly smooth. The ZEN-LYF team integrated with our Epic system within weeks, and the training for our staff was comprehensive yet efficient. The ROI was evident within the first quarter."</TestimonialQuote>
            <TestimonialAuthor>
              <TestimonialName>Jennifer Williams</TestimonialName>
              <TestimonialDetail>CIO, Riverside Health System</TestimonialDetail>
            </TestimonialAuthor>
          </TestimonialCard>
        </TestimonialsContainer>
      </SectionContainer>

      {/* CTA Section */}
      <CTASection>
        <CTAContent>
          <CTATitle>Ready to Transform Your Hospital's Care Delivery?</CTATitle>
          <CTADescription>
            Join leading healthcare institutions that are using ZEN-LYF to improve patient outcomes, reduce costs, and enhance operational efficiency.
          </CTADescription>
          <CTAButtons>
            <CTAPrimaryButton to="/contact">Request a Demo</CTAPrimaryButton>
            <CTASecondaryButton to="/pricing">View Enterprise Plans</CTASecondaryButton>
          </CTAButtons>
        </CTAContent>
      </CTASection>

      {/* FAQ Section */}
      <SectionContainer alternate>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <SectionSubtitle>
          Common questions about ZEN-LYF for hospitals and healthcare providers
        </SectionSubtitle>

        <FAQContainer>
          <FAQItem>
            <FAQQuestion>How long does implementation typically take?</FAQQuestion>
            <FAQAnswer>
              For most hospitals, full implementation takes 4-6 weeks from initial setup to staff training completion. We provide a dedicated implementation team that works with your IT department to ensure smooth integration with your existing systems. Smaller clinics can be operational in as little as 2 weeks.
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>Is ZEN-LYF HIPAA compliant?</FAQQuestion>
            <FAQAnswer>
              Yes, ZEN-LYF is fully HIPAA compliant and SOC 2 Type II certified. We employ enterprise-grade encryption, role-based access controls, comprehensive audit logs, and regular security assessments. We also sign Business Associate Agreements (BAAs) with all healthcare partners.
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>Can ZEN-LYF integrate with our existing EHR system?</FAQQuestion>
            <FAQAnswer>
              Yes, ZEN-LYF integrates with all major EHR systems including Epic, Cerner, Allscripts, MEDITECH, and athenahealth. We use HL7 FHIR standards and provide robust APIs for seamless data exchange, ensuring that patient information flows securely between systems without duplication of effort.
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>How does ZEN-LYF reduce readmissions?</FAQQuestion>
            <FAQAnswer>
              ZEN-LYF reduces readmissions through continuous remote monitoring of patient vitals and symptoms, early detection of complications via AI analysis, automated medication adherence tracking, personalized recovery guidance, and timely intervention alerts for healthcare providers when potential issues are detected.
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>What kind of ROI can we expect?</FAQQuestion>
            <FAQAnswer>
              Most hospitals see ROI within 3-6 months of implementation. Typical results include a 30-40% reduction in 30-day readmissions, 15-20% decrease in administrative work for clinical staff, and 30% improvement in patient satisfaction scores. We provide detailed analytics to track your specific ROI metrics.
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>How are doctors and nurses trained to use the system?</FAQQuestion>
            <FAQAnswer>
              We provide comprehensive training through a combination of online modules, live virtual sessions, and on-site training if needed. The intuitive interface requires minimal training, and most staff are comfortable with the system within hours. We also offer 24/7 support and refresher training as needed.
            </FAQAnswer>
          </FAQItem>
        </FAQContainer>
      </SectionContainer>
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  display: flex;
  min-height: 80vh;
  padding: 80px 24px;
  background: linear-gradient(135deg, #1a237e 0%, #1e88e5 100%);
  color: white;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 60px 24px;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  
  @media (max-width: 1024px) {
    max-width: 100%;
    text-align: center;
    margin-bottom: 40px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 56px;
  font-weight: 800;
  margin-bottom: 24px;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 32px;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 16px;
  
  @media (max-width: 1024px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
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

const HeroImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`;

const SectionContainer = styled.section<{ alternate?: boolean }>`
  padding: 100px 24px;
  background: ${props => props.alternate ? '#f8fafc' : 'white'};
  
  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

const SectionTitle = styled.h2<{ light?: boolean }>`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
  color: ${props => props.light ? 'white' : '#1a237e'};
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const SectionSubtitle = styled.p<{ light?: boolean }>`
  font-size: 18px;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 64px;
  color: ${props => props.light ? 'rgba(255, 255, 255, 0.9)' : '#64748b'};
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 40px;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

const BenefitIcon = styled.div`
  font-size: 40px;
  margin-bottom: 24px;
`;

const BenefitTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1e3a8a;
`;

const BenefitDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #64748b;
`;

const StatisticsSection = styled.section`
  padding: 100px 24px;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  color: white;
  
  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

const StatisticsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const StatisticCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const StatisticValue = styled.div`
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 16px;
  background: linear-gradient(90deg, #ffffff, #90caf9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StatisticLabel = styled.div`
  font-size: 18px;
  line-height: 1.5;
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    gap: 60px;
  }
`;

const FeatureItem = styled.div<{ reverse?: boolean }>`
  display: flex;
  align-items: center;
  gap: 64px;
  flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 32px;
  }
`;

const FeatureContent = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.h3`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #1e3a8a;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const FeatureDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #64748b;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureListItem = styled.li`
  font-size: 16px;
  color: #334155;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  
  &:before {
    content: '✓';
    color: #1e88e5;
    font-weight: bold;
    margin-right: 12px;
  }
`;

const FeatureImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const FeatureImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
`;

const IntegrationSection = styled.section`
  padding: 100px 24px;
  background: white;
  
  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

const IntegrationLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto 48px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const IntegrationLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const IntegrationIcon = styled.img`
  height: 60px;
  margin-bottom: 16px;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s ease;
  
  ${IntegrationLogo}:hover & {
    filter: grayscale(0%);
    opacity: 1;
  }
`;

const IntegrationName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #64748b;
`;

const IntegrationDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const TestimonialsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

const TestimonialQuote = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #334155;
  margin-bottom: 24px;
  font-style: italic;
  
  &:before {
    content: '"';
    font-size: 40px;
    color: #1e88e5;
    opacity: 0.2;
    position: absolute;
    top: -10px;
    left: -15px;
  }
  
  position: relative;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  flex-direction: column;
`;

const TestimonialName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #1e3a8a;
`;

const TestimonialDetail = styled.span`
  font-size: 14px;
  color: #64748b;
`;

const CTASection = styled.section`
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  padding: 80px 24px;
  color: white;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const CTADescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 32px;
  opacity: 0.9;
  
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

const CTAPrimaryButton = styled(Link)`
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

const CTASecondaryButton = styled(Link)`
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

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 24px;
  
  &:last-child {
    border-bottom: none;
  }
`;

const FAQQuestion = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #1e3a8a;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const FAQAnswer = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #64748b;
`;

export default HospitalSolutionsPage; 
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PatientSolutionsPage: React.FC = () => {
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
              Your Personal AI Health Companion
            </HeroTitle>
            <HeroSubtitle>
              ZEN-LYF AI provides continuous, personalized care from hospital to home, 
              ensuring you never heal alone.
            </HeroSubtitle>
            <HeroButtons>
              <PrimaryButton to="/signup">Start Free Trial</PrimaryButton>
              <SecondaryButton to="/wearable-demo">See Demo</SecondaryButton>
            </HeroButtons>
          </motion.div>
        </HeroContent>
        <HeroImageContainer>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroImage src="/images/patient-dashboard-mockup.png" alt="ZEN-LYF Patient Dashboard" />
          </motion.div>
        </HeroImageContainer>
      </HeroSection>

      {/* Key Benefits Section */}
      <SectionContainer>
        <SectionTitle>How ZEN-LYF Helps You</SectionTitle>
        <SectionSubtitle>
          Our AI-powered platform provides personalized care and support throughout your health journey
        </SectionSubtitle>
        
        <BenefitsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <BenefitCard as={motion.div} variants={itemVariants}>
            <BenefitIcon>🏥</BenefitIcon>
            <BenefitTitle>Post-Op Recovery</BenefitTitle>
            <BenefitDescription>
              Personalized recovery plans, symptom tracking, and AI-guided rehabilitation exercises tailored to your specific procedure.
            </BenefitDescription>
          </BenefitCard>
          
          <BenefitCard as={motion.div} variants={itemVariants}>
            <BenefitIcon>📊</BenefitIcon>
            <BenefitTitle>Health Monitoring</BenefitTitle>
            <BenefitDescription>
              Continuous tracking of vital signs and health metrics through seamless integration with your wearable devices.
            </BenefitDescription>
          </BenefitCard>
          
          <BenefitCard as={motion.div} variants={itemVariants}>
            <BenefitIcon>🧠</BenefitIcon>
            <BenefitTitle>AI Medical Analysis</BenefitTitle>
            <BenefitDescription>
              Upload medical reports and images for instant AI analysis and plain-language explanations of complex medical terminology.
            </BenefitDescription>
          </BenefitCard>
          
          <BenefitCard as={motion.div} variants={itemVariants}>
            <BenefitIcon>💊</BenefitIcon>
            <BenefitTitle>Medication Management</BenefitTitle>
            <BenefitDescription>
              Smart reminders, adherence tracking, and potential interaction warnings to ensure you stay on track with your medications.
            </BenefitDescription>
          </BenefitCard>
          
          <BenefitCard as={motion.div} variants={itemVariants}>
            <BenefitIcon>🚨</BenefitIcon>
            <BenefitTitle>Emergency Detection</BenefitTitle>
            <BenefitDescription>
              Automatic fall detection and emergency alerts to notify caregivers or emergency services when you need help.
            </BenefitDescription>
          </BenefitCard>
          
          <BenefitCard as={motion.div} variants={itemVariants}>
            <BenefitIcon>🧘</BenefitIcon>
            <BenefitTitle>Mental Wellness</BenefitTitle>
            <BenefitDescription>
              AI-powered stress detection, guided meditation, and personalized mental health exercises to support your emotional wellbeing.
            </BenefitDescription>
          </BenefitCard>
        </BenefitsGrid>
      </SectionContainer>

      {/* Features Section */}
      <SectionContainer alternate>
        <SectionTitle>Key Features</SectionTitle>
        <SectionSubtitle>
          Explore the powerful tools that make ZEN-LYF your ultimate health companion
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
              <FeatureTitle>Wearable Integration</FeatureTitle>
              <FeatureDescription>
                Seamlessly connect your Apple Watch, Fitbit, or Google Fit device to automatically track health metrics, activity levels, and sleep patterns. Our AI analyzes this data to provide personalized insights and recommendations.
              </FeatureDescription>
              <FeatureList>
                <FeatureListItem>Real-time health metric monitoring</FeatureListItem>
                <FeatureListItem>Automatic activity and sleep tracking</FeatureListItem>
                <FeatureListItem>Personalized health insights</FeatureListItem>
                <FeatureListItem>Trend analysis and progress tracking</FeatureListItem>
              </FeatureList>
            </FeatureContent>
            <FeatureImageContainer>
              <FeatureImage src="/images/wearable-integration.png" alt="Wearable Integration" />
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
              <FeatureTitle>AI Medical Report Analysis</FeatureTitle>
              <FeatureDescription>
                Upload your medical reports, X-rays, MRIs, or CT scans and let our AI analyze them for you. Get plain-language explanations of complex medical terminology and personalized insights about your health condition.
              </FeatureDescription>
              <FeatureList>
                <FeatureListItem>Instant analysis of medical documents</FeatureListItem>
                <FeatureListItem>Plain-language explanations</FeatureListItem>
                <FeatureListItem>Secure storage of medical records</FeatureListItem>
                <FeatureListItem>Share reports with healthcare providers</FeatureListItem>
              </FeatureList>
            </FeatureContent>
            <FeatureImageContainer>
              <FeatureImage src="/images/medical-analysis.png" alt="AI Medical Analysis" />
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
              <FeatureTitle>Recovery Tracking & Exercises</FeatureTitle>
              <FeatureDescription>
                Follow personalized recovery plans created by our AI based on your specific procedure and health condition. Track your progress, perform guided exercises, and receive real-time feedback on your recovery journey.
              </FeatureDescription>
              <FeatureList>
                <FeatureListItem>Personalized recovery plans</FeatureListItem>
                <FeatureListItem>AI-guided rehabilitation exercises</FeatureListItem>
                <FeatureListItem>Progress tracking and milestone celebrations</FeatureListItem>
                <FeatureListItem>Symptom monitoring and alerts</FeatureListItem>
              </FeatureList>
            </FeatureContent>
            <FeatureImageContainer>
              <FeatureImage src="/images/recovery-tracking.png" alt="Recovery Tracking" />
            </FeatureImageContainer>
          </FeatureItem>
        </FeaturesList>
      </SectionContainer>

      {/* Testimonials Section */}
      <SectionContainer>
        <SectionTitle>Patient Success Stories</SectionTitle>
        <SectionSubtitle>
          Hear from real patients who have transformed their recovery journey with ZEN-LYF
        </SectionSubtitle>

        <TestimonialsContainer
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <TestimonialCard as={motion.div} variants={itemVariants}>
            <TestimonialQuote>"After my knee replacement surgery, ZEN-LYF guided me through every step of recovery. The personalized exercise plans and progress tracking kept me motivated, and I recovered faster than expected."</TestimonialQuote>
            <TestimonialAuthor>
              <TestimonialName>Robert Johnson</TestimonialName>
              <TestimonialDetail>Knee Replacement Patient</TestimonialDetail>
            </TestimonialAuthor>
          </TestimonialCard>

          <TestimonialCard as={motion.div} variants={itemVariants}>
            <TestimonialQuote>"The medical report analysis feature is incredible! I uploaded my MRI results and immediately got a clear explanation of what everything meant. It helped me have a more informed conversation with my doctor."</TestimonialQuote>
            <TestimonialAuthor>
              <TestimonialName>Emma Thompson</TestimonialName>
              <TestimonialDetail>Chronic Back Pain Patient</TestimonialDetail>
            </TestimonialAuthor>
          </TestimonialCard>

          <TestimonialCard as={motion.div} variants={itemVariants}>
            <TestimonialQuote>"As someone with multiple medications to manage, the medication reminder system has been a lifesaver. I never miss a dose now, and the potential interaction warnings have helped me avoid problems."</TestimonialQuote>
            <TestimonialAuthor>
              <TestimonialName>David Wilson</TestimonialName>
              <TestimonialDetail>Heart Condition Patient</TestimonialDetail>
            </TestimonialAuthor>
          </TestimonialCard>
        </TestimonialsContainer>
      </SectionContainer>

      {/* CTA Section */}
      <CTASection>
        <CTAContent>
          <CTATitle>Ready to Transform Your Health Journey?</CTATitle>
          <CTADescription>
            Join thousands of patients who have experienced better recovery outcomes and improved wellness with ZEN-LYF AI.
          </CTADescription>
          <CTAButtons>
            <CTAPrimaryButton to="/signup">Start Free Trial</CTAPrimaryButton>
            <CTASecondaryButton to="/pricing">View Pricing</CTASecondaryButton>
          </CTAButtons>
        </CTAContent>
      </CTASection>

      {/* FAQ Section */}
      <SectionContainer>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <SectionSubtitle>
          Find answers to common questions about ZEN-LYF for patients
        </SectionSubtitle>

        <FAQContainer>
          <FAQItem>
            <FAQQuestion>How does ZEN-LYF integrate with my wearable device?</FAQQuestion>
            <FAQAnswer>
              ZEN-LYF seamlessly connects with Apple Watch, Fitbit, and Google Fit devices. Simply authorize the connection in the app, and your health data will automatically sync to provide personalized insights and recommendations.
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>Is my medical data secure and private?</FAQQuestion>
            <FAQAnswer>
              Absolutely. ZEN-LYF is fully HIPAA-compliant and uses enterprise-grade encryption to protect your data. We never share your information without your explicit consent, and you maintain complete control over who can access your health information.
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>Can I share my health data with my doctor?</FAQQuestion>
            <FAQAnswer>
              Yes! ZEN-LYF makes it easy to share your health data, medical reports, and progress with your healthcare providers. You can generate comprehensive reports or grant temporary access to specific information directly through the app.
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>How accurate is the AI medical report analysis?</FAQQuestion>
            <FAQAnswer>
              Our AI has been trained on millions of medical documents and achieves over 95% accuracy in interpreting common medical reports. However, it's designed to complement, not replace, professional medical advice. Always consult with your healthcare provider for definitive interpretations.
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>Can family members monitor my recovery progress?</FAQQuestion>
            <FAQAnswer>
              Yes, with your permission. ZEN-LYF allows you to add family members or caregivers as trusted contacts who can monitor your progress, receive alerts, and help manage your care plan. You control exactly what information is shared.
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>What if I need emergency assistance?</FAQQuestion>
            <FAQAnswer>
              ZEN-LYF includes emergency detection features that can automatically detect falls or abnormal vital signs. In case of an emergency, the app can alert your emergency contacts and even call emergency services if needed. The system also provides your location and relevant medical information to responders.
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

const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
  color: #1a237e;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 64px;
  color: #64748b;
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

export default PatientSolutionsPage; 
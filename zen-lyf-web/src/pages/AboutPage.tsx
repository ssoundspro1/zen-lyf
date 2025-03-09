import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  padding: var(--spacing-xl) var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: var(--spacing-2xl) var(--spacing-xl);
  }
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: var(--spacing-2xl);
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: var(--spacing-lg);
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 3.5rem;
  }
  
  span {
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto var(--spacing-xl);
  line-height: 1.6;
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1.5rem;
  }
`;

const Section = styled.section`
  margin-bottom: var(--spacing-2xl);
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: var(--spacing-xl);
  text-align: center;
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const MissionSection = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  padding: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: var(--spacing-md);
    color: var(--primary);
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xl);
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TeamMember = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const TeamMemberImage = styled.div`
  height: 250px;
  background-color: rgba(255, 255, 255, 0.1);
  background-size: cover;
  background-position: center;
`;

const TeamMemberInfo = styled.div`
  padding: var(--spacing-lg);
`;

const TeamMemberName = styled.h3`
  font-size: 1.25rem;
  margin-bottom: var(--spacing-sm);
`;

const TeamMemberRole = styled.p`
  color: var(--primary);
  font-size: 0.875rem;
  margin-bottom: var(--spacing-md);
`;

const TeamMemberBio = styled.p`
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.6;
`;

const CtaSection = styled.section`
  text-align: center;
  margin-top: var(--spacing-2xl);
`;

const CtaTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: var(--spacing-lg);
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const CtaText = styled.p`
  color: var(--text-secondary);
  font-size: 1.125rem;
  max-width: 600px;
  margin: 0 auto var(--spacing-xl);
  line-height: 1.6;
`;

const Button = styled(Link)`
  display: inline-block;
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
`;

const AboutPage: React.FC = () => {
  return (
    <PageContainer>
      <HeroSection>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About <span>ZEN-LYF</span> AI
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We're on a mission to revolutionize post-operative care and wellness through AI-driven technology, ensuring no patient heals alone.
        </Subtitle>
      </HeroSection>
      
      <Section>
        <SectionTitle>Our Mission & Vision</SectionTitle>
        
        <MissionSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Mission</h3>
          <p>
            Ensuring continuous, personalized, AI-powered post-operative and wellness care for all patients—bridging the gap from hospital to home recovery.
          </p>
        </MissionSection>
        
        <MissionSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Vision</h3>
          <p>
            A world where no patient heals alone; powered by advanced AI delivering proactive, personalized support, reducing patient anxiety, complications, and hospital readmissions.
          </p>
        </MissionSection>
        
        <MissionSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3>The Problem We're Solving</h3>
          <p>
            Patients often feel neglected post-discharge, leading to increased complications, anxiety, and hospital readmissions. Over 36% of discharged patients have no immediate follow-ups, resulting in higher readmission rates and poorer recovery outcomes.
          </p>
        </MissionSection>
      </Section>
      
      <Section>
        <SectionTitle>Our Team</SectionTitle>
        
        <TeamGrid>
          <TeamMember
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <TeamMemberImage style={{ backgroundColor: 'rgba(79, 70, 229, 0.2)' }} />
            <TeamMemberInfo>
              <TeamMemberName>Dr. Sarah Johnson</TeamMemberName>
              <TeamMemberRole>Chief Medical Officer</TeamMemberRole>
              <TeamMemberBio>
                With over 15 years of experience in post-operative care, Dr. Johnson leads our medical strategy and ensures all features are clinically validated.
              </TeamMemberBio>
            </TeamMemberInfo>
          </TeamMember>
          
          <TeamMember
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <TeamMemberImage style={{ backgroundColor: 'rgba(16, 185, 129, 0.2)' }} />
            <TeamMemberInfo>
              <TeamMemberName>Michael Chen</TeamMemberName>
              <TeamMemberRole>Chief Technology Officer</TeamMemberRole>
              <TeamMemberBio>
                A pioneer in AI and machine learning, Michael oversees the development of our AI algorithms and ensures seamless integration with wearable devices.
              </TeamMemberBio>
            </TeamMemberInfo>
          </TeamMember>
          
          <TeamMember
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <TeamMemberImage style={{ backgroundColor: 'rgba(245, 158, 11, 0.2)' }} />
            <TeamMemberInfo>
              <TeamMemberName>Emma Rodriguez</TeamMemberName>
              <TeamMemberRole>Head of User Experience</TeamMemberRole>
              <TeamMemberBio>
                Emma ensures that ZEN-LYF AI is intuitive and accessible for patients of all ages and technical abilities, with a focus on creating calming, stress-free interfaces.
              </TeamMemberBio>
            </TeamMemberInfo>
          </TeamMember>
        </TeamGrid>
      </Section>
      
      <CtaSection>
        <CtaTitle>Join Our Journey</CtaTitle>
        <CtaText>
          Be part of the revolution in post-operative care and wellness. Sign up today to experience the future of personalized healthcare.
        </CtaText>
        <Button to="/signup">Get Started</Button>
      </CtaSection>
    </PageContainer>
  );
};

export default AboutPage; 
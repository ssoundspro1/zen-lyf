import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiSearch, FiMail, FiMessageSquare, FiPhone, FiVideo, FiHelpCircle, FiFileText, FiArrowRight } from 'react-icons/fi';
import IconWrapper from 'components/IconWrapper';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    { id: 'all', name: 'All Topics' },
    { id: 'getting-started', name: 'Getting Started' },
    { id: 'account', name: 'Account & Billing' },
    { id: 'wearables', name: 'Wearable Integration' },
    { id: 'medical', name: 'Medical Reports' },
    { id: 'technical', name: 'Technical Issues' },
  ];

  const faqItems = [
    {
      category: 'getting-started',
      question: 'How do I set up my ZEN-LYF account?',
      answer: 'To set up your ZEN-LYF account, download our app from the App Store or Google Play, then tap "Sign Up". You can create an account using your email, Google account, or Apple ID. Follow the on-screen instructions to complete your profile and connect your wearable devices.'
    },
    {
      category: 'getting-started',
      question: 'Is ZEN-LYF available in my country?',
      answer: 'ZEN-LYF is currently available in the United States, Canada, United Kingdom, Australia, New Zealand, and select European countries. We\'re rapidly expanding to more regions. Check our app stores for availability in your location.'
    },
    {
      category: 'account',
      question: 'How do I reset my password?',
      answer: 'To reset your password, tap "Forgot Password" on the login screen. Enter your email address, and we\'ll send you instructions to reset your password. For security reasons, password reset links expire after 24 hours.'
    },
    {
      category: 'account',
      question: 'How do I cancel my subscription?',
      answer: 'You can cancel your subscription through the app by going to Profile > Subscription > Cancel Subscription. You\'ll continue to have access to your premium features until the end of your current billing cycle. If you\'re having trouble, please contact our support team.'
    },
    {
      category: 'wearables',
      question: 'Which wearable devices are compatible with ZEN-LYF?',
      answer: 'ZEN-LYF is compatible with Apple Watch (Series 3 and newer), Fitbit devices (Charge 3/4, Versa series, Sense), Samsung Galaxy Watch (all models), and Google Wear OS devices. We\'re continuously adding support for more devices.'
    },
    {
      category: 'wearables',
      question: 'My wearable device isn\'t syncing properly. What should I do?',
      answer: 'First, ensure your wearable is properly paired with your phone and that Bluetooth is enabled. Try restarting both your wearable device and phone. Make sure your ZEN-LYF app has permission to access health data. If issues persist, disconnect and reconnect your device in the ZEN-LYF app settings.'
    },
    {
      category: 'medical',
      question: 'How accurate is the AI medical report analysis?',
      answer: 'Our AI medical report analysis has been trained on millions of medical documents and achieves over 95% accuracy for common reports. However, it\'s designed to provide informational insights only and should not replace professional medical advice. Always consult with your healthcare provider for clinical interpretation of your reports.'
    },
    {
      category: 'medical',
      question: 'Is my health data secure?',
      answer: 'Yes, security is our top priority. All your health data is encrypted end-to-end using AES-256 encryption. We\'re fully HIPAA compliant and implement strict access controls. Your data is never sold to third parties and is only shared with healthcare providers with your explicit permission.'
    },
    {
      category: 'technical',
      question: 'The app is crashing. How do I fix it?',
      answer: 'First, try restarting the app. If that doesn\'t work, restart your device. Ensure you\'re using the latest version of the app and your device\'s operating system. If problems persist, try uninstalling and reinstalling the app. Note that you won\'t lose your data as it\'s stored securely in the cloud.'
    },
    {
      category: 'technical',
      question: 'How do I export my health data from ZEN-LYF?',
      answer: 'You can export your health data by going to Profile > Settings > Data Management > Export Data. You can choose to export in CSV or PDF format. You can also select specific date ranges and data types to export. If you need assistance, our support team can guide you through the process.'
    },
  ];

  const filteredFaqs = faqItems.filter(item => 
    (selectedCategory === 'all' || item.category === selectedCategory) &&
    (item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
     item.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const supportGuides = [
    {
      title: "Beginner's Guide to ZEN-LYF",
      icon: <IconWrapper icon={FiHelpCircle} />,
      description: "New to ZEN-LYF? Learn the basics to get started.",
      link: "/support/beginners-guide"
    },
    {
      title: "Wearable Device Setup",
      icon: <IconWrapper icon={FiFileText} />,
      description: "Step-by-step instructions for connecting your wearable devices.",
      link: "/support/wearable-setup"
    },
    {
      title: "Understanding AI Health Insights",
      icon: <IconWrapper icon={FiFileText} />,
      description: "Learn how to interpret and use AI-generated health insights.",
      link: "/support/ai-insights"
    },
    {
      title: "Uploading Medical Reports",
      icon: <IconWrapper icon={FiFileText} />,
      description: "How to upload and manage your medical reports for AI analysis.",
      link: "/support/medical-reports"
    }
  ];

  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <HeroTitle>How Can We Help You?</HeroTitle>
          <HeroSubtitle>
            Find answers, get help, and connect with our support team
          </HeroSubtitle>
          <SearchContainer>
            <SearchIconWrapper>
              <IconWrapper icon={FiSearch} />
            </SearchIconWrapper>
            <SearchInput
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchContainer>
        </motion.div>
      </HeroSection>

      {/* App Downloads Section */}
      <DownloadSection>
        <DownloadContainer>
          <DownloadTitle>Download ZEN-LYF</DownloadTitle>
          <DownloadSubtitle>
            Get the full experience on your mobile device
          </DownloadSubtitle>
          <AppStoreButtons>
            <AppStoreButton 
              href="https://apps.apple.com/us/app/zen-lyf/id0000000000" 
              target="_blank"
              rel="noopener noreferrer"
              as={motion.a}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AppStoreIcon src="/images/app-store-badge.png" alt="Download on App Store" />
            </AppStoreButton>
            
            <AppStoreButton 
              href="https://play.google.com/store/apps/details?id=com.zenlyf.app" 
              target="_blank"
              rel="noopener noreferrer"
              as={motion.a}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AppStoreIcon src="/images/google-play-badge.png" alt="Get it on Google Play" />
            </AppStoreButton>

            <AppStoreButton 
              href="https://www.meta.com/quest/experiences/zenlyf" 
              target="_blank"
              rel="noopener noreferrer"
              as={motion.a}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AppStoreIcon src="/images/meta-quest-badge.png" alt="Get it on Meta Quest" />
            </AppStoreButton>
          </AppStoreButtons>
        </DownloadContainer>
      </DownloadSection>

      {/* Support Options Section */}
      <SupportOptionsSection>
        <SectionTitle>Contact Our Support Team</SectionTitle>
        <SectionSubtitle>
          Choose your preferred method to get personalized assistance
        </SectionSubtitle>
        
        <SupportOptionsGrid>
          <SupportOptionCard
            as={motion.div}
            whileHover={{ y: -10, boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)' }}
          >
            <SupportOptionIcon><IconWrapper icon={FiMail} /></SupportOptionIcon>
            <SupportOptionTitle>Email Support</SupportOptionTitle>
            <SupportOptionDescription>
              Send us a detailed message and we'll respond within 24 hours.
            </SupportOptionDescription>
            <SupportOptionButton href="mailto:support@zen-lyf.com">
              Email Us
            </SupportOptionButton>
          </SupportOptionCard>
          
          <SupportOptionCard
            as={motion.div}
            whileHover={{ y: -10, boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)' }}
          >
            <SupportOptionIcon><IconWrapper icon={FiMessageSquare} /></SupportOptionIcon>
            <SupportOptionTitle>Live Chat</SupportOptionTitle>
            <SupportOptionDescription>
              Chat with our support team in real-time for immediate assistance.
            </SupportOptionDescription>
            <SupportOptionButton as="button" onClick={() => console.log('Open chat')}>
              Start Chat
            </SupportOptionButton>
          </SupportOptionCard>
          
          <SupportOptionCard
            as={motion.div}
            whileHover={{ y: -10, boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)' }}
          >
            <SupportOptionIcon><IconWrapper icon={FiPhone} /></SupportOptionIcon>
            <SupportOptionTitle>Phone Support</SupportOptionTitle>
            <SupportOptionDescription>
              Speak directly with our support specialists from 8am-8pm EST.
            </SupportOptionDescription>
            <SupportOptionButton href="tel:+18005551234">
              Call Us
            </SupportOptionButton>
          </SupportOptionCard>
          
          <SupportOptionCard
            as={motion.div}
            whileHover={{ y: -10, boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)' }}
          >
            <SupportOptionIcon><IconWrapper icon={FiVideo} /></SupportOptionIcon>
            <SupportOptionTitle>Video Consultation</SupportOptionTitle>
            <SupportOptionDescription>
              Schedule a video call for personalized guidance and troubleshooting.
            </SupportOptionDescription>
            <SupportOptionButton as={Link} to="/support/schedule">
              Book Session
            </SupportOptionButton>
          </SupportOptionCard>
        </SupportOptionsGrid>
      </SupportOptionsSection>

      {/* Support Guides Section */}
      <GuidesSection>
        <SectionTitle>Support Guides</SectionTitle>
        <SectionSubtitle>
          In-depth resources to help you make the most of ZEN-LYF
        </SectionSubtitle>
        
        <GuidesGrid>
          {supportGuides.map((guide, index) => (
            <GuideCard
              key={index}
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                background: 'linear-gradient(135deg, #f7f9ff 0%, #e3f2fd 100%)'
              }}
            >
              <GuideIcon>{guide.icon}</GuideIcon>
              <GuideContent>
                <GuideTitle>{guide.title}</GuideTitle>
                <GuideDescription>{guide.description}</GuideDescription>
              </GuideContent>
              <GuideLink as={Link} to={guide.link}>
                <IconWrapper icon={FiArrowRight} />
              </GuideLink>
            </GuideCard>
          ))}
        </GuidesGrid>
      </GuidesSection>

      {/* FAQ Section */}
      <FAQSection>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <SectionSubtitle>
          Browse our most common questions and answers
        </SectionSubtitle>
        
        <FAQCategoryTabs>
          {supportCategories.map(category => (
            <FAQCategoryTab
              key={category.id}
              active={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </FAQCategoryTab>
          ))}
        </FAQCategoryTabs>
        
        <FAQContainer>
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <FAQItem
                key={index}
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <FAQQuestion>
                  <IconWrapper icon={FiHelpCircle} />
                  <span>{faq.question}</span>
                </FAQQuestion>
                <FAQAnswer>{faq.answer}</FAQAnswer>
              </FAQItem>
            ))
          ) : (
            <NoResultsMessage>
              No results found for "{searchQuery}". Try a different search term or browse our support categories.
            </NoResultsMessage>
          )}
        </FAQContainer>
      </FAQSection>

      {/* CTA Section */}
      <CTASection>
        <CTAContent>
          <CTATitle>Still Need Help?</CTATitle>
          <CTADescription>
            Our support team is ready to assist you with any questions or concerns you may have.
          </CTADescription>
          <CTAButton as={Link} to="/contact">
            Contact Us
          </CTAButton>
        </CTAContent>
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
  background: linear-gradient(135deg, #1a237e 0%, #1e88e5 100%);
  color: white;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 32px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  left: 24px;
  top: 50%;
  transform: translateY(-50%);
  color: #64748b;
  font-size: 20px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 60px;
  padding: 0 24px 0 60px;
  font-size: 18px;
  border: none;
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;

const DownloadSection = styled.section`
  background: linear-gradient(135deg, #f5f7ff 0%, #e6f0ff 100%);
  padding: 60px 24px;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 40px 24px;
  }
`;

const DownloadContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const DownloadTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const DownloadSubtitle = styled.p`
  font-size: 18px;
  color: #64748b;
  margin-bottom: 32px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const AppStoreButtons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
`;

const AppStoreButton = styled.a`
  display: block;
  transition: all 0.3s ease;
  max-width: 200px;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const AppStoreIcon = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const SupportOptionsSection = styled.section`
  padding: 80px 24px;
  
  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

const SectionTitle = styled.h2`
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
    margin-bottom: 32px;
  }
`;

const SupportOptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const SupportOptionCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SupportOptionIcon = styled.div`
  width: 64px;
  height: 64px;
  background: #e3f2fd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  font-size: 28px;
  color: #1e88e5;
`;

const SupportOptionTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #1e3a8a;
  margin-bottom: 12px;
`;

const SupportOptionDescription = styled.p`
  font-size: 16px;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 24px;
`;

const SupportOptionButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background: #1e88e5;
  color: white;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: auto;
  cursor: pointer;
  border: none;
  
  &:hover {
    background: #1976d2;
  }
`;

const GuidesSection = styled.section`
  padding: 80px 24px;
  background: #f8fafc;
  
  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

const GuidesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const GuideCard = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
`;

const GuideIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #e3f2fd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #1e88e5;
  margin-right: 20px;
  flex-shrink: 0;
`;

const GuideContent = styled.div`
  flex: 1;
`;

const GuideTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #1e3a8a;
  margin-bottom: 8px;
`;

const GuideDescription = styled.p`
  font-size: 14px;
  color: #64748b;
  line-height: 1.5;
`;

const GuideLink = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #e3f2fd;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1e88e5;
  margin-left: 16px;
  flex-shrink: 0;
  transition: all 0.3s ease;
  
  &:hover {
    background: #1e88e5;
    color: white;
  }
`;

const FAQSection = styled.section`
  padding: 80px 24px;
  
  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

const FAQCategoryTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 32px;
  justify-content: center;
`;

const FAQCategoryTab = styled.button<{ active: boolean }>`
  padding: 12px 20px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.active ? '#1e88e5' : '#e3f2fd'};
  color: ${props => props.active ? 'white' : '#1e3a8a'};
  border: none;
  
  &:hover {
    background: ${props => props.active ? '#1976d2' : '#bbdefb'};
  }
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin-bottom: 24px;
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const FAQQuestion = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #1e3a8a;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 12px;
    color: #1e88e5;
    flex-shrink: 0;
  }
`;

const FAQAnswer = styled.p`
  font-size: 16px;
  color: #64748b;
  line-height: 1.6;
  padding-left: 28px;
`;

const NoResultsMessage = styled.div`
  padding: 32px;
  text-align: center;
  background: #f8fafc;
  border-radius: 12px;
  color: #64748b;
  font-size: 16px;
`;

const CTASection = styled.section`
  padding: 80px 24px;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  color: white;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

const CTAContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
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
  margin-bottom: 32px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CTAButton = styled.a`
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

export default SupportPage; 
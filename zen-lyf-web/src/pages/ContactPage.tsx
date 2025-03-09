import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

// Styled components with Apple, NVIDIA, and Lusion inspired design
const PageContainer = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 40vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: var(--spacing-xl);
  overflow: hidden;
  
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

const HeroContent = styled(motion.div)`
  max-width: 800px;
  z-index: 1;
`;

const HeroTitle = styled(motion.h1)`
  font-size: var(--font-size-5xl);
  margin-bottom: var(--spacing-lg);
  
  span {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: var(--font-size-xl);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

// Contact section
const ContactSection = styled.section`
  padding: var(--spacing-3xl) var(--spacing-xl);
  position: relative;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactForm = styled(motion.form)`
  background: var(--background-card);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-glass);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: var(--spacing-xl);
`;

const FormTitle = styled.h2`
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-lg);
  
  span {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const FormGroup = styled.div`
  margin-bottom: var(--spacing-lg);
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: var(--spacing-sm);
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
`;

const FormInput = styled.input`
  width: 100%;
  padding: var(--spacing-md);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  font-size: var(--font-size-md);
  transition: var(--transition-default);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: var(--spacing-md);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  font-size: var(--font-size-md);
  transition: var(--transition-default);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
  }
  
  option {
    background: var(--background-secondary);
    color: var(--text-primary);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: var(--spacing-md);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  font-size: var(--font-size-md);
  min-height: 150px;
  resize: vertical;
  transition: var(--transition-default);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: var(--spacing-md) var(--spacing-xl);
  background: var(--gradient-primary);
  color: white;
  border: none;
  border-radius: var(--radius-full);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-md);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  box-shadow: 0 10px 25px rgba(79, 70, 229, 0.5);
  transition: var(--transition-default);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 30px rgba(79, 70, 229, 0.6);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
`;

const InfoCard = styled(motion.div)`
  background: var(--background-card);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-glass);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: var(--spacing-xl);
  transition: var(--transition-default);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
    border-color: rgba(79, 70, 229, 0.3);
  }
`;

const InfoTitle = styled.h3`
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-md);
  
  span {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const InfoText = styled.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
`;

const InfoLink = styled.a`
  color: var(--primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
  transition: var(--transition-default);
  
  &:hover {
    color: var(--secondary);
    transform: translateX(5px);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  transition: var(--transition-default);
  
  &:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-5px);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

// FAQ section
const FAQSection = styled.section`
  padding: var(--spacing-3xl) var(--spacing-xl);
  position: relative;
  background: var(--background-secondary);
  border-radius: var(--radius-lg);
  margin: 0 var(--spacing-xl);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(79, 70, 229, 0.2) 0%, transparent 70%);
    z-index: 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: var(--font-size-3xl);
  text-align: center;
  margin-bottom: var(--spacing-2xl);
  position: relative;
  z-index: 1;
  
  span {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const FAQItem = styled(motion.div)`
  background: var(--background-glass);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-glass);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const FAQQuestion = styled.button<{ isOpen: boolean }>`
  width: 100%;
  text-align: left;
  padding: var(--spacing-lg);
  background: transparent;
  border: none;
  color: var(--text-primary);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-lg);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  }
`;

const FAQAnswer = styled(motion.div)`
  padding: 0 var(--spacing-lg) var(--spacing-lg);
  color: var(--text-secondary);
  line-height: 1.6;
`;

// Main component
const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  
  // Mock FAQ data
  const faqs = [
    {
      question: 'How can I integrate my wearable device with ZEN-LYF?',
      answer: 'ZEN-LYF supports a wide range of wearable devices including Apple Watch, Fitbit, and our own proprietary devices. Simply download our mobile app, connect your device through Bluetooth, and follow the on-screen instructions to complete the setup process.'
    },
    {
      question: 'Is my medical data secure with ZEN-LYF?',
      answer: 'Yes, we take data security very seriously. All your medical data is encrypted both in transit and at rest. We comply with HIPAA regulations and employ industry-leading security measures to ensure your information remains private and protected.'
    },
    {
      question: 'How does the AI analyze my medical records?',
      answer: 'Our AI uses advanced machine learning algorithms to analyze your medical records, identifying patterns and extracting relevant information. It can interpret various types of medical documents, including lab results, X-rays, and doctor\'s notes, providing you with plain-language explanations and insights.'
    },
    {
      question: 'Can healthcare providers access my ZEN-LYF data?',
      answer: 'Yes, but only with your explicit permission. You can grant access to specific healthcare providers through our secure sharing system. This allows them to view your health data and receive alerts when necessary, improving your care coordination.'
    },
    {
      question: 'What subscription plans do you offer?',
      answer: 'We offer several subscription tiers to meet different needs. Our Basic plan includes essential health monitoring features, while our Premium and Professional plans offer advanced analytics, unlimited medical record storage, and priority support. Visit our Pricing page for detailed information.'
    }
  ];
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setIsSubmitting(false);
    
    // Show success message (in a real app, you would handle this better)
    alert('Your message has been sent! We will get back to you soon.');
  };
  
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in <span>Touch</span>
          </HeroTitle>
          
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have questions about ZEN-LYF? Our team is here to help you with anything you need.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>
      
      {/* Contact Section */}
      <ContactSection>
        <ContactGrid>
          <ContactForm
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
          >
            <FormTitle>
              Send us a <span>Message</span>
            </FormTitle>
            
            <FormGroup>
              <FormLabel htmlFor="name">Full Name</FormLabel>
              <FormInput
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your full name"
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <FormInput
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email address"
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <FormSelect
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="sales">Sales & Pricing</option>
                <option value="partnership">Partnership Opportunities</option>
                <option value="other">Other</option>
              </FormSelect>
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormTextarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Type your message here..."
              />
            </FormGroup>
            
            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </ContactForm>
          
          <ContactInfo>
            <InfoCard
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <InfoTitle>
                <span>Contact</span> Information
              </InfoTitle>
              <InfoText>
                Our team is available Monday through Friday, 9am to 5pm EST. We strive to respond to all inquiries within 24 hours.
              </InfoText>
              
              <InfoLink href="mailto:support@zen-lyf.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                support@zen-lyf.com
              </InfoLink>
              
              <InfoLink href="tel:+18005551234">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +1 (800) 555-1234
              </InfoLink>
              
              <InfoLink href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                123 Innovation Way, San Francisco, CA 94107
              </InfoLink>
              
              <SocialLinks>
                <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </SocialLink>
                
                <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </SocialLink>
                
                <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </SocialLink>
                
                <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </SocialLink>
              </SocialLinks>
            </InfoCard>
            
            <InfoCard
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <InfoTitle>
                <span>Support</span> Hours
              </InfoTitle>
              <InfoText>
                Our customer support team is available during the following hours:
              </InfoText>
              
              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-sm)' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Monday - Friday:</span>
                  <span style={{ color: 'var(--text-primary)' }}>9:00 AM - 5:00 PM EST</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-sm)' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Saturday:</span>
                  <span style={{ color: 'var(--text-primary)' }}>10:00 AM - 2:00 PM EST</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Sunday:</span>
                  <span style={{ color: 'var(--text-primary)' }}>Closed</span>
                </div>
              </div>
              
              <InfoText>
                For urgent matters outside of business hours, please email our emergency support team at <a href="mailto:emergency@zen-lyf.com" style={{ color: 'var(--primary)' }}>emergency@zen-lyf.com</a>.
              </InfoText>
            </InfoCard>
          </ContactInfo>
        </ContactGrid>
      </ContactSection>
      
      {/* FAQ Section */}
      <FAQSection>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Frequently Asked <span>Questions</span>
        </SectionTitle>
        
        <FAQList>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <FAQQuestion
                isOpen={openFAQ === index}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </FAQQuestion>
              
              {openFAQ === index && (
                <FAQAnswer
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{faq.answer}</p>
                </FAQAnswer>
              )}
            </FAQItem>
          ))}
        </FAQList>
      </FAQSection>
    </PageContainer>
  );
};

export default ContactPage; 
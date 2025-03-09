import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PrivacyPage: React.FC = () => {
  return (
    <PageContainer>
      <HeaderSection>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HeaderTitle>Privacy Policy</HeaderTitle>
          <HeaderSubtitle>Last updated: June 1, 2023</HeaderSubtitle>
        </motion.div>
      </HeaderSection>

      <ContentSection>
        <SectionContainer
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SectionTitle>Introduction</SectionTitle>
          <SectionContent>
            <p>
              At ZEN-LYF AI (referred to as "we", "our", or "ZEN-LYF"), we are committed to protecting your privacy and ensuring the security of your personal health information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, and services (collectively, the "Service").
            </p>
            <p>
              We understand the sensitivity of health information and take our responsibility as a health technology provider seriously. ZEN-LYF is fully compliant with applicable privacy laws, including the Health Insurance Portability and Accountability Act (HIPAA) and, where applicable, the General Data Protection Regulation (GDPR).
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using our Service, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with our policies and practices, please do not use our Service.
            </p>
          </SectionContent>
        </SectionContainer>

        <SectionContainer
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <SectionTitle>Information We Collect</SectionTitle>
          <SectionContent>
            <p>
              We collect several types of information from and about users of our Service, including:
            </p>
            
            <SubsectionTitle>Personal Information</SubsectionTitle>
            <ul>
              <li>Contact information (name, email address, phone number, mailing address)</li>
              <li>Account credentials (username, password)</li>
              <li>Demographic information (age, gender, height, weight)</li>
              <li>Billing and payment information</li>
            </ul>

            <SubsectionTitle>Health Information</SubsectionTitle>
            <ul>
              <li>Medical history and conditions</li>
              <li>Medications and treatment plans</li>
              <li>Medical reports and imaging (X-rays, MRIs, CT scans)</li>
              <li>Vital signs and biometric data from wearable devices</li>
              <li>Activity and fitness data</li>
              <li>Symptoms and recovery progress</li>
            </ul>

            <SubsectionTitle>Technical Information</SubsectionTitle>
            <ul>
              <li>Device information (device type, operating system, browser type)</li>
              <li>IP address and location information</li>
              <li>Usage data (how you interact with our Service)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </SectionContent>
        </SectionContainer>

        <SectionContainer
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SectionTitle>How We Collect Information</SectionTitle>
          <SectionContent>
            <p>We collect information through:</p>
            <ul>
              <li><strong>Direct Interactions:</strong> Information you provide when creating an account, updating your profile, or communicating with us.</li>
              <li><strong>Automated Technologies:</strong> Cookies, web beacons, and other tracking technologies that collect information about your browsing actions and patterns.</li>
              <li><strong>Wearable Devices:</strong> Data synchronized from your Apple Watch, Fitbit, Google Fit, or other connected health devices.</li>
              <li><strong>File Uploads:</strong> Medical reports, imaging files, and other health documents you upload to our platform.</li>
              <li><strong>Third-Party Sources:</strong> Information shared by your healthcare providers, insurance companies, or other third parties with your consent.</li>
            </ul>
          </SectionContent>
        </SectionContainer>

        <SectionContainer
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <SectionTitle>How We Use Your Information</SectionTitle>
          <SectionContent>
            <p>We use your information for the following purposes:</p>
            <ul>
              <li><strong>Provide and Improve Services:</strong> To deliver the services you requested, personalize your experience, and enhance our platform.</li>
              <li><strong>Health Monitoring and Analysis:</strong> To track your health metrics, analyze medical reports, and provide insights about your health.</li>
              <li><strong>AI-Powered Recommendations:</strong> To generate personalized recovery plans, exercise routines, and wellness recommendations.</li>
              <li><strong>Emergency Detection and Response:</strong> To detect potential health emergencies and alert your designated contacts or emergency services.</li>
              <li><strong>Communication:</strong> To send you service-related notifications, updates, and respond to your inquiries.</li>
              <li><strong>Research and Analytics:</strong> To conduct research and analyze trends to improve health outcomes (always in anonymized, aggregated form).</li>
              <li><strong>Legal Obligations:</strong> To comply with applicable laws, regulations, and legal processes.</li>
            </ul>
          </SectionContent>
        </SectionContainer>

        <SectionContainer
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <SectionTitle>Information Sharing and Disclosure</SectionTitle>
          <SectionContent>
            <p>
              We respect the confidentiality of your information and will not sell or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information with healthcare providers, caregivers, or family members.</li>
              <li><strong>Healthcare Providers:</strong> To facilitate communication with your doctors and healthcare teams for continuity of care.</li>
              <li><strong>Service Providers:</strong> With trusted third parties who assist us in operating our Service (e.g., cloud storage providers, payment processors), bound by confidentiality obligations.</li>
              <li><strong>Emergency Contacts:</strong> With your designated emergency contacts in case of health emergencies.</li>
              <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with appropriate confidentiality safeguards.</li>
            </ul>
            <p>
              We limit the information we share to what is necessary for the specific purpose, and require third parties to protect your information with appropriate security measures.
            </p>
          </SectionContent>
        </SectionContainer>

        <SectionContainer
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <SectionTitle>Data Security</SectionTitle>
          <SectionContent>
            <p>
              We have implemented appropriate technical and organizational security measures to protect your information from unauthorized access, disclosure, alteration, and destruction. These measures include:
            </p>
            <ul>
              <li>End-to-end encryption for data transmission and storage</li>
              <li>Regular security assessments and penetration testing</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Regular security training for our staff</li>
              <li>Secure data centers with physical access restrictions</li>
              <li>Comprehensive disaster recovery and business continuity plans</li>
            </ul>
            <p>
              While we strive to use commercially acceptable means to protect your information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
            </p>
          </SectionContent>
        </SectionContainer>

        <SectionContainer
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <SectionTitle>Your Privacy Rights</SectionTitle>
          <SectionContent>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li><strong>Access:</strong> The right to request copies of your personal information.</li>
              <li><strong>Rectification:</strong> The right to request correction of inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> The right to request deletion of your information in certain circumstances.</li>
              <li><strong>Restriction:</strong> The right to request restriction of processing of your information.</li>
              <li><strong>Data Portability:</strong> The right to receive your information in a structured, commonly used format.</li>
              <li><strong>Objection:</strong> The right to object to processing of your information in certain circumstances.</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the details provided in the "Contact Us" section below. We will respond to your request within the timeframe required by applicable law.
            </p>
          </SectionContent>
        </SectionContainer>

        <SectionContainer
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <SectionTitle>Children's Privacy</SectionTitle>
          <SectionContent>
            <p>
              Our Service is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us so that we can take appropriate action.
            </p>
            <p>
              For children between 13 and 18 years old, parental consent is required before using our Service.
            </p>
          </SectionContent>
        </SectionContainer>

        <SectionContainer
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <SectionTitle>Changes to Our Privacy Policy</SectionTitle>
          <SectionContent>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. For significant changes, we will provide more prominent notice, such as email notification or in-app notifications.
            </p>
            <p>
              We encourage you to review this Privacy Policy periodically to stay informed about our information practices.
            </p>
          </SectionContent>
        </SectionContainer>

        <SectionContainer
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <SectionTitle>Contact Us</SectionTitle>
          <SectionContent>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact our Data Protection Officer at:
            </p>
            <ContactInfo>
              <ContactItem><strong>Email:</strong> privacy@zen-lyf.com</ContactItem>
              <ContactItem><strong>Phone:</strong> +1 (800) 555-1234</ContactItem>
              <ContactItem><strong>Address:</strong> 123 Wellness Way, Health City, CA 94000, USA</ContactItem>
            </ContactInfo>
            <p>
              We will respond to your inquiry as soon as possible and within the timeframe required by applicable law.
            </p>
          </SectionContent>
        </SectionContainer>
      </ContentSection>
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const HeaderSection = styled.div`
  text-align: center;
  padding: 80px 0 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 60px 0 30px;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: #1e3a8a;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const HeaderSubtitle = styled.p`
  font-size: 18px;
  color: #64748b;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContentSection = styled.div`
  padding: 60px 0;
  
  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const SectionContainer = styled.div`
  margin-bottom: 48px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 24px;
  border-bottom: 2px solid #e6f0ff;
  padding-bottom: 12px;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const SectionContent = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: #334155;
  
  p {
    margin-bottom: 16px;
  }
  
  ul {
    margin-bottom: 16px;
    padding-left: 24px;
  }
  
  li {
    margin-bottom: 8px;
  }
  
  strong {
    font-weight: 600;
    color: #1e3a8a;
  }
`;

const SubsectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #1e3a8a;
  margin: 24px 0 16px;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ContactInfo = styled.div`
  background: #f0f7ff;
  border-radius: 8px;
  padding: 24px;
  margin: 16px 0;
`;

const ContactItem = styled.p`
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export default PrivacyPage; 
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TermsPage: React.FC = () => {
  return (
    <PageContainer>
      <HeaderSection>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HeaderTitle>Terms of Service</HeaderTitle>
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
          <SectionTitle>1. Agreement to Terms</SectionTitle>
          <SectionContent>
            <p>
              Welcome to ZEN-LYF AI ("ZEN-LYF," "we," "us," or "our"). By accessing or using our website, mobile application, and services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms").
            </p>
            <p>
              Please read these Terms carefully before using our Services. By accessing or using the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
            </p>
            <p>
              We may modify these Terms at any time. All changes will be effective immediately upon posting on our website. Your continued use of our Services after the posting of revised Terms means that you accept and agree to the changes.
            </p>
          </SectionContent>
        </SectionContainer>

        <SectionContainer
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <SectionTitle>2. Service Description</SectionTitle>
          <SectionContent>
            <p>
              ZEN-LYF AI is a health and wellness platform that provides personalized, AI-driven post-operative and wellness care. Our Services include, but are not limited to:
            </p>
            <ul>
              <li>Health and activity tracking through wearable device integration</li>
              <li>AI-powered analysis of medical reports and imaging</li>
              <li>Personalized recovery and wellness plans</li>
              <li>Medication reminders and adherence tracking</li>
              <li>Emergency detection and alert systems</li>
              <li>Mental wellness support and exercises</li>
              <li>Secure health data storage and sharing capabilities</li>
            </ul>
            <p>
              We continuously work to improve our Services and may add or remove features without prior notice. We reserve the right to suspend or terminate any feature at our discretion.
            </p>
          </SectionContent>
        </SectionContainer>

        <SectionContainer
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SectionTitle>3. Eligibility and Registration</SectionTitle>
          <SectionContent>
            <p>
              To use our Services, you must be at least 18 years old, or the age of legal majority in your jurisdiction. If you are under 18 but over 13, you may use our Services only with the involvement and consent of a parent or legal guardian.
            </p>
            <p>
              When you register for an account, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
            <p>
              We reserve the right to refuse registration, cancel accounts, or remove or edit content at our sole discretion.
            </p>
          </SectionContent>
        </SectionContainer>

        <SectionContainer
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <SectionTitle>4. Medical Disclaimer</SectionTitle>
          <SectionContent>
            <p>
              <strong>ZEN-LYF AI IS NOT A MEDICAL DEVICE AND IS NOT INTENDED TO DIAGNOSE, TREAT, CURE, OR PREVENT ANY DISEASE OR HEALTH CONDITION.</strong> Our Services are designed to complement, not replace, the relationship between you and your healthcare providers.
            </p>
            <p>
              The information provided through our Services is for informational and educational purposes only. It should not be interpreted as medical advice or used as a substitute for professional medical consultation, diagnosis, or treatment. Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical condition.
            </p>
            <p>
              In case of a medical emergency, call your doctor or emergency services immediately. Do not rely solely on our emergency detection features or alerts.
            </p>
          </SectionContent>
        </SectionContainer>

        <SectionContainer
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <SectionTitle>5. User Responsibilities</SectionTitle>
          <SectionContent>
            <p>
              When using our Services, you agree to:
            </p>
            <ul>
              <li>Provide accurate, complete, and up-to-date information about yourself and your health</li>
              <li>Promptly update your information if it changes</li>
              <li>Use the Services in compliance with all applicable laws and regulations</li>
              <li>Not use the Services for any illegal or unauthorized purpose</li>
              <li>Not interfere with or disrupt the integrity or performance of the Services</li>
              <li>Not attempt to gain unauthorized access to the Services or related systems</li>
              <li>Not copy, modify, distribute, sell, or lease any part of our Services</li>
              <li>Maintain the confidentiality of any sensitive information you access through our Services</li>
            </ul>
          </SectionContent>
        </SectionContainer>

        <SectionContainer
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <SectionTitle>6. Subscription and Payment</SectionTitle>
          <SectionContent>
            <p>
              Some of our Services are available on a subscription basis. By subscribing to our paid Services, you agree to the following terms:
            </p>
            <ul>
              <li>You authorize us to charge the payment method you provide for the subscription fees</li>
              <li>Subscription fees are billed in advance on a monthly or annual basis, depending on your selected plan</li>
              <li>Subscriptions automatically renew unless you cancel before the renewal date</li>
              <li>No refunds or credits will be provided for partial months of service or unused features</li>
              <li>We may change subscription fees by providing at least 30 days' notice prior to the billing date</li>
              <li>You are responsible for all applicable taxes in addition to the subscription fees</li>
            </ul>
            <p>
              To cancel your subscription, you can do so through your account settings or by contacting our customer support team. Cancellation will take effect at the end of your current billing cycle.
            </p>
          </SectionContent>
        </SectionContainer>

        <SectionContainer
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <SectionTitle>7. Intellectual Property</SectionTitle>
          <SectionContent>
            <p>
              All content, features, and functionality of our Services, including but not limited to text, graphics, logos, icons, images, audio clips, software, and the design, selection, and arrangement thereof, are owned by ZEN-LYF AI, our licensors, or other providers and are protected by copyright, trademark, patent, and other intellectual property laws.
            </p>
            <p>
              We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use our Services for personal, non-commercial purposes. This license does not include the right to:
            </p>
            <ul>
              <li>Modify, reproduce, or create derivative works based on our Services</li>
              <li>Frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information</li>
              <li>Use any meta tags or other hidden text utilizing our name or trademarks</li>
              <li>Use any data mining, robots, or similar data gathering or extraction methods</li>
            </ul>
            <p>
              Any use of our Services not expressly permitted by these Terms is a breach and may violate copyright, trademark, and other laws.
            </p>
          </SectionContent>
        </SectionContainer>

        <SectionContainer
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <SectionTitle>8. Privacy</SectionTitle>
          <SectionContent>
            <p>
              Your privacy is important to us. Our <Link to="/privacy">Privacy Policy</Link> explains how we collect, use, and protect your information. By using our Services, you consent to the collection and use of information as described in our Privacy Policy.
            </p>
            <p>
              We comply with all applicable privacy laws, including the Health Insurance Portability and Accountability Act (HIPAA) and, where applicable, the General Data Protection Regulation (GDPR).
            </p>
          </SectionContent>
        </SectionContainer>

        <SectionContainer
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <SectionTitle>9. Limitation of Liability</SectionTitle>
          <SectionContent>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, ZEN-LYF AI, ITS AFFILIATES, AND THEIR RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES.
            </p>
            <p>
              IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS EXCEED THE AMOUNT PAID BY YOU, IF ANY, FOR ACCESSING OR USING OUR SERVICES DURING THE 12 MONTHS PRECEDING THE CLAIM.
            </p>
            <p>
              THE LIMITATIONS SET FORTH ABOVE WILL APPLY EVEN IF THE ABOVE STATED REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
            </p>
          </SectionContent>
        </SectionContainer>

        <SectionContainer
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <SectionTitle>10. Indemnification</SectionTitle>
          <SectionContent>
            <p>
              You agree to indemnify, defend, and hold harmless ZEN-LYF AI, its affiliates, and their respective officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) that arise from or relate to:
            </p>
            <ul>
              <li>Your use of or access to our Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Your content or information provided to us</li>
            </ul>
            <p>
              We reserve the right, at our own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, in which event you will cooperate with us in asserting any available defenses.
            </p>
          </SectionContent>
        </SectionContainer>

        <SectionContainer
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <SectionTitle>11. Termination</SectionTitle>
          <SectionContent>
            <p>
              We may terminate or suspend your account and access to our Services immediately, without prior notice or liability, for any reason, including, without limitation, if you breach these Terms.
            </p>
            <p>
              Upon termination, your right to use the Services will immediately cease. If you wish to terminate your account, you may simply discontinue using the Services or contact us to request account deletion.
            </p>
            <p>
              All provisions of these Terms that by their nature should survive termination shall survive, including, without limitation, ownership provisions, warranty disclaimers, indemnification, and limitations of liability.
            </p>
          </SectionContent>
        </SectionContainer>

        <SectionContainer
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <SectionTitle>12. Governing Law and Dispute Resolution</SectionTitle>
          <SectionContent>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
            </p>
            <p>
              Any dispute arising from or relating to these Terms or our Services shall be resolved exclusively through binding arbitration in San Francisco, California, under the rules of the American Arbitration Association. The arbitration shall be conducted on a confidential basis pursuant to the Commercial Arbitration Rules of the American Arbitration Association. Any decision or award as a result of such arbitration shall be in writing and shall provide an explanation for all conclusions of law and fact.
            </p>
            <p>
              The arbitrator's award shall be binding and may be entered as a judgment in any court of competent jurisdiction. To the fullest extent permitted by law, arbitration under these Terms shall be conducted on an individual basis only, not a class, consolidated, or representative basis.
            </p>
            <p>
              Notwithstanding the foregoing, we may seek injunctive or other equitable relief to protect our intellectual property rights in any court of competent jurisdiction.
            </p>
          </SectionContent>
        </SectionContainer>

        <SectionContainer
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <SectionTitle>13. Miscellaneous</SectionTitle>
          <SectionContent>
            <SubsectionTitle>Entire Agreement</SubsectionTitle>
            <p>
              These Terms, together with our Privacy Policy and any other agreements expressly incorporated by reference herein, constitute the entire agreement between you and ZEN-LYF AI concerning your use of the Services and supersede all prior or contemporaneous communications.
            </p>
            
            <SubsectionTitle>Waiver</SubsectionTitle>
            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of such right or provision. The waiver of any such right or provision will be effective only if in writing and signed by a duly authorized representative of ZEN-LYF AI.
            </p>
            
            <SubsectionTitle>Severability</SubsectionTitle>
            <p>
              If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced to the fullest extent under law.
            </p>
            
            <SubsectionTitle>Assignment</SubsectionTitle>
            <p>
              You may not assign or transfer these Terms or your rights under these Terms, in whole or in part, without our prior written consent. We may assign these Terms at any time without notice.
            </p>
            
            <SubsectionTitle>Force Majeure</SubsectionTitle>
            <p>
              We will not be liable for any delay or failure to perform as required by these Terms due to any cause beyond our reasonable control, including acts of God, labor disputes, or other industrial disturbances, systemic electrical, telecommunications, or utility failures, earthquakes, storms, or other natural events, blockages, embargoes, riots, acts or orders of government, acts of terrorism, or war.
            </p>
          </SectionContent>
        </SectionContainer>

        <SectionContainer
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <SectionTitle>14. Contact Information</SectionTitle>
          <SectionContent>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <ContactInfo>
              <ContactItem><strong>Email:</strong> legal@zen-lyf.com</ContactItem>
              <ContactItem><strong>Phone:</strong> +1 (800) 555-1234</ContactItem>
              <ContactItem><strong>Address:</strong> 123 Wellness Way, Health City, CA 94000, USA</ContactItem>
            </ContactInfo>
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

export default TermsPage; 
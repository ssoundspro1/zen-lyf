import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaUserShield, FaClipboardCheck, FaServer, FaDatabase, FaFileAlt, FaUserSecret } from 'react-icons/fa';
import { MdSecurity, MdVerified } from 'react-icons/md';
import { RiGlobalLine } from 'react-icons/ri';
import { HiShieldCheck } from 'react-icons/hi';
import IconWrapper from 'components/IconWrapper';

const CompliancePage: React.FC = () => {
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

  // Compliance certifications
  const certifications = [
    {
      id: 'hipaa',
      name: 'HIPAA Compliant',
      icon: <IconWrapper icon={FaShieldAlt} />,
      description: 'ZEN-LYF meets all requirements of the Health Insurance Portability and Accountability Act, ensuring the protection of sensitive patient health information.'
    },
    {
      id: 'gdpr',
      name: 'GDPR Compliant',
      icon: <IconWrapper icon={RiGlobalLine} />,
      description: 'Our platform adheres to the General Data Protection Regulation standards, providing robust privacy protections for users in the European Union and beyond.'
    },
    {
      id: 'hitrust',
      name: 'HITRUST Certified',
      icon: <IconWrapper icon={MdVerified} />,
      description: 'ZEN-LYF has achieved HITRUST CSF Certification, demonstrating that our platform meets key regulations and industry-defined requirements for protecting sensitive information.'
    },
    {
      id: 'soc2',
      name: 'SOC 2 Type II',
      icon: <IconWrapper icon={FaClipboardCheck} />,
      description: 'Our platform has successfully completed SOC 2 Type II audits, verifying our security, availability, processing integrity, confidentiality, and privacy controls.'
    }
  ];

  // Security measures
  const securityMeasures = [
    {
      id: 'encryption',
      title: 'End-to-End Encryption',
      icon: <IconWrapper icon={FaLock} />,
      description: 'All data is encrypted in transit and at rest using AES-256 encryption, ensuring your health information remains secure at all times.'
    },
    {
      id: 'access-controls',
      title: 'Granular Access Controls',
      icon: <IconWrapper icon={FaUserShield} />,
      description: 'Role-based access controls ensure that only authorized personnel can access specific types of data, with comprehensive audit logging of all access events.'
    },
    {
      id: 'infrastructure',
      title: 'Secure Infrastructure',
      icon: <IconWrapper icon={FaServer} />,
      description: 'Our platform is hosted in HIPAA-compliant data centers with redundant systems, regular security assessments, and continuous monitoring for threats.'
    },
    {
      id: 'backups',
      title: 'Encrypted Backups',
      icon: <IconWrapper icon={FaDatabase} />,
      description: 'Regular encrypted backups with strict retention policies ensure data durability while maintaining the highest security standards.'
    }
  ];

  // Compliance practices
  const compliancePractices = [
    {
      id: 'risk-assessment',
      title: 'Regular Risk Assessments',
      description: 'We conduct comprehensive risk assessments at least quarterly to identify and address potential vulnerabilities in our systems and processes.'
    },
    {
      id: 'employee-training',
      title: 'Staff Training & Awareness',
      description: 'All employees undergo rigorous security and compliance training upon hiring and regularly thereafter to ensure awareness of best practices and regulations.'
    },
    {
      id: 'incident-response',
      title: 'Incident Response Plan',
      description: 'A detailed incident response plan is maintained and regularly tested to ensure rapid and effective response to any potential security incidents.'
    },
    {
      id: 'third-party',
      title: 'Third-Party Audits',
      description: 'Independent security firms conduct regular penetration testing and security audits to verify the effectiveness of our security measures.'
    },
    {
      id: 'baa',
      title: 'Business Associate Agreements',
      description: 'We maintain BAAs with all vendors who may have access to protected health information, ensuring the chain of trust remains unbroken.'
    },
    {
      id: 'data-minimization',
      title: 'Data Minimization',
      description: 'We collect and retain only the data necessary for providing our services, reducing the risk surface and enhancing privacy.'
    }
  ];

  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <HeroTitle>Security & Compliance</HeroTitle>
          <HeroSubtitle>
            Your health data deserves the highest level of protection. 
            Learn how ZEN-LYF safeguards your information with industry-leading 
            security measures and regulatory compliance.
          </HeroSubtitle>
        </motion.div>
      </HeroSection>

      {/* Certifications Section */}
      <Section>
        <SectionHeader>
          <SectionTitle>Our Certifications</SectionTitle>
          <SectionDescription>
            ZEN-LYF meets or exceeds the most rigorous healthcare compliance standards
          </SectionDescription>
        </SectionHeader>

        <CertificationsGrid>
          {certifications.map(cert => (
            <CertificationCard 
              key={cert.id}
              as={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <CertificationIcon>{cert.icon}</CertificationIcon>
              <CertificationName>{cert.name}</CertificationName>
              <CertificationDescription>{cert.description}</CertificationDescription>
            </CertificationCard>
          ))}
        </CertificationsGrid>
      </Section>

      {/* HIPAA Compliance Section */}
      <HipaaSection>
        <HipaaContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <IconWrapper icon={HiShieldCheck} />
            <HipaaDescription>
              The Health Insurance Portability and Accountability Act (HIPAA) establishes national standards 
              to protect individuals' medical records and other personal health information. 
              ZEN-LYF is fully HIPAA compliant, implementing all required administrative, 
              physical, and technical safeguards.
            </HipaaDescription>
            <HipaaFeatures>
              <HipaaFeature>
                <FeatureIcon><IconWrapper icon={FaFileAlt} /></FeatureIcon>
                <FeatureText>Comprehensive policies and procedures for handling PHI</FeatureText>
              </HipaaFeature>
              <HipaaFeature>
                <FeatureIcon><IconWrapper icon={FaUserSecret} /></FeatureIcon>
                <FeatureText>Privacy Officer oversight of all data handling practices</FeatureText>
              </HipaaFeature>
              <HipaaFeature>
                <FeatureIcon><IconWrapper icon={MdSecurity} /></FeatureIcon>
                <FeatureText>Regular security risk analyses and management</FeatureText>
              </HipaaFeature>
              <HipaaFeature>
                <FeatureIcon><IconWrapper icon={FaClipboardCheck} /></FeatureIcon>
                <FeatureText>Detailed audit controls and integrity monitoring</FeatureText>
              </HipaaFeature>
            </HipaaFeatures>
          </motion.div>
        </HipaaContent>
        <HipaaImageContainer>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <IconWrapper icon={HipaaImage} />
          </motion.div>
        </HipaaImageContainer>
      </HipaaSection>

      {/* Security Measures Section */}
      <SecuritySection>
        <SectionHeader>
          <SectionTitle>Security Measures</SectionTitle>
          <SectionDescription>
            How we protect your sensitive health information
          </SectionDescription>
        </SectionHeader>

        <SecurityGrid>
          {securityMeasures.map(measure => (
            <SecurityCard 
              key={measure.id}
              as={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <SecurityIcon>{measure.icon}</SecurityIcon>
              <SecurityTitle>{measure.title}</SecurityTitle>
              <SecurityDescription>{measure.description}</SecurityDescription>
            </SecurityCard>
          ))}
        </SecurityGrid>
      </SecuritySection>

      {/* Compliance Practices Section */}
      <PracticesSection>
        <SectionHeader>
          <SectionTitle>Our Compliance Practices</SectionTitle>
          <SectionDescription>
            Ongoing processes that ensure the highest standards of data protection
          </SectionDescription>
        </SectionHeader>

        <PracticesContainer
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {compliancePractices.map((practice, index) => (
            <PracticeItem 
              key={practice.id}
              variants={fadeIn}
            >
              <PracticeNumber>{index + 1}</PracticeNumber>
              <PracticeContent>
                <PracticeTitle>{practice.title}</PracticeTitle>
                <PracticeDescription>{practice.description}</PracticeDescription>
              </PracticeContent>
            </PracticeItem>
          ))}
        </PracticesContainer>
      </PracticesSection>

      {/* Data Rights Section */}
      <DataRightsSection>
        <SectionHeader>
          <SectionTitle>Your Data Rights</SectionTitle>
          <SectionDescription>
            ZEN-LYF respects and upholds your rights regarding your personal health information
          </SectionDescription>
        </SectionHeader>

        <DataRightsGrid>
          <DataRightCard
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <DataRightTitle>Right to Access</DataRightTitle>
            <DataRightDescription>
              You can request and receive a copy of your health information stored in our systems at any time through your account settings or by contacting our Privacy Officer.
            </DataRightDescription>
          </DataRightCard>

          <DataRightCard
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <DataRightTitle>Right to Correct</DataRightTitle>
            <DataRightDescription>
              If you believe any of your health information in our system is incorrect, you have the right to request corrections to ensure accuracy.
            </DataRightDescription>
          </DataRightCard>

          <DataRightCard
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <DataRightTitle>Right to Delete</DataRightTitle>
            <DataRightDescription>
              You can request deletion of your personal data, subject to certain exceptions related to compliance with legal obligations and legitimate business purposes.
            </DataRightDescription>
          </DataRightCard>

          <DataRightCard
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <DataRightTitle>Right to Restrict Processing</DataRightTitle>
            <DataRightDescription>
              You can request limitations on how we use your data in certain circumstances, such as when you contest the accuracy of the data we hold.
            </DataRightDescription>
          </DataRightCard>

          <DataRightCard
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <DataRightTitle>Right to Data Portability</DataRightTitle>
            <DataRightDescription>
              You can request and receive your data in a structured, commonly used format that can be transferred to another service provider.
            </DataRightDescription>
          </DataRightCard>

          <DataRightCard
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <DataRightTitle>Right to Object</DataRightTitle>
            <DataRightDescription>
              You have the right to object to certain types of processing of your data, including processing for direct marketing purposes.
            </DataRightDescription>
          </DataRightCard>
        </DataRightsGrid>
      </DataRightsSection>

      {/* CTA Section */}
      <CTASection>
        <CTAContent>
          <CTATitle>Have Questions About Our Compliance?</CTATitle>
          <CTADescription>
            Our dedicated Privacy and Compliance team is ready to address any concerns
          </CTADescription>
          <CTAButtons>
            <PrimaryButton>Contact Privacy Officer</PrimaryButton>
            <SecondaryButton>View Privacy Policy</SecondaryButton>
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

const Section = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
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

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const CertificationCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(62, 146, 204, 0.2);
  }
`;

const CertificationIcon = styled.div`
  font-size: 3rem;
  color: #3e92cc;
  margin-bottom: 1.5rem;
`;

const CertificationName = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #0a2463;
`;

const CertificationDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #555;
`;

const HipaaSection = styled.section`
  padding: 5rem 2rem;
  background: #f8f9fa;
  display: flex;
  align-items: center;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const HipaaContent = styled.div`
  flex: 1;
  padding: 0 3rem;

  @media (max-width: 992px) {
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const HipaaTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #0a2463;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HipaaDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 2rem;
`;

const HipaaFeatures = styled.div`
  margin-top: 2rem;
`;

const HipaaFeature = styled.div`
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

const HipaaImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HipaaImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;

const SecuritySection = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SecurityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const SecurityCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(62, 146, 204, 0.2);
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
  font-size: 0.95rem;
  line-height: 1.6;
  color: #555;
`;

const PracticesSection = styled.section`
  padding: 5rem 2rem;
  background: #f8f9fa;
`;

const PracticesContainer = styled(motion.div)`
  max-width: 900px;
  margin: 0 auto;
`;

const PracticeItem = styled(motion.div)`
  display: flex;
  margin-bottom: 2rem;
  align-items: flex-start;
`;

const PracticeNumber = styled.div`
  background: #3e92cc;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin-right: 1.5rem;
  flex-shrink: 0;
`;

const PracticeContent = styled.div`
  flex: 1;
`;

const PracticeTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #0a2463;
`;

const PracticeDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
`;

const DataRightsSection = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const DataRightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const DataRightCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  border-left: 4px solid #3e92cc;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(62, 146, 204, 0.2);
  }
`;

const DataRightTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #0a2463;
`;

const DataRightDescription = styled.p`
  font-size: 0.95rem;
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

export default CompliancePage;

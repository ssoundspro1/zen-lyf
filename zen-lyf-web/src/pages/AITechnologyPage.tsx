import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBrain, FaChartLine, FaRobot, FaMicrochip, FaHeartbeat, FaShieldAlt, FaCode, FaFlask } from 'react-icons/fa';
import { BsGraphUp, BsCardImage, BsFileEarmarkMedical, BsTranslate } from 'react-icons/bs';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { MdOutlineHealthAndSafety, MdSecurity } from 'react-icons/md';
import IconWrapper from 'components/IconWrapper';

const AITechnologyPage: React.FC = () => {
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

  const pathAnimation = {
    hidden: { pathLength: 0 },
    visible: { 
      pathLength: 1,
      transition: { 
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <HeroTitle>AI Technology</HeroTitle>
          <HeroSubtitle>
            Discover how ZEN-LYF's advanced artificial intelligence technologies 
            are revolutionizing healthcare and personal wellness
          </HeroSubtitle>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <HeroImage src="/assets/ai-technology-hero.png" alt="AI Technology Visualization" />
        </motion.div>
      </HeroSection>

      {/* Core Technologies Section */}
      <Section id="core-technologies">
        <SectionHeader>
          <SectionTitle>Core AI Technologies</SectionTitle>
          <SectionDescription>
            The foundational AI technologies that power the ZEN-LYF platform
          </SectionDescription>
        </SectionHeader>

        <TechGrid>
          <TechCard
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <TechIcon><IconWrapper icon={FaBrain} /></TechIcon>
            <TechTitle>Deep Learning</TechTitle>
            <TechDescription>
              State-of-the-art neural networks that can identify complex patterns in health data and provide personalized insights with high accuracy.
            </TechDescription>
          </TechCard>

          <TechCard
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <TechIcon><IconWrapper icon={BsTranslate} /></TechIcon>
            <TechTitle>Natural Language Processing</TechTitle>
            <TechDescription>
              Advanced NLP models that can understand medical terminology, extract insights from reports, and communicate in plain language.
            </TechDescription>
          </TechCard>

          <TechCard
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <TechIcon><IconWrapper icon={BsCardImage} /></TechIcon>
            <TechTitle>Computer Vision</TechTitle>
            <TechDescription>
              Sophisticated image recognition systems that can analyze medical images, detect abnormalities, and assist in diagnosis.
            </TechDescription>
          </TechCard>

          <TechCard
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <TechIcon><IconWrapper icon={BsGraphUp} /></TechIcon>
            <TechTitle>Predictive Analytics</TechTitle>
            <TechDescription>
              Time-series forecasting and anomaly detection algorithms that can predict health trends and identify potential issues before they become critical.
            </TechDescription>
          </TechCard>

          <TechCard
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <TechIcon><IconWrapper icon={FaRobot} /></TechIcon>
            <TechTitle>Generative AI</TechTitle>
            <TechDescription>
              Cutting-edge generative models that create personalized health recommendations, workout plans, and recovery strategies.
            </TechDescription>
          </TechCard>

          <TechCard
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <TechIcon><IconWrapper icon={FaMicrochip} /></TechIcon>
            <TechTitle>Edge AI</TechTitle>
            <TechDescription>
              On-device AI processing for wearables and mobile devices that ensures real-time analysis and privacy-preserving computation.
            </TechDescription>
          </TechCard>
        </TechGrid>
      </Section>

      {/* AI Capabilities Section */}
      <GradientSection id="ai-capabilities">
        <SectionHeader light>
          <SectionTitle light>AI Capabilities</SectionTitle>
          <SectionDescription light>
            How our AI technologies are applied to transform healthcare experiences
          </SectionDescription>
        </SectionHeader>

        <CapabilitiesContainer
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <CapabilityItem variants={fadeIn}>
            <CapabilityIcon><IconWrapper icon={BsFileEarmarkMedical} /></CapabilityIcon>
            <CapabilityContent>
              <CapabilityTitle>Medical Report Analysis</CapabilityTitle>
              <CapabilityDescription>
                Our AI can analyze complex medical reports, lab results, and imaging scans to extract key insights and present them in easy-to-understand language. The system identifies critical values, trends, and potential areas of concern while providing contextual information about medical terminology.
              </CapabilityDescription>
            </CapabilityContent>
          </CapabilityItem>

          <CapabilityItem variants={fadeIn}>
            <CapabilityIcon><IconWrapper icon={FaHeartbeat} /></CapabilityIcon>
            <CapabilityContent>
              <CapabilityTitle>Vital Signs Monitoring</CapabilityTitle>
              <CapabilityDescription>
                Our AI continuously analyzes vital signs data from wearable devices to establish personalized baseline ranges and detect anomalies. The system distinguishes between normal variations and potentially concerning patterns, sending timely alerts when intervention may be needed.
              </CapabilityDescription>
            </CapabilityContent>
          </CapabilityItem>

          <CapabilityItem variants={fadeIn}>
            <CapabilityIcon><IconWrapper icon={FaChartLine} /></CapabilityIcon>
            <CapabilityContent>
              <CapabilityTitle>Recovery Trajectory Prediction</CapabilityTitle>
              <CapabilityDescription>
                For post-surgical or rehabilitation patients, our AI predicts expected recovery trajectories based on thousands of similar cases while accounting for individual health factors. This allows for personalized recovery plans and early intervention if progress deviates from expectations.
              </CapabilityDescription>
            </CapabilityContent>
          </CapabilityItem>

          <CapabilityItem variants={fadeIn}>
            <CapabilityIcon><IconWrapper icon={MdOutlineHealthAndSafety} /></CapabilityIcon>
            <CapabilityContent>
              <CapabilityTitle>Emergency Detection</CapabilityTitle>
              <CapabilityDescription>
                Our AI can identify emergency situations like falls, sudden cardiac events, or stroke symptoms through wearable sensors and trigger appropriate response protocols. The system uses multi-parameter analysis to minimize false alarms while ensuring genuine emergencies are detected.
              </CapabilityDescription>
            </CapabilityContent>
          </CapabilityItem>
        </CapabilitiesContainer>
      </GradientSection>

      {/* How It Works Section */}
      <Section id="how-it-works">
        <SectionHeader>
          <SectionTitle>How Our AI Works</SectionTitle>
          <SectionDescription>
            Understanding the technology behind ZEN-LYF's intelligent health analysis
          </SectionDescription>
        </SectionHeader>

        <ProcessFlow>
          <ProcessStep>
            <ProcessNumber>1</ProcessNumber>
            <ProcessContent>
              <ProcessTitle>Data Collection</ProcessTitle>
              <ProcessDescription>
                Health data is collected from multiple sources including wearable devices, medical records, and user inputs. This creates a comprehensive health profile with both historical and real-time information.
              </ProcessDescription>
            </ProcessContent>
          </ProcessStep>

          <ProcessArrow>→</ProcessArrow>

          <ProcessStep>
            <ProcessNumber>2</ProcessNumber>
            <ProcessContent>
              <ProcessTitle>Pre-processing</ProcessTitle>
              <ProcessDescription>
                Raw data is cleaned, normalized, and transformed into structured formats that can be efficiently analyzed by our AI models. Missing values are handled and outliers are identified.
              </ProcessDescription>
            </ProcessContent>
          </ProcessStep>

          <ProcessArrow>→</ProcessArrow>

          <ProcessStep>
            <ProcessNumber>3</ProcessNumber>
            <ProcessContent>
              <ProcessTitle>AI Analysis</ProcessTitle>
              <ProcessDescription>
                Multiple specialized AI models analyze different aspects of the health data, looking for patterns, anomalies, and insights that might not be immediately obvious to human observers.
              </ProcessDescription>
            </ProcessContent>
          </ProcessStep>

          <ProcessArrow>→</ProcessArrow>

          <ProcessStep>
            <ProcessNumber>4</ProcessNumber>
            <ProcessContent>
              <ProcessTitle>Insight Generation</ProcessTitle>
              <ProcessDescription>
                The AI synthesizes findings into actionable insights, personalized recommendations, and clear explanations tailored to the user's health literacy level and preferences.
              </ProcessDescription>
            </ProcessContent>
          </ProcessStep>
        </ProcessFlow>
      </Section>

      {/* Technology Stack Section */}
      <Section id="tech-stack">
        <SectionHeader>
          <SectionTitle>Our AI Technology Stack</SectionTitle>
          <SectionDescription>
            The cutting-edge tools and frameworks powering ZEN-LYF's AI capabilities
          </SectionDescription>
        </SectionHeader>

        <TechStackContainer>
          <TechStackColumn>
            <TechStackCategory>
              <TechStackCategoryTitle>Machine Learning Frameworks</TechStackCategoryTitle>
              <TechStackItems>
                <TechStackItem>TensorFlow</TechStackItem>
                <TechStackItem>PyTorch</TechStackItem>
                <TechStackItem>Scikit-learn</TechStackItem>
                <TechStackItem>Hugging Face Transformers</TechStackItem>
              </TechStackItems>
            </TechStackCategory>

            <TechStackCategory>
              <TechStackCategoryTitle>Computer Vision</TechStackCategoryTitle>
              <TechStackItems>
                <TechStackItem>OpenCV</TechStackItem>
                <TechStackItem>MONAI (Medical AI)</TechStackItem>
                <TechStackItem>MedPy</TechStackItem>
              </TechStackItems>
            </TechStackCategory>
          </TechStackColumn>

          <TechStackColumn>
            <TechStackCategory>
              <TechStackCategoryTitle>Natural Language Processing</TechStackCategoryTitle>
              <TechStackItems>
                <TechStackItem>BERT & BioBERT</TechStackItem>
                <TechStackItem>GPT Models</TechStackItem>
                <TechStackItem>ScispaCy (Medical NLP)</TechStackItem>
                <TechStackItem>UMLS Integration</TechStackItem>
              </TechStackItems>
            </TechStackCategory>

            <TechStackCategory>
              <TechStackCategoryTitle>Deployment & Scaling</TechStackCategoryTitle>
              <TechStackItems>
                <TechStackItem>Kubernetes</TechStackItem>
                <TechStackItem>TensorFlow Serving</TechStackItem>
                <TechStackItem>ONNX Runtime</TechStackItem>
                <TechStackItem>TensorRT</TechStackItem>
              </TechStackItems>
            </TechStackCategory>
          </TechStackColumn>
        </TechStackContainer>
      </Section>

      {/* Data Security Section */}
      <GradientSection id="data-security">
        <SectionHeader light>
          <SectionTitle light>AI With Privacy By Design</SectionTitle>
          <SectionDescription light>
            How we ensure your health data remains secure while leveraging AI insights
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
            <SecurityIcon><IconWrapper icon={FaShieldAlt} /></SecurityIcon>
            <SecurityTitle>Federated Learning</SecurityTitle>
            <SecurityDescription>
              Our AI models can be trained across multiple devices without raw data ever leaving your device, ensuring privacy while still benefiting from collective learning.
            </SecurityDescription>
          </SecurityCard>

          <SecurityCard
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SecurityIcon><IconWrapper icon={FaCode} /></SecurityIcon>
            <SecurityTitle>Differential Privacy</SecurityTitle>
            <SecurityDescription>
              Mathematical techniques are applied to ensure individual health records cannot be identified from aggregated data used in model training.
            </SecurityDescription>
          </SecurityCard>

          <SecurityCard
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SecurityIcon><IconWrapper icon={MdSecurity} /></SecurityIcon>
            <SecurityTitle>On-Device Processing</SecurityTitle>
            <SecurityDescription>
              Whenever possible, AI analysis happens directly on your device, minimizing data transmission and reducing privacy risks.
            </SecurityDescription>
          </SecurityCard>

          <SecurityCard
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SecurityIcon><IconWrapper icon={AiOutlineCloudServer} /></SecurityIcon>
            <SecurityTitle>HIPAA-Compliant Cloud</SecurityTitle>
            <SecurityDescription>
              When cloud processing is required, your data is protected by enterprise-grade encryption and security measures that comply with healthcare regulations.
            </SecurityDescription>
          </SecurityCard>
        </SecurityGrid>
      </GradientSection>

      {/* Research & Development Section */}
      <Section id="research">
        <SectionHeader>
          <SectionTitle>Research & Development</SectionTitle>
          <SectionDescription>
            Our ongoing research to advance healthcare AI technologies
          </SectionDescription>
        </SectionHeader>

        <ResearchGrid>
          <ResearchCard>
            <ResearchCardInner>
              <ResearchFront>
                <ResearchIcon><IconWrapper icon={FaFlask} /></ResearchIcon>
                <ResearchTitle>Multi-modal Health Prediction</ResearchTitle>
              </ResearchFront>
              <ResearchBack>
                <ResearchDescription>
                  We're developing advanced AI models that can integrate diverse data types—wearable sensors, medical images, lab results, and genetic information—to create comprehensive health predictions with unprecedented accuracy.
                </ResearchDescription>
              </ResearchBack>
            </ResearchCardInner>
          </ResearchCard>

          <ResearchCard>
            <ResearchCardInner>
              <ResearchFront>
                <ResearchIcon><IconWrapper icon={FaMicrochip} /></ResearchIcon>
                <ResearchTitle>Ultra-efficient Edge AI</ResearchTitle>
              </ResearchFront>
              <ResearchBack>
                <ResearchDescription>
                  Our research teams are working on highly optimized neural network architectures that can run sophisticated health monitoring algorithms on low-power wearable devices without compromising battery life.
                </ResearchDescription>
              </ResearchBack>
            </ResearchCardInner>
          </ResearchCard>

          <ResearchCard>
            <ResearchCardInner>
              <ResearchFront>
                <ResearchIcon><IconWrapper icon={FaBrain} /></ResearchIcon>
                <ResearchTitle>Personalized Medical NLP</ResearchTitle>
              </ResearchFront>
              <ResearchBack>
                <ResearchDescription>
                  We're pioneering adaptive natural language processing systems that can adjust their communication style and depth of medical explanation based on each user's health literacy, preferences, and emotional state.
                </ResearchDescription>
              </ResearchBack>
            </ResearchCardInner>
          </ResearchCard>

          <ResearchCard>
            <ResearchCardInner>
              <ResearchFront>
                <ResearchIcon><IconWrapper icon={FaHeartbeat} /></ResearchIcon>
                <ResearchTitle>Continuous Biomarker Discovery</ResearchTitle>
              </ResearchFront>
              <ResearchBack>
                <ResearchDescription>
                  Our AI systems are constantly analyzing anonymized health data to discover new biomarkers and subtle patterns that could serve as early warning signs for various health conditions.
                </ResearchDescription>
              </ResearchBack>
            </ResearchCardInner>
          </ResearchCard>
        </ResearchGrid>
      </Section>

      {/* CTA Section */}
      <CTASection>
        <CTAContent>
          <CTATitle>Experience the Future of AI-Powered Healthcare</CTATitle>
          <CTADescription>
            Join thousands of users already benefiting from ZEN-LYF's advanced AI technologies
          </CTADescription>
          <CTAButtons>
            <PrimaryButton>Get Started</PrimaryButton>
            <SecondaryButton>Schedule a Demo</SecondaryButton>
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

const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 2rem;
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
`;

const Section = styled.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  &:nth-child(even) {
    background-color: #f8f9fa;
  }
`;

const GradientSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #3e92cc 0%, #0a2463 100%);
  color: white;
`;

const SectionHeader = styled.div<{ light?: boolean }>`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2<{ light?: boolean }>`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${props => props.light ? 'white' : '#0a2463'};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionDescription = styled.p<{ light?: boolean }>`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  color: ${props => props.light ? 'rgba(255, 255, 255, 0.9)' : '#666'};
  line-height: 1.6;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const TechCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(62, 146, 204, 0.2);
  }
`;

const TechIcon = styled.div`
  font-size: 2.5rem;
  color: #3e92cc;
  margin-bottom: 1.5rem;
`;

const TechTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #0a2463;
`;

const TechDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
`;

const CapabilitiesContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const CapabilityItem = styled(motion.div)`
  display: flex;
  margin-bottom: 3rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CapabilityIcon = styled.div`
  font-size: 2.5rem;
  color: white;
  margin-right: 2rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const CapabilityContent = styled.div``;

const CapabilityTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const CapabilityDescription = styled.p`
  font-size: 1.05rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const ProcessFlow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const ProcessStep = styled.div`
  display: flex;
  align-items: flex-start;
  width: 18%;
  
  @media (max-width: 992px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const ProcessNumber = styled.div`
  background: #3e92cc;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const ProcessContent = styled.div``;

const ProcessTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #0a2463;
`;

const ProcessDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: #555;
`;

const ProcessArrow = styled.div`
  font-size: 2rem;
  color: #3e92cc;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5%;
  
  @media (max-width: 992px) {
    transform: rotate(90deg);
    width: 100%;
    margin: -1rem 0;
  }
`;

const TechStackContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TechStackColumn = styled.div`
  flex: 1;
`;

const TechStackCategory = styled.div`
  margin-bottom: 2.5rem;
`;

const TechStackCategoryTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #0a2463;
  border-bottom: 2px solid #3e92cc;
  padding-bottom: 0.5rem;
`;

const TechStackItems = styled.ul`
  padding-left: 1.5rem;
`;

const TechStackItem = styled.li`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #555;
`;

const SecurityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SecurityCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SecurityIcon = styled.div`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 1.5rem;
`;

const SecurityTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
`;

const SecurityDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
`;

const ResearchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const ResearchCard = styled.div`
  perspective: 1000px;
  height: 300px;
`;

const ResearchCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  ${ResearchCard}:hover & {
    transform: rotateY(180deg);
  }
`;

const ResearchFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ResearchBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: #0a2463;
  color: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResearchIcon = styled.div`
  font-size: 3rem;
  color: #3e92cc;
  margin-bottom: 1.5rem;
`;

const ResearchTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #0a2463;
  text-align: center;
`;

const ResearchDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  text-align: center;
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

export default AITechnologyPage; 
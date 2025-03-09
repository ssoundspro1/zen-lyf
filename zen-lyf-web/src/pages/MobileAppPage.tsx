import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaApple, FaGooglePlay, FaMobile, FaBell, FaHeartbeat, FaSyncAlt, FaLock, FaWifi } from 'react-icons/fa';
import { MdHealthAndSafety, MdMonitorHeart, MdNotifications, MdDevices } from 'react-icons/md';
import IconWrapper from 'components/IconWrapper';

const MobileAppPage: React.FC = () => {
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

  const phoneAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.2
      }
    }
  };

  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <HeroTitle>Your Health Journey<br />In Your <AccentText>Pocket</AccentText></HeroTitle>
            <HeroSubtitle>
              Experience the power of ZEN-LYF's AI-driven health platform on iOS and Android,
              providing personalized care wherever you go
            </HeroSubtitle>

            <CTAContainer>
              <AppStoreButton 
                href="#" 
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconWrapper icon={FaApple} size={24} />
                <ButtonText>
                  <SmallText>Download on the</SmallText>
                  <LargeText>App Store</LargeText>
                </ButtonText>
              </AppStoreButton>

              <PlayStoreButton 
                href="#" 
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconWrapper icon={FaGooglePlay} size={22} />
                <ButtonText>
                  <SmallText>GET IT ON</SmallText>
                  <LargeText>Google Play</LargeText>
                </ButtonText>
              </PlayStoreButton>
            </CTAContainer>
          </motion.div>
          
          <PhoneContainer>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={phoneAnimation}
            >
              <PhoneImage src="/images/zen-lyf-app-mock.png" alt="ZEN-LYF Mobile App" />
              <PhoneGlow />
            </motion.div>
          </PhoneContainer>
        </HeroContent>
      </HeroSection>

      {/* Key Features Section */}
      <FeaturesSection>
        <SectionContainer>
          <SectionTitle>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Powerful Features in Your Pocket
            </motion.h2>
            <SectionSubtitle>
              The ZEN-LYF mobile app brings comprehensive health management to your fingertips
            </SectionSubtitle>
          </SectionTitle>

          <FeaturesGrid
            as={motion.div}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <FeatureCard
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
            >
              <FeatureIconWrapper>
                <IconWrapper icon={MdHealthAndSafety} size={32} />
              </FeatureIconWrapper>
              <FeatureTitle>Real-time Health Monitoring</FeatureTitle>
              <FeatureDescription>
                Track vital signs, activity levels, and health metrics in real-time with instant alerts for concerning changes.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
            >
              <FeatureIconWrapper>
                <IconWrapper icon={FaSyncAlt} size={32} />
              </FeatureIconWrapper>
              <FeatureTitle>Seamless Wearable Integration</FeatureTitle>
              <FeatureDescription>
                Connect your Apple Watch, Fitbit, or Google Fit device for automatic health data synchronization.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
            >
              <FeatureIconWrapper>
                <IconWrapper icon={FaBell} size={32} />
              </FeatureIconWrapper>
              <FeatureTitle>Smart Notifications</FeatureTitle>
              <FeatureDescription>
                Personalized reminders for medications, exercises, and appointments based on your custom recovery plan.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
            >
              <FeatureIconWrapper>
                <IconWrapper icon={MdMonitorHeart} size={32} />
              </FeatureIconWrapper>
              <FeatureTitle>Advanced Health Insights</FeatureTitle>
              <FeatureDescription>
                AI-powered analysis of your health data providing actionable insights for improved recovery and wellness.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
            >
              <FeatureIconWrapper>
                <IconWrapper icon={FaLock} size={32} />
              </FeatureIconWrapper>
              <FeatureTitle>End-to-End Security</FeatureTitle>
              <FeatureDescription>
                HIPAA-compliant encryption and biometric authentication keeping your health data completely secure.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard
              variants={fadeIn}
              whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
            >
              <FeatureIconWrapper>
                <IconWrapper icon={FaWifi} size={32} />
              </FeatureIconWrapper>
              <FeatureTitle>Offline Capability</FeatureTitle>
              <FeatureDescription>
                Access your health data, recovery plans, and exercises even without an internet connection.
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </SectionContainer>
      </FeaturesSection>

      {/* App Screens Showcase Section */}
      <ScreensSection>
        <SectionContainer>
          <SectionTitle>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Elegant, Intuitive Design
            </motion.h2>
            <SectionSubtitle>
              Experience the beautiful, easy-to-use interface of the ZEN-LYF mobile app
            </SectionSubtitle>
          </SectionTitle>

          <ScreensCarousel>
            <ScreensContainer
              as={motion.div}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <AppScreen>
                <ScreenImage src="/images/app-screen-1.png" alt="Dashboard Screen" />
                <ScreenCaption>Health Dashboard</ScreenCaption>
              </AppScreen>
              
              <AppScreen>
                <ScreenImage src="/images/app-screen-2.png" alt="Vitals Monitoring" />
                <ScreenCaption>Vitals Monitoring</ScreenCaption>
              </AppScreen>
              
              <AppScreen>
                <ScreenImage src="/images/app-screen-3.png" alt="Medical Reports" />
                <ScreenCaption>Medical Reports</ScreenCaption>
              </AppScreen>
              
              <AppScreen>
                <ScreenImage src="/images/app-screen-4.png" alt="Recovery Plan" />
                <ScreenCaption>Recovery Plan</ScreenCaption>
              </AppScreen>
              
              <AppScreen>
                <ScreenImage src="/images/app-screen-5.png" alt="Medication Tracking" />
                <ScreenCaption>Medication Tracking</ScreenCaption>
              </AppScreen>
            </ScreensContainer>
          </ScreensCarousel>

          <ScreensInfo>
            <InfoItem
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <InfoNumber>01</InfoNumber>
              <InfoTitle>Health Dashboard</InfoTitle>
              <InfoDescription>
                Comprehensive view of your health metrics, recovery progress, and daily activities in a beautiful glass-morphic design.
              </InfoDescription>
            </InfoItem>

            <InfoItem
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <InfoNumber>02</InfoNumber>
              <InfoTitle>Vitals Monitoring</InfoTitle>
              <InfoDescription>
                Real-time tracking of heart rate, blood pressure, oxygen levels, sleep quality, and other vital health metrics.
              </InfoDescription>
            </InfoItem>

            <InfoItem
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <InfoNumber>03</InfoNumber>
              <InfoTitle>Medical Reports</InfoTitle>
              <InfoDescription>
                Upload, view, and receive AI-powered analysis of your medical reports, MRIs, X-rays, and lab results.
              </InfoDescription>
            </InfoItem>

            <InfoItem
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <InfoNumber>04</InfoNumber>
              <InfoTitle>Recovery Plan</InfoTitle>
              <InfoDescription>
                Personalized recovery guidance with exercise routines, nutritional advice, and milestone tracking.
              </InfoDescription>
            </InfoItem>

            <InfoItem
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <InfoNumber>05</InfoNumber>
              <InfoTitle>Medication Tracking</InfoTitle>
              <InfoDescription>
                Smart medication reminders, adherence monitoring, and potential interaction warnings.
              </InfoDescription>
            </InfoItem>
          </ScreensInfo>
        </SectionContainer>
      </ScreensSection>

      {/* Device Compatibility Section */}
      <CompatibilitySection>
        <SectionContainer>
          <SectionTitle>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Works Seamlessly Across Devices
            </motion.h2>
            <SectionSubtitle>
              The ZEN-LYF mobile app is optimized for iOS and Android devices and integrates with popular wearables
            </SectionSubtitle>
          </SectionTitle>

          <DevicesGrid>
            <DeviceCategory
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <DeviceCategoryTitle>
                <IconWrapper icon={MdDevices} size={28} />
                <span>Smartphones</span>
              </DeviceCategoryTitle>

              <DeviceList>
                <DeviceItem>
                  <DeviceIcon><IconWrapper icon={FaApple} size={20} /></DeviceIcon>
                  <DeviceName>iPhone 11 and newer</DeviceName>
                </DeviceItem>
                <DeviceItem>
                  <DeviceIcon><IconWrapper icon={FaGooglePlay} size={20} /></DeviceIcon>
                  <DeviceName>Android 10.0+ devices</DeviceName>
                </DeviceItem>
                <DeviceItem>
                  <DeviceIcon><IconWrapper icon={FaMobile} size={20} /></DeviceIcon>
                  <DeviceName>Tablets (iPad, Android)</DeviceName>
                </DeviceItem>
              </DeviceList>
            </DeviceCategory>

            <DeviceCategory
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <DeviceCategoryTitle>
                <IconWrapper icon={FaHeartbeat} size={24} />
                <span>Wearables</span>
              </DeviceCategoryTitle>

              <DeviceList>
                <DeviceItem>
                  <DeviceIcon><IconWrapper icon={FaApple} size={20} /></DeviceIcon>
                  <DeviceName>Apple Watch Series 4+</DeviceName>
                </DeviceItem>
                <DeviceItem>
                  <DeviceIcon><IconWrapper icon={FaHeartbeat} size={20} /></DeviceIcon>
                  <DeviceName>Fitbit Sense, Versa</DeviceName>
                </DeviceItem>
                <DeviceItem>
                  <DeviceIcon><IconWrapper icon={FaHeartbeat} size={20} /></DeviceIcon>
                  <DeviceName>Samsung Galaxy Watch</DeviceName>
                </DeviceItem>
                <DeviceItem>
                  <DeviceIcon><IconWrapper icon={FaHeartbeat} size={20} /></DeviceIcon>
                  <DeviceName>Garmin Venu, Vivoactive</DeviceName>
                </DeviceItem>
              </DeviceList>
            </DeviceCategory>

            <DeviceCategory
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <DeviceCategoryTitle>
                <IconWrapper icon={MdNotifications} size={28} />
                <span>Notifications</span>
              </DeviceCategoryTitle>

              <DeviceList>
                <DeviceItem>
                  <DeviceIcon><IconWrapper icon={FaApple} size={20} /></DeviceIcon>
                  <DeviceName>Apple Push Notifications</DeviceName>
                </DeviceItem>
                <DeviceItem>
                  <DeviceIcon><IconWrapper icon={FaGooglePlay} size={20} /></DeviceIcon>
                  <DeviceName>Firebase Cloud Messaging</DeviceName>
                </DeviceItem>
                <DeviceItem>
                  <DeviceIcon><IconWrapper icon={FaBell} size={20} /></DeviceIcon>
                  <DeviceName>SMS Alerts (Emergency)</DeviceName>
                </DeviceItem>
                <DeviceItem>
                  <DeviceIcon><IconWrapper icon={FaBell} size={20} /></DeviceIcon>
                  <DeviceName>Email Notifications</DeviceName>
                </DeviceItem>
              </DeviceList>
            </DeviceCategory>
          </DevicesGrid>
        </SectionContainer>
      </CompatibilitySection>

      {/* Download CTA Section */}
      <DownloadSection>
        <SectionContainer>
          <DownloadContent>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <DownloadTitle>Take Control of Your Health Journey Today</DownloadTitle>
              <DownloadDescription>
                Join thousands of patients experiencing better recovery outcomes and improved wellness with the ZEN-LYF mobile app
              </DownloadDescription>

              <DownloadCTA>
                <AppStoreButton 
                  href="#" 
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconWrapper icon={FaApple} size={24} />
                  <ButtonText>
                    <SmallText>Download on the</SmallText>
                    <LargeText>App Store</LargeText>
                  </ButtonText>
                </AppStoreButton>

                <PlayStoreButton 
                  href="#" 
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconWrapper icon={FaGooglePlay} size={22} />
                  <ButtonText>
                    <SmallText>GET IT ON</SmallText>
                    <LargeText>Google Play</LargeText>
                  </ButtonText>
                </PlayStoreButton>
              </DownloadCTA>

              <ExtraInfo>
                Available for iOS 14.0+ and Android 10.0+<br />
                <Link to="/contact">Contact us</Link> for enterprise deployment options
              </ExtraInfo>
            </motion.div>
          </DownloadContent>
        </SectionContainer>
      </DownloadSection>
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  padding: 100px 0 120px;
  background: linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%);
  color: white;
  
  @media (max-width: 768px) {
    padding: 80px 0 80px;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
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
  
  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

const AccentText = styled.span`
  background: linear-gradient(90deg, #64B5F6 0%, #81D4FA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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

const CTAContainer = styled.div`
  display: flex;
  gap: 16px;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AppStoreButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 12px;
  background: black;
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const PlayStoreButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 12px;
  background: black;
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const ButtonText = styled.div`
  display: flex;
  flex-direction: column;
`;

const SmallText = styled.span`
  font-size: 12px;
  opacity: 0.8;
`;

const LargeText = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const PhoneContainer = styled.div`
  position: relative;
  max-width: 300px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    margin-top: 40px;
  }
`;

const PhoneImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 36px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 2;
`;

const PhoneGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(99, 179, 237, 0.4) 0%, rgba(0, 0, 0, 0) 70%);
  z-index: 1;
  filter: blur(40px);
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 60px;
  
  h2 {
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 16px;
    color: #1a237e;
    
    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
`;

const SectionSubtitle = styled.p`
  font-size: 18px;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const FeaturesSection = styled.section`
  padding: 100px 0;
  background: #f8fafc;
  
  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
`;

const FeatureIconWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  color: #1565c0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

const FeatureTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #1a237e;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #64748b;
`;

const ScreensSection = styled.section`
  padding: 100px 0;
  
  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const ScreensCarousel = styled.div`
  margin-bottom: 60px;
  overflow: hidden;
`;

const ScreensContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 20px 0;
  
  @media (max-width: 992px) {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 20px;
    
    &::-webkit-scrollbar {
      height: 4px;
    }
    
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #c5cae9;
      border-radius: 4px;
    }
  }
`;

const AppScreen = styled.div`
  flex: 0 0 auto;
  width: 220px;
  text-align: center;
`;

const ScreenImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 24px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
`;

const ScreenCaption = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #1a237e;
`;

const ScreensInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoNumber = styled.span`
  font-size: 48px;
  font-weight: 800;
  color: #e3f2fd;
  margin-bottom: 8px;
`;

const InfoTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: #1a237e;
  margin-bottom: 12px;
`;

const InfoDescription = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: #64748b;
`;

const CompatibilitySection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #f5f7ff 0%, #e6f0ff 100%);
  
  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const DevicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

const DeviceCategory = styled.div`
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

const DeviceCategoryTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 20px;
  font-weight: 700;
  color: #1a237e;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e5e7eb;
`;

const DeviceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const DeviceItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const DeviceIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a237e;
`;

const DeviceName = styled.p`
  font-size: 16px;
  color: #334155;
`;

const DownloadSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%);
  color: white;
  
  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

const DownloadContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const DownloadTitle = styled.h2`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const DownloadDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 32px;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const DownloadCTA = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ExtraInfo = styled.p`
  font-size: 14px;
  opacity: 0.7;
  
  a {
    color: #90caf9;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default MobileAppPage; 
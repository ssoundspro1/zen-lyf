import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: var(--spacing-xl) var(--spacing-lg);
  position: relative;
  overflow: hidden;
  background-color: #050728; /* Darker blue background for better gradient visibility */
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(79, 70, 229, 0.15) 0%, transparent 70%);
    z-index: 0;
  }
`;

// Add these new styled components for the hero motion background
const HeroBackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`;

const GradientCircle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  z-index: 0;
`;

const LightRays = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
`;

const LightRay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 3px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.7), transparent);
  transform-origin: left;
  animation: rotateRay 40s linear infinite;
  
  @keyframes rotateRay {
    from {
      transform: rotate(0deg) translateX(0);
    }
    to {
      transform: rotate(360deg) translateX(0);
    }
  }
`;

const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const Particle = styled(motion.div)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.4);
`;

const BlurOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(40px);
  z-index: 1;
`;

// New Hero Background Animation Component
const HeroBackgroundAnimation = () => {
  return (
    <HeroBackgroundWrapper>
      {/* Larger primary background gradient circle */}
      <GradientCircle 
        initial={{ scale: 0.8, opacity: 0.6 }}
        animate={{ 
          scale: [0.8, 1.2, 1.0, 1.3, 0.8], 
          opacity: [0.6, 0.8, 0.7, 0.9, 0.6],
          x: [0, 100, -50, 70, 0],
          y: [0, 50, 100, -30, 0],
          rotate: [0, 90, 180, 270, 360]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 25,
          ease: "easeInOut"
        }}
        style={{ 
          top: '30%', 
          left: '30%', 
          width: '800px',
          height: '800px',
          background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.5), rgba(6, 182, 212, 0.5))' 
        }}
      />
      
      {/* Secondary gradient circle */}
      <GradientCircle 
        initial={{ scale: 0.6, opacity: 0.5 }}
        animate={{ 
          scale: [0.6, 1.0, 0.8, 1.2, 0.6], 
          opacity: [0.5, 0.7, 0.6, 0.8, 0.5],
          x: [0, -80, 60, -40, 0],
          y: [0, 60, -120, 30, 0],
          rotate: [360, 270, 180, 90, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 28,
          ease: "easeInOut"
        }}
        style={{ 
          top: '60%', 
          left: '60%', 
          width: '600px',
          height: '600px',
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.5), rgba(236, 72, 153, 0.5))' 
        }}
      />
      
      {/* Third smaller gradient circle */}
      <GradientCircle 
        initial={{ scale: 0.7, opacity: 0.4 }}
        animate={{ 
          scale: [0.7, 1.1, 0.9, 1.0, 0.7], 
          opacity: [0.4, 0.6, 0.5, 0.7, 0.4],
          x: [0, 90, -80, 50, 0],
          y: [0, -60, 90, -40, 0],
          rotate: [180, 270, 360, 90, 180]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 30,
          ease: "easeInOut"
        }}
        style={{ 
          top: '20%', 
          left: '70%', 
          width: '500px',
          height: '500px',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.5), rgba(59, 130, 246, 0.5))' 
        }}
      />
      
      {/* Particles */}
      <ParticlesContainer>
        {[...Array(20)].map((_, i) => (
          <Particle
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.2,
              scale: Math.random() * 0.4 + 0.2
            }}
            animate={{ 
              y: [null, Math.random() * -300 - 100],
              opacity: [null, 0],
              scale: [null, Math.random() * 0.3 + 0.1]
            }}
            transition={{ 
              repeat: Infinity,
              duration: Math.random() * 7 + 8,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              background: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, 0.8)`
            }}
          />
        ))}
      </ParticlesContainer>
      
      {/* Light rays effect */}
      <LightRays>
        {[...Array(8)].map((_, i) => (
          <LightRay 
            key={i}
            style={{
              transform: `rotate(${i * 45}deg)`,
              opacity: 0.1 + (i % 3) * 0.08,
              width: `${180 + (i % 3) * 40}%`,
              height: `${2 + (i % 3)}px`
            }}
          />
        ))}
      </LightRays>
    </HeroBackgroundWrapper>
  );
};

const HeroTitle = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: var(--spacing-lg);
  max-width: 800px;
  position: relative;
  z-index: 5;
  color: white;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 3.5rem;
  }
  
  span {
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: var(--spacing-xl);
  max-width: 600px;
  position: relative;
  z-index: 5;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1.5rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  z-index: 5;
`;

const PrimaryButton = styled(Link)<{ primary?: boolean }>`
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease;
  
  ${props => props.primary ? `
    background: var(--primary);
    color: white;
    
    &:hover {
      background: #4338ca;
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
    }
  ` : `
    background: transparent;
    color: var(--text-primary);
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    &:hover {
      background: rgba(255, 255, 255, 0.05);
      color: var(--text-primary);
      transform: translateY(-2px);
    }
  `}
`;

const SecondaryButton = styled(Link)<{ primary?: boolean }>`
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease;
  
  ${props => props.primary ? `
    background: var(--primary);
    color: white;
    
    &:hover {
      background: #4338ca;
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
    }
  ` : `
    background: transparent;
    color: var(--text-primary);
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    &:hover {
      background: rgba(255, 255, 255, 0.05);
      color: var(--text-primary);
      transform: translateY(-2px);
    }
  `}
`;

const FeaturesSection = styled.section`
  padding: var(--spacing-2xl) var(--spacing-lg);
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: var(--spacing-2xl);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: var(--spacing-xl);
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const FeatureIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: rgba(79, 70, 229, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-md);
  
  svg {
    color: var(--primary);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: var(--spacing-sm);
`;

const FeatureDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

// Add these new styled components for app store buttons
const AppStoreContainer = styled(motion.div)`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-xl);
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  z-index: 5;
`;

const AppStoreButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 24px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2), 
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
  min-width: 200px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: 0.5s;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.12);
    
    &::before {
      left: 100%;
    }
  }
`;

const AppStoreIcon = styled.div`
  margin-right: 16px;
  font-size: 28px;
  
  svg {
    width: 28px;
    height: 28px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  }
`;

const AppStoreText = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
`;

const AppStoreSubtext = styled.div`
  font-size: 0.7rem;
  opacity: 0.8;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 2px;
`;

const AppStoreName = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.2px;
`;

// Add the custom iOS icon component
const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <defs>
      <linearGradient id="apple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#D0D0D0" />
      </linearGradient>
    </defs>
    <path d="M17.0802 11.9998C17.0428 9.30281 19.1806 7.95533 19.2731 7.89993C17.9521 6.06791 15.9521 5.84012 15.232 5.81572C13.4909 5.63682 11.8163 6.83845 10.9318 6.83845C10.027 6.83845 8.65534 5.83394 7.20195 5.86541C5.32346 5.89593 3.57892 6.91006 2.6232 8.49113C0.64704 11.7138 2.05793 16.4589 3.9452 19.0875C4.87878 20.3722 5.97454 21.8033 7.40185 21.7471C8.79456 21.686 9.33945 20.8413 11.0117 20.8413C12.664 20.8413 13.1747 21.7471 14.6334 21.71C16.1364 21.686 17.0699 20.4219 17.9692 19.1258C19.0432 17.6397 19.4733 16.1731 19.4946 16.0994C19.453 16.0869 17.122 15.1451 17.0802 11.9998V11.9998Z" fill="url(#apple-gradient)"/>
    <path d="M14.7259 4.22597C15.4894 3.29239 15.9968 2.02427 15.8613 0.734375C14.7686 0.776909 13.4161 1.47251 12.6222 2.38358C11.9131 3.19069 11.3029 4.49537 11.4597 5.74784C12.6854 5.82986 13.9411 5.14786 14.7259 4.22597V4.22597Z" fill="url(#apple-gradient)"/>
  </svg>
);

// Add the custom Google Play icon component
const GooglePlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <defs>
      <linearGradient id="play-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00C6FF" />
        <stop offset="100%" stopColor="#0072FF" />
      </linearGradient>
      <linearGradient id="play-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF4B44" />
        <stop offset="100%" stopColor="#D40B00" />
      </linearGradient>
      <linearGradient id="play-gradient-3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#11E8BB" />
        <stop offset="100%" stopColor="#0AB56B" />
      </linearGradient>
      <linearGradient id="play-gradient-4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD200" />
        <stop offset="100%" stopColor="#FF8B00" />
      </linearGradient>
    </defs>
    <path d="M3.60977 21.4998C3.29977 21.4998 3.01977 21.3898 2.78977 21.1698C2.55977 20.9498 2.43977 20.6698 2.43977 20.3498V3.64977C2.43977 3.33977 2.55977 3.06977 2.78977 2.83977C3.01977 2.60977 3.29977 2.49977 3.60977 2.49977L3.82977 2.51977L13.9998 12.0098L3.82977 21.4998H3.60977Z" fill="url(#play-gradient-1)"/>
    <path d="M13.9998 12.0098L3.82977 2.51977L13.9998 2.49977L20.8498 6.10977C21.3798 6.39977 21.5498 6.73977 21.3598 7.10977C21.2698 7.24977 21.0498 7.40977 20.8498 7.50977V7.50977L20.8398 7.50977V7.51977C21.0398 7.61977 21.2598 7.77977 21.3498 7.91977C21.5398 8.29977 21.3698 8.63977 20.8398 8.92977L20.8398 8.92977L13.9998 12.5398V12.0098Z" fill="url(#play-gradient-2)"/>
    <path d="M3.82977 21.4998L13.9998 12.0098V12.5398L3.82977 21.4998Z" fill="url(#play-gradient-3)"/>
    <path d="M20.8498 16.4898L13.9998 20.0998L3.82977 21.4998L13.9998 12.0098V12.5398L20.8398 16.1498C21.3698 16.4398 21.5398 16.7798 21.3498 17.1598C21.2598 17.2898 21.0498 17.4498 20.8498 17.5498V17.5498L20.8398 17.5498V17.5598C21.0398 17.6598 21.2598 17.8198 21.3498 17.9598C21.5398 18.3398 21.3698 18.6798 20.8398 18.9698L20.8398 18.9698L13.9998 22.5798V23.0898L3.82977 21.4998L13.9998 12.0098V12.5398L20.8398 16.1498L20.8498 16.4898Z" fill="url(#play-gradient-4)"/>
  </svg>
);

// Add the custom Meta Quest icon component
const MetaQuestIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <defs>
      <linearGradient id="meta-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9092FB" />
        <stop offset="100%" stopColor="#5761FF" />
      </linearGradient>
    </defs>
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="url(#meta-gradient)"/>
    <path d="M15.93 10.56C15.71 10.25 15.32 10.14 14.99 10.31C14.66 10.49 14.54 10.88 14.71 11.21C14.98 11.68 15.15 12.21 15.19 12.75C15.23 13.29 15.15 13.83 14.96 14.34C14.6 15.35 13.8 16.1 12.77 16.39C11.74 16.68 10.66 16.46 9.83 15.79C9 15.13 8.53 14.09 8.58 13.01C8.63 11.93 9.19 10.94 10.08 10.35C10.97 9.77 12.08 9.67 13.05 10.08C13.39 10.22 13.77 10.06 13.92 9.72C14.07 9.38 13.9 8.99 13.57 8.84C12.19 8.27 10.6 8.41 9.34 9.2C8.09 9.99 7.3 11.37 7.24 12.87C7.17 14.38 7.84 15.82 9 16.72C10.17 17.61 11.72 17.9 13.17 17.49C14.62 17.09 15.8 16.04 16.32 14.65C16.59 13.96 16.7 13.22 16.64 12.48C16.59 11.75 16.35 11.04 15.93 10.56Z" fill="url(#meta-gradient)"/>
  </svg>
);

// Add these new styled components for the Problems section
const ProblemsSection = styled.section`
  padding: 100px 24px;
  background: #f8fafc;
  
  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

const ProblemsSectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ProblemsSectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const ProblemsSectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const ProblemsSectionSubtitle = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ProblemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ProblemCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

const ProblemIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin-bottom: 24px;
`;

const ProblemTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #1e3a8a;
  margin-bottom: 16px;
`;

const ProblemDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #64748b;
  flex-grow: 1;
`;

const SolutionTag = styled.div`
  display: inline-block;
  margin-top: 20px;
  padding: 8px 16px;
  background: #eef2ff;
  color: #4f46e5;
  font-weight: 600;
  font-size: 14px;
  border-radius: 30px;
`;

// Add these new styled components for the Use Cases section
const UseCasesSection = styled.section`
  padding: 100px 24px;
  
  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

const UseCasesSectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const UseCasesSectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const UseCasesSectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const UseCasesSectionSubtitle = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const UseCasesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const UseCaseItem = styled(motion.div)`
  display: flex;
  gap: 40px;
  align-items: center;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
  
  &:nth-child(even) {
    flex-direction: row-reverse;
    
    @media (max-width: 1024px) {
      flex-direction: column;
    }
  }
`;

const UseCaseContent = styled.div`
  flex: 1;
`;

const UseCaseImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const UseCaseImage = styled.div`
  width: 100%;
  max-width: 450px;
  height: 300px;
  background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 72px;
  box-shadow: 0 20px 40px rgba(79, 70, 229, 0.2);
`;

const UseCaseTag = styled.div`
  display: inline-block;
  padding: 6px 14px;
  background: #eef2ff;
  color: #4f46e5;
  font-weight: 600;
  font-size: 14px;
  border-radius: 30px;
  margin-bottom: 12px;
`;

const UseCaseTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const UseCaseDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #64748b;
  margin-bottom: 24px;
`;

const UseCaseBenefits = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const UseCaseBenefitItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 16px;
  color: #334155;
  
  @media (max-width: 1024px) {
    justify-content: center;
  }
  
  &:before {
    content: "✓";
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 24px;
    height: 24px;
    background: #4f46e5;
    color: white;
    border-radius: 50%;
    margin-right: 12px;
    font-size: 12px;
  }
`;

const HomePage: React.FC = () => {
  // Define the problems and solutions
  const problemsData = [
    {
      icon: "🏥",
      title: "Post-Discharge Neglect",
      problem: "Over 36% of discharged patients have no immediate follow-ups, leading to higher readmission rates and anxiety.",
      solution: "Automated AI Follow-ups"
    },
    {
      icon: "💊",
      title: "Medication Non-Adherence",
      problem: "40-50% of patients fail to take medications correctly, increasing complications and recovery time.",
      solution: "Smart Medication Tracking"
    },
    {
      icon: "📋",
      title: "Complex Medical Reports",
      problem: "Medical jargon and complex reports cause anxiety and misunderstanding among patients.",
      solution: "AI Report Analysis"
    },
    {
      icon: "📱",
      title: "Disconnected Health Data",
      problem: "Health data exists in silos across devices and providers, making comprehensive care difficult.",
      solution: "Wearable Integration"
    },
    {
      icon: "🧠",
      title: "Mental Health Decline",
      problem: "43% of recovery patients experience anxiety or depression that goes unaddressed.",
      solution: "AI Wellness Coach"
    },
    {
      icon: "🚨",
      title: "Delayed Emergency Response",
      problem: "Critical health events during recovery often lack immediate detection and response.",
      solution: "Automated Alert System"
    }
  ];
  
  // Define the use cases
  const useCasesData = [
    {
      icon: "🫀",
      tag: "Post-surgical care",
      title: "Cardiac Surgery Recovery",
      description: "ZEN-LYF provides personalized recovery guidance for patients after cardiac surgery, monitoring vital signs through wearables and providing real-time feedback to both patients and healthcare providers.",
      benefits: [
        "30% reduction in hospital readmissions",
        "Continuous heart rate and activity monitoring",
        "AI-guided exercise progression based on recovery metrics",
        "Medication adherence tracking with smart reminders"
      ]
    },
    {
      icon: "🦿",
      tag: "Orthopedic rehabilitation",
      title: "Joint Replacement Therapy",
      description: "After knee or hip replacement surgery, patients receive customized physical therapy plans through ZEN-LYF, with AI analysis of movement patterns and recovery progress.",
      benefits: [
        "45% faster return to normal activities",
        "Personalized exercise videos with form analysis",
        "Pain and mobility tracking with adaptation of routines",
        "Direct communication channel with physical therapists"
      ]
    },
    {
      icon: "🧠",
      tag: "Chronic condition management",
      title: "Mental Health Integration",
      description: "ZEN-LYF integrates mental health monitoring into physical recovery, detecting signs of anxiety or depression and providing appropriate interventions and resources.",
      benefits: [
        "Early detection of post-operative depression",
        "Guided meditation and stress reduction exercises",
        "Sleep quality tracking and improvement suggestions",
        "Integration with professional mental health services"
      ]
    }
  ];
  
  return (
    <>
      <HeroSection>
        <HeroBackgroundAnimation />
        
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AI-Powered <span>Health & Wellness</span> for Continuous Care
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Personalized post-operative care, wellness monitoring, and AI medical analysis for seamless hospital-to-home recovery.
        </HeroSubtitle>
        <ButtonGroup
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <PrimaryButton to="/signup">Get Started</PrimaryButton>
          <SecondaryButton to="/features">Learn More</SecondaryButton>
        </ButtonGroup>
        
        {/* Enhanced App Store Buttons */}
        <AppStoreContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <AppStoreButton 
            href="https://apps.apple.com/us/app/zen-lyf/id0000000000"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AppStoreIcon>
              <AppleIcon />
            </AppStoreIcon>
            <AppStoreText>
              <AppStoreSubtext>Download on the</AppStoreSubtext>
              <AppStoreName>App Store</AppStoreName>
            </AppStoreText>
          </AppStoreButton>
          
          <AppStoreButton 
            href="https://play.google.com/store/apps/details?id=com.zenlyf.app"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AppStoreIcon>
              <GooglePlayIcon />
            </AppStoreIcon>
            <AppStoreText>
              <AppStoreSubtext>GET IT ON</AppStoreSubtext>
              <AppStoreName>Google Play</AppStoreName>
            </AppStoreText>
          </AppStoreButton>
          
          <AppStoreButton 
            href="https://www.meta.com/quest/experiences/zenlyf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AppStoreIcon>
              <MetaQuestIcon />
            </AppStoreIcon>
            <AppStoreText>
              <AppStoreSubtext>AVAILABLE ON</AppStoreSubtext>
              <AppStoreName>Meta Quest</AppStoreName>
            </AppStoreText>
          </AppStoreButton>
        </AppStoreContainer>
      </HeroSection>
      
      {/* Problems We Solve Section */}
      <ProblemsSection>
        <ProblemsSectionContent>
          <ProblemsSectionHeader>
            <ProblemsSectionTitle>Healthcare Challenges We're Solving</ProblemsSectionTitle>
            <ProblemsSectionSubtitle>
              ZEN-LYF AI addresses critical gaps in the healthcare system with innovative, AI-powered solutions
            </ProblemsSectionSubtitle>
          </ProblemsSectionHeader>
          
          <ProblemsGrid>
            {problemsData.map((item, index) => (
              <ProblemCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProblemIcon>{item.icon}</ProblemIcon>
                <ProblemTitle>{item.title}</ProblemTitle>
                <ProblemDescription>{item.problem}</ProblemDescription>
                <SolutionTag>Solution: {item.solution}</SolutionTag>
              </ProblemCard>
            ))}
          </ProblemsGrid>
        </ProblemsSectionContent>
      </ProblemsSection>
      
      {/* Use Cases Section */}
      <UseCasesSection>
        <UseCasesSectionContent>
          <UseCasesSectionHeader>
            <UseCasesSectionTitle>Real-World Applications</UseCasesSectionTitle>
            <UseCasesSectionSubtitle>
              See how ZEN-LYF AI transforms healthcare delivery across different medical scenarios
            </UseCasesSectionSubtitle>
          </UseCasesSectionHeader>
          
          <UseCasesContainer>
            {useCasesData.map((useCase, index) => (
              <UseCaseItem
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <UseCaseContent>
                  <UseCaseTag>{useCase.tag}</UseCaseTag>
                  <UseCaseTitle>{useCase.title}</UseCaseTitle>
                  <UseCaseDescription>{useCase.description}</UseCaseDescription>
                  <UseCaseBenefits>
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <UseCaseBenefitItem key={benefitIndex}>{benefit}</UseCaseBenefitItem>
                    ))}
                  </UseCaseBenefits>
                </UseCaseContent>
                <UseCaseImageContainer>
                  <UseCaseImage>{useCase.icon}</UseCaseImage>
                </UseCaseImageContainer>
              </UseCaseItem>
            ))}
          </UseCasesContainer>
        </UseCasesSectionContent>
      </UseCasesSection>
      
      <FeaturesSection>
        <SectionTitle>Key Features</SectionTitle>
        <FeaturesGrid>
          <FeatureCard
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FeatureIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </FeatureIcon>
            <FeatureTitle>AI-Powered Health Tracking</FeatureTitle>
            <FeatureDescription>
              Real-time monitoring of vital signs, activity levels, and recovery progress through wearable integration.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FeatureIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </FeatureIcon>
            <FeatureTitle>Medical Report Analysis</FeatureTitle>
            <FeatureDescription>
              Automated AI analysis of X-rays, MRIs, and medical reports with plain-language explanations.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FeatureIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </FeatureIcon>
            <FeatureTitle>Post-Op Care</FeatureTitle>
            <FeatureDescription>
              Personalized recovery plans, medication reminders, and continuous monitoring for optimal healing.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FeatureIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.22 16.0799C4 15.3999 4 14.5999 4 12.9999C4 10.9999 4 9.99994 4.5 8.99994C5 7.99994 6 7.99994 8 7.99994H16C18 7.99994 19 7.99994 19.5 8.99994C20 9.99994 20 10.9999 20 12.9999C20 14.5999 20 15.3999 19.78 16.0799"></path>
                <path d="M9.76001 5.29995C10.8574 5.10339 12.0109 5.00094 13.24 4.99995"></path>
                <path d="M16.01 20H7.99C5.99 20 4.99 20 4.49 19C3.99 18 3.99 17 3.99 15H20.01C20.01 17 20.01 18 19.51 19C19.01 20 18.01 20 16.01 20Z"></path>
                <path d="M12 16V18"></path>
                <path d="M9 12V14"></path>
                <path d="M12 12V14"></path>
                <path d="M15 12V14"></path>
              </svg>
            </FeatureIcon>
            <FeatureTitle>Wearable Integration</FeatureTitle>
            <FeatureDescription>
              Seamless connection with Apple Watch, Fitbit, and other wearable devices for comprehensive health monitoring.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FeatureIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </FeatureIcon>
            <FeatureTitle>Emergency Detection</FeatureTitle>
            <FeatureDescription>
              Automated fall detection and emergency alerts to caregivers and healthcare providers.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FeatureIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 11.08V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h6"></path>
                <path d="M14 3v5h5M18 21v-6M15 18h6"></path>
              </svg>
            </FeatureIcon>
            <FeatureTitle>Hospital Dashboard</FeatureTitle>
            <FeatureDescription>
              Comprehensive patient monitoring dashboard for healthcare providers with real-time alerts and insights.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
    </>
  );
};

export default HomePage; 
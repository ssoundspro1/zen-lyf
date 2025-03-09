import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaUnlock, FaFileAlt, FaHeartbeat, FaSearch, FaInfoCircle, FaKey } from 'react-icons/fa';
import IconWrapper from '../components/IconWrapper';

const MedicalRecordAccessPage: React.FC = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [accessCode, setAccessCode] = useState<string[]>(Array(6).fill(''));
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Create refs for each input field
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  
  // Initialize the refs array
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
    // Focus the first input on mount
    setTimeout(() => {
      inputRefs.current[0]?.focus();
    }, 500);
  }, []);
  
  // Handle input change
  const handleChange = (index: number, value: string) => {
    // Only allow alphanumeric characters
    if (!/^[a-zA-Z0-9]*$/.test(value)) {
      return;
    }
    
    const newAccessCode = [...accessCode];
    // Take only the last character if pasting multiple characters
    newAccessCode[index] = value.slice(-1).toUpperCase();
    setAccessCode(newAccessCode);
    
    // Clear any previous errors when typing
    if (isError) {
      setIsError(false);
      setErrorMessage('');
    }
    
    // Auto-advance to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };
  
  // Handle key down events for backspace and arrow navigation
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !accessCode[index] && index > 0) {
      // Move to previous input on backspace if current input is empty
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowLeft' && index > 0) {
      // Move to previous input on left arrow
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < 5) {
      // Move to next input on right arrow
      inputRefs.current[index + 1]?.focus();
    }
  };
  
  // Handle pasting the entire code
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').replace(/[^a-zA-Z0-9]/g, '').slice(0, 6).toUpperCase();
    
    if (pastedData) {
      const newAccessCode = [...accessCode];
      for (let i = 0; i < pastedData.length; i++) {
        if (i < 6) {
          newAccessCode[i] = pastedData[i];
        }
      }
      setAccessCode(newAccessCode);
      
      // Focus the next empty input or the last input if all filled
      const nextEmptyIndex = newAccessCode.findIndex(val => !val);
      if (nextEmptyIndex !== -1 && nextEmptyIndex < 6) {
        inputRefs.current[nextEmptyIndex]?.focus();
      } else {
        inputRefs.current[5]?.focus();
      }
    }
  };
  
  // Handle submission of the code
  const handleSubmit = async () => {
    const code = accessCode.join('');
    
    if (code.length !== 6) {
      setIsError(true);
      setErrorMessage('Please enter a complete 6-digit code.');
      controls.start({
        x: [0, -10, 10, -10, 10, 0],
        transition: { duration: 0.5 }
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call with a timeout
    setTimeout(() => {
      // This is where you would validate the code against your backend
      // For now, we'll simulate a successful validation for code "ABC123"
      if (code === 'ABC123') {
        setIsSuccess(true);
        setIsLoading(false);
        
        // Redirect to the medical record page after a brief delay
        setTimeout(() => {
          navigate('/medical-records');
        }, 2000);
      } else {
        setIsError(true);
        setErrorMessage('Invalid access code. Please try again.');
        setIsLoading(false);
        controls.start({
          x: [0, -10, 10, -10, 10, 0],
          transition: { duration: 0.5 }
        });
      }
    }, 1500);
  };
  
  return (
    <PageContainer>
      <BackgroundAnimation />
      
      <ContentWrapper>
        <PageHeader
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PageTitle>
            Secure Medical Record Access
          </PageTitle>
          <PageDescription>
            Enter the 6-digit access code to view the medical record
          </PageDescription>
        </PageHeader>
        
        <AccessCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            boxShadow: [
              "0 0 30px rgba(79, 70, 229, 0.2)",
              "0 0 40px rgba(79, 70, 229, 0.4)",
              "0 0 30px rgba(79, 70, 229, 0.2)"
            ]
          }}
          transition={{ 
            duration: 0.8,
            boxShadow: {
              repeat: Infinity,
              duration: 3
            }
          }}
        >
          <CardHeader>
            <IconContainer>
              <IconWrapper 
                icon={isSuccess ? FaUnlock : FaLock} 
                size={32} 
                color="white"
              />
            </IconContainer>
            <CardTitle>Access Code Verification</CardTitle>
          </CardHeader>
          
          <InputInstructions>
            Enter your 6-digit alphanumeric code below
          </InputInstructions>
          
          <DemoNotice>
            <IconWrapper icon={FaInfoCircle} size={14} color="#60a5fa" />
            <span>DEMO CODE: ABC123</span>
          </DemoNotice>
          
          <InputsContainer role="group" aria-label="Access code input">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <InputWrapper 
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  delay: 0.3 + (index * 0.08),
                  duration: 0.5
                }}
              >
                <CodeInput
                  ref={el => {
                    inputRefs.current[index] = el;
                  }}
                  type="text"
                  inputMode="text"
                  pattern="[A-Za-z0-9]*"
                  maxLength={1}
                  value={accessCode[index] || ''}
                  onChange={e => handleChange(index, e.target.value)}
                  onKeyDown={e => handleKeyDown(index, e)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  autoFocus={index === 0}
                  isError={isError}
                  disabled={isLoading || isSuccess}
                  aria-label={`Code digit ${index + 1}`}
                  autoComplete="off"
                  placeholder="•"
                />
              </InputWrapper>
            ))}
          </InputsContainer>
          
          {isError && (
            <ErrorMessage
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
            >
              {errorMessage}
            </ErrorMessage>
          )}
          
          <SubmitButton 
            onClick={handleSubmit}
            disabled={isLoading || isSuccess}
            whileHover={{ scale: isLoading || isSuccess ? 1 : 1.03 }}
            whileTap={{ scale: isLoading || isSuccess ? 1 : 0.98 }}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.8}}
          >
            {isLoading ? (
              <ButtonContent>
                <LoadingSpinner />
                <span>Verifying...</span>
              </ButtonContent>
            ) : isSuccess ? (
              <ButtonContent>
                <IconWrapper icon={FaUnlock} size={18} color="white" />
                <span>Access Granted</span>
              </ButtonContent>
            ) : (
              <ButtonContent>
                <IconWrapper icon={FaSearch} size={18} color="white" />
                <span>Access Record</span>
              </ButtonContent>
            )}
          </SubmitButton>
          
          {isSuccess && (
            <SuccessMessage
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              Successfully verified! Redirecting to the medical record...
            </SuccessMessage>
          )}
          
          <HelpText>
            Need help? Contact your healthcare provider for your access code or assistance.
          </HelpText>
        </AccessCard>
        
        <InfoSection
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <InfoCard>
            <InfoIconContainer>
              <IconWrapper icon={FaFileAlt} size={24} color="white" />
            </InfoIconContainer>
            <InfoTitle>Secure Access</InfoTitle>
            <InfoText>
              Your medical records are protected with industry-leading security protocols.
            </InfoText>
          </InfoCard>
          
          <InfoCard>
            <InfoIconContainer>
              <IconWrapper icon={FaHeartbeat} size={24} color="white" />
            </InfoIconContainer>
            <InfoTitle>Health Insights</InfoTitle>
            <InfoText>
              Access comprehensive health analytics and personalized insights.
            </InfoText>
          </InfoCard>
        </InfoSection>
      </ContentWrapper>
      
      <KeyIconAnimation>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0.2, 0.5, 0.2], y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <IconWrapper icon={FaKey} size={48} color="rgba(255, 255, 255, 0.15)" />
        </motion.div>
      </KeyIconAnimation>
    </PageContainer>
  );
};

// Enhanced Background Animation with even more dynamic elements
const BackgroundAnimation = () => {
  return (
    <BackgroundWrapper>
      {/* Larger primary background gradient circle */}
      <GradientCircle 
        initial={{ scale: 0.8, opacity: 0.7 }}
        animate={{ 
          scale: [0.8, 1.4, 1.1, 1.3, 0.8], 
          opacity: [0.7, 0.9, 0.8, 1.0, 0.7],
          x: [0, 120, -70, 50, 0],
          y: [0, 70, 150, -50, 0],
          rotate: [0, 90, 180, 270, 360]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 20,
          ease: "easeInOut"
        }}
        style={{ 
          top: '30%', 
          left: '30%', 
          width: '800px',
          height: '800px',
          background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.9), rgba(6, 182, 212, 0.9))' 
        }}
      />
      
      {/* Secondary gradient circle */}
      <GradientCircle 
        initial={{ scale: 0.6, opacity: 0.6 }}
        animate={{ 
          scale: [0.6, 1.2, 0.9, 1.3, 0.6], 
          opacity: [0.6, 0.8, 0.7, 0.9, 0.6],
          x: [0, -100, 70, -50, 0],
          y: [0, 80, -150, 40, 0],
          rotate: [360, 270, 180, 90, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 23,
          ease: "easeInOut"
        }}
        style={{ 
          top: '60%', 
          left: '60%', 
          width: '700px',
          height: '700px',
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.9), rgba(236, 72, 153, 0.9))' 
        }}
      />
      
      {/* Third smaller gradient circle */}
      <GradientCircle 
        initial={{ scale: 0.7, opacity: 0.5 }}
        animate={{ 
          scale: [0.7, 1.3, 1.0, 1.2, 0.7], 
          opacity: [0.5, 0.7, 0.6, 0.8, 0.5],
          x: [0, 130, -100, 60, 0],
          y: [0, -80, 120, -60, 0],
          rotate: [180, 270, 360, 90, 180]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 27,
          ease: "easeInOut"
        }}
        style={{ 
          top: '20%', 
          left: '70%', 
          width: '600px',
          height: '600px',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.9), rgba(59, 130, 246, 0.9))' 
        }}
      />
      
      {/* Fourth gradient circle - small accent */}
      <GradientCircle 
        initial={{ scale: 0.5, opacity: 0.5 }}
        animate={{ 
          scale: [0.5, 1.0, 0.7, 0.9, 0.5], 
          opacity: [0.5, 0.7, 0.6, 0.8, 0.5],
          x: [0, -80, 120, -60, 0],
          y: [0, 60, -80, 40, 0],
          rotate: [90, 180, 270, 360, 90]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 18,
          ease: "easeInOut"
        }}
        style={{ 
          top: '75%', 
          left: '25%', 
          width: '500px',
          height: '500px',
          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.9), rgba(239, 68, 68, 0.9))' 
        }}
      />
      
      {/* Particles */}
      <ParticlesContainer>
        {[...Array(30)].map((_, i) => (
          <Particle
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.7 + 0.3,
              scale: Math.random() * 0.6 + 0.4
            }}
            animate={{ 
              y: [null, Math.random() * -400 - 100],
              opacity: [null, 0],
              scale: [null, Math.random() * 0.4 + 0.1]
            }}
            transition={{ 
              repeat: Infinity,
              duration: Math.random() * 8 + 10,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            style={{
              width: Math.random() * 10 + 3,
              height: Math.random() * 10 + 3,
              background: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, 0.9)`
            }}
          />
        ))}
      </ParticlesContainer>
      
      {/* Light rays effect */}
      <LightRays>
        {[...Array(10)].map((_, i) => (
          <LightRay 
            key={i}
            style={{
              transform: `rotate(${i * 36}deg)`,
              opacity: 0.2 + (i % 3) * 0.1,
              width: `${200 + (i % 3) * 50}%`,
              height: `${3 + (i % 3) * 2}px`
            }}
          />
        ))}
      </LightRays>
      
      <BlurOverlay />
    </BackgroundWrapper>
  );
};

// Styled Components
const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: #050728; /* Darker blue background for better gradient visibility */
  color: white;
`;

const KeyIconAnimation = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
  z-index: 1;
  opacity: 0.8;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
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
  height: 5px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9), transparent);
  transform-origin: left;
  animation: rotateRay 30s linear infinite;
  
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
  box-shadow: 0 0 15px 3px rgba(255, 255, 255, 0.4);
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 5;
  width: 100%;
  max-width: 1000px;
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
  color: white;
  font-weight: 800;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5), 0 0 30px rgba(79, 70, 229, 0.5);
  letter-spacing: -0.5px;
  
  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const PageDescription = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const AccessCard = styled(motion.div)`
  width: 100%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(30px);
  border-radius: 24px;
  padding: var(--spacing-xl);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3), 
              0 0 0 1px rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: var(--spacing-xl);
  position: relative;
  z-index: 10;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      rgba(255, 255, 255, 0), 
      rgba(255, 255, 255, 0.5), 
      rgba(255, 255, 255, 0));
    z-index: -1;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      rgba(255, 255, 255, 0), 
      rgba(255, 255, 255, 0.2), 
      rgba(255, 255, 255, 0));
    z-index: -1;
  }
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: var(--spacing-lg);
`;

const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 24px;
  background: rgba(79, 70, 229, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-md);
  box-shadow: 0 0 25px rgba(79, 70, 229, 0.4), 
              inset 0 0 15px rgba(255, 255, 255, 0.15);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(45deg, rgba(79, 70, 229, 0.3), transparent, rgba(79, 70, 229, 0.3));
    animation: rotate 4s linear infinite;
    z-index: -1;
  }
  
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const CardTitle = styled.h2`
  font-size: 1.8rem;
  color: white;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const InputInstructions = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: var(--spacing-md);
  text-align: center;
  font-weight: 500;
  padding: 10px 20px;
  background: rgba(79, 70, 229, 0.15);
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: fit-content;
  animation: pulse 2s infinite ease-in-out;
  
  @keyframes pulse {
    0% { opacity: 0.8; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.03); }
    100% { opacity: 0.8; transform: scale(1); }
  }
`;

const DemoNotice = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.95rem;
  color: #60a5fa;
  margin-bottom: var(--spacing-lg);
  padding: 8px 16px;
  background: rgba(37, 99, 235, 0.1);
  border-radius: 12px;
  font-weight: 500;
  border: 1px solid rgba(96, 165, 250, 0.3);
  
  span {
    margin-left: 4px;
    letter-spacing: 0.5px;
  }
`;

const InputsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-bottom: var(--spacing-lg);
  width: 100%;
  position: relative;
  z-index: 20;
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const InputWrapper = styled(motion.div)`
  width: 70px;
  height: 90px;
  position: relative;
  
  @media (max-width: 480px) {
    width: 50px;
    height: 60px;
  }
`;

const CodeInput = styled.input<{ isError: boolean }>`
  width: 100%;
  height: 100%;
  border: 2px solid ${props => props.isError ? 'rgba(255, 82, 82, 0.8)' : 'rgba(255, 255, 255, 0.3)'};
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.12);
  color: white;
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  caret-color: white;
  transition: all 0.3s ease;
  box-shadow: ${props => props.isError 
    ? '0 0 15px rgba(255, 82, 82, 0.3), inset 0 0 8px rgba(255, 82, 82, 0.1)' 
    : '0 0 15px rgba(79, 70, 229, 0.2), inset 0 0 8px rgba(0, 0, 0, 0.05)'};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
  &:focus {
    outline: none;
    border-color: ${props => props.isError ? 'rgba(255, 82, 82, 0.8)' : 'rgba(79, 70, 229, 0.8)'};
    box-shadow: ${props => props.isError 
      ? '0 0 15px rgba(255, 82, 82, 0.4), 0 0 0 1px rgba(255, 82, 82, 0.4)' 
      : '0 0 20px rgba(79, 70, 229, 0.4), 0 0 0 1px rgba(79, 70, 229, 0.4)'};
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-3px);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
    border-width: 2px;
  }
`;

const ErrorMessage = styled(motion.div)`
  color: #ff5252;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: var(--spacing-md);
  width: 100%;
  background: rgba(220, 38, 38, 0.12);
  padding: 12px 16px;
  border-radius: 12px;
  border-left: 3px solid rgba(220, 38, 38, 0.8);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(135deg, #4F46E5, #5E54E2);
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 16px 32px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 30px rgba(79, 70, 229, 0.3),
              0 0 0 1px rgba(255, 255, 255, 0.15);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }
  
  &:hover {
    background: linear-gradient(135deg, #5E54E2, #6A61F0);
    box-shadow: 0 12px 30px rgba(79, 70, 229, 0.4),
                0 0 0 1px rgba(255, 255, 255, 0.2);
                
    &:before {
      left: 100%;
    }
  }
  
  &:disabled {
    background: ${props => props.theme.isDark 
      ? 'rgba(255, 255, 255, 0.1)' 
      : 'rgba(0, 0, 0, 0.1)'};
    color: ${props => props.theme.isDark 
      ? 'rgba(255, 255, 255, 0.4)' 
      : 'rgba(0, 0, 0, 0.4)'};
    cursor: not-allowed;
    box-shadow: none;
    
    &:before {
      display: none;
    }
  }
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const SuccessMessage = styled(motion.div)`
  color: #10B981;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  margin-top: var(--spacing-md);
  width: 100%;
  background: rgba(16, 185, 129, 0.12);
  padding: 12px 16px;
  border-radius: 12px;
  border-left: 3px solid rgba(16, 185, 129, 0.8);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const HelpText = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  text-align: center;
  margin-top: var(--spacing-xl);
  max-width: 400px;
`;

const InfoSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: var(--spacing-xl);
  margin-top: var(--spacing-lg);
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-md);
  }
`;

const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: var(--spacing-lg);
  width: 100%;
  max-width: 280px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: default;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2),
                0 0 0 1px rgba(255, 255, 255, 0.15);
  }
  
  @media (max-width: 768px) {
    max-width: 400px;
  }
`;

const InfoIconContainer = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 16px;
  background: rgba(79, 70, 229, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-sm);
  box-shadow: 0 0 20px rgba(79, 70, 229, 0.2),
              inset 0 0 10px rgba(255, 255, 255, 0.05);
`;

const InfoTitle = styled.h3`
  font-size: 1.2rem;
  color: white;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const InfoText = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
`;

export default MedicalRecordAccessPage; 
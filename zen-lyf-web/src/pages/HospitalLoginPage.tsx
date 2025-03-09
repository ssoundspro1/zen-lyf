import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IconWrapper from 'components/IconWrapper';
import { TiUser } from 'react-icons/ti';

const HospitalLoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // This would connect to your authentication service
      // await authService.hospitalLogin(email, password);
      console.log('Hospital login attempt:', { email, password });
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redirect to hospital dashboard upon successful login
      window.location.href = '/hospital-dashboard';
    } catch (err) {
      setError('Invalid hospital credentials. Please try again.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <BackgroundGradient />
      <GlassCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <LogoContainer>
          <Logo>ZEN-LYF</Logo>
          <Subtitle>Hospital Portal</Subtitle>
        </LogoContainer>

        <IconWrapper icon={TiUser} />
        <Description>
          Access your hospital dashboard to monitor patients, view analytics, and manage care plans.
        </Description>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="email">Hospital Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="hospital@example.com"
              required
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </InputGroup>

          <ForgotPassword to="/forgot-password">Forgot password?</ForgotPassword>

          <SubmitButton 
            type="submit" 
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? (
              <Spinner />
            ) : (
              'Sign In'
            )}
          </SubmitButton>
        </Form>

        <Footer>
          <span>Not a registered hospital?</span>
          <ContactLink to="/contact">Contact our enterprise team</ContactLink>
        </Footer>

        <SecurityInfo>
          <SecurityIcon>🔒</SecurityIcon>
          <SecurityText>HIPAA compliant & secure authentication</SecurityText>
        </SecurityInfo>
      </GlassCard>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #1a2151 0%, #1e3c72 100%);
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 30%, rgba(31, 162, 255, 0.18) 0%, rgba(18, 36, 89, 0.1) 50%);
  z-index: 0;
`;

const GlassCard = styled(motion.div)`
  width: 100%;
  max-width: 480px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 48px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border: 1px solid rgba(255, 255, 255, 0.15);
  
  @media (max-width: 768px) {
    padding: 32px;
  }
`;

const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 32px;
`;

const Logo = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: white;
  margin: 0;
  background: linear-gradient(90deg, #64B5F6, #1E88E5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  margin: 4px 0 0;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: white;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 32px;
  line-height: 1.5;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
`;

const Input = styled.input`
  height: 50px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0 16px;
  color: white;
  font-size: 16px;
  transition: border 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: rgba(100, 181, 246, 0.5);
    box-shadow: 0 0 0 2px rgba(100, 181, 246, 0.2);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const ForgotPassword = styled(Link)`
  align-self: flex-end;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.2s ease;
  margin-top: -12px;
  
  &:hover {
    color: rgba(255, 255, 255, 0.9);
  }
`;

const SubmitButton = styled(motion.button)`
  height: 56px;
  background: linear-gradient(90deg, #1E88E5, #1976D2);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Spinner = styled.div`
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Footer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 32px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  flex-wrap: wrap;
`;

const ContactLink = styled(Link)`
  color: #64B5F6;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #90CAF9;
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.div`
  background: rgba(244, 67, 54, 0.1);
  color: #FF8A80;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 24px;
  border-left: 3px solid #F44336;
`;

const SecurityInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
`;

const SecurityIcon = styled.span`
  font-size: 14px;
`;

const SecurityText = styled.span`
  font-weight: 500;
`;

export default HospitalLoginPage; 
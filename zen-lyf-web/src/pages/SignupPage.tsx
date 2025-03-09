import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import IconWrapper from 'components/IconWrapper';
import { TiUserAdd } from 'react-icons/ti';

const PageContainer = styled.div`
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xl) var(--spacing-lg);
`;

const SignupCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  padding: var(--spacing-xl);
  width: 100%;
  max-width: 450px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: var(--spacing-lg);
  text-align: center;
  
  span {
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

const Label = styled.label`
  color: var(--text-secondary);
  font-size: 0.875rem;
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  color: var(--text-primary);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease;
  cursor: pointer;
  
  ${props => props.primary ? `
    background: var(--primary);
    color: white;
    border: none;
    
    &:hover {
      background: #4338ca;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
    }
  ` : `
    background: transparent;
    color: var(--text-primary);
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    &:hover {
      background: rgba(255, 255, 255, 0.05);
      transform: translateY(-2px);
    }
  `}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: var(--spacing-md) 0;
  
  &::before, &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
  }
  
  span {
    padding: 0 var(--spacing-md);
    color: var(--text-secondary);
    font-size: 0.875rem;
  }
`;

const ErrorMessage = styled.div`
  color: var(--error);
  font-size: 0.875rem;
  margin-top: var(--spacing-sm);
`;

const BottomText = styled.p`
  text-align: center;
  margin-top: var(--spacing-lg);
  color: var(--text-secondary);
  font-size: 0.875rem;
  
  a {
    color: var(--primary);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const TermsText = styled.p`
  text-align: center;
  margin-top: var(--spacing-lg);
  color: var(--text-secondary);
  font-size: 0.75rem;
  line-height: 1.5;
`;

const SignupPage: React.FC = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signUp, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    try {
      setError('');
      setLoading(true);
      await signUp(email, password);
      // TODO: Update user profile with displayName
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to create an account');
    } finally {
      setLoading(false);
    }
  };
  
  const handleGoogleSignUp = async () => {
    try {
      setError('');
      setLoading(true);
      await signInWithGoogle();
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to sign up with Google');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <PageContainer>
      <SignupCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <IconWrapper icon={TiUserAdd} />
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="displayName">Full Name</Label>
            <Input
              id="displayName"
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </FormGroup>
          
          <Button type="submit" primary disabled={loading}>
            {loading ? 'Creating Account...' : 'Create Account'}
          </Button>
        </Form>
        
        <Divider>
          <span>OR</span>
        </Divider>
        
        <Button onClick={handleGoogleSignUp} disabled={loading}>
          Sign up with Google
        </Button>
        
        <BottomText>
          Already have an account? <Link to="/login">Sign in</Link>
        </BottomText>
        
        <TermsText>
          By signing up, you agree to our <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>.
        </TermsText>
      </SignupCard>
    </PageContainer>
  );
};

export default SignupPage; 
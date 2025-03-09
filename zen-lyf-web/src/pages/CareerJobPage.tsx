import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMapMarkerAlt, FaClock, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';
import IconWrapper from 'components/IconWrapper';

const CareerJobPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [resume, setResume] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Sample job data - in a real app, you would fetch this from an API based on the ID
  const job = {
    id: 1,
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "San Francisco, CA (Remote)",
    employmentType: "Full-time",
    salary: "$120,000 - $160,000 per year",
    description: "Join our engineering team to build cutting-edge health technology interfaces that help patients and healthcare providers access critical health information.",
    aboutCompany: "ZEN-LYF is a pioneering healthcare technology company dedicated to transforming how individuals and healthcare providers manage health information. Our AI-powered platform integrates with wearable devices and medical records to provide real-time health insights and early detection of potential health concerns.",
    aboutTeam: "Our engineering team consists of passionate technologists who are committed to solving complex healthcare challenges. We value collaboration, innovation, and continuous learning. As a member of our team, you'll have the opportunity to work on features that directly impact people's health and wellbeing.",
    responsibilities: [
      "Develop and maintain high-quality, responsive web applications using React and TypeScript",
      "Collaborate with designers, product managers, and backend engineers to implement features and resolve issues",
      "Optimize applications for maximum speed and scalability",
      "Implement UI/UX designs to create intuitive, accessible user experiences",
      "Ensure the technical feasibility of UI/UX designs",
      "Participate in code reviews and contribute to architecture discussions",
      "Write clean, maintainable, and well-documented code",
      "Stay up-to-date with emerging trends and technologies in frontend development"
    ],
    requirements: [
      "5+ years of experience with frontend development",
      "Strong proficiency in React, TypeScript, and modern JavaScript",
      "Experience with responsive design and CSS frameworks",
      "Familiarity with RESTful APIs and GraphQL",
      "Understanding of cross-browser compatibility issues and solutions",
      "Experience with version control systems (Git)",
      "Knowledge of performance optimization techniques",
      "Bachelor's degree in Computer Science or related field, or equivalent experience"
    ],
    niceToHave: [
      "Experience with healthcare applications or HIPAA compliance",
      "Knowledge of state management libraries (Redux, MobX, etc.)",
      "Experience with testing frameworks (Jest, React Testing Library)",
      "Understanding of CI/CD pipelines",
      "Contributions to open-source projects",
      "Experience with design systems and component libraries"
    ],
    benefits: [
      "Comprehensive healthcare coverage (medical, dental, vision)",
      "Flexible work arrangements (remote-friendly)",
      "Competitive salary and equity options",
      "Unlimited PTO policy",
      "401(k) with company match",
      "Professional development budget",
      "Wellness programs and gym membership reimbursement",
      "Home office stipend"
    ],
    applicationProcess: [
      "Initial application review",
      "Technical screening call",
      "Take-home coding assignment",
      "Virtual onsite interviews (technical and cultural fit)",
      "Final interview with senior leadership",
      "Offer and onboarding"
    ]
  };

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setResume(e.target.files[0]);
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors: { [key: string]: string } = {};
    
    if (!fullName.trim()) {
      newErrors.fullName = "Name is required";
    }
    
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
    }
    
    if (!resume) {
      newErrors.resume = "Resume is required";
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Submit form (in a real app, you would send this to an API)
    console.log({
      jobId: id,
      fullName,
      email,
      phone,
      resume,
      coverLetter
    });
    
    // Show success message
    setFormSubmitted(true);
  };

  // Go back to careers page
  const handleGoBack = () => {
    navigate('/careers');
  };

  if (formSubmitted) {
    return (
      <PageContainer>
        <ContentContainer>
          <SuccessSection
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <SuccessIcon>
              <IconWrapper icon={FaCheckCircle} size={60} />
            </SuccessIcon>
            <SuccessTitle>Application Submitted!</SuccessTitle>
            <SuccessMessage>
              Thank you for your interest in joining ZEN-LYF. We've received your application for the {job.title} position. Our team will review your qualifications and get back to you soon.
            </SuccessMessage>
            <ButtonGroup>
              <SecondaryButton onClick={handleGoBack}>
                Back to Careers
              </SecondaryButton>
              <PrimaryButton as={Link} to="/">
                Go to Homepage
              </PrimaryButton>
            </ButtonGroup>
          </SuccessSection>
        </ContentContainer>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <HeaderSection>
        <ContentContainer>
          <BackButton onClick={handleGoBack}>
            <IconWrapper icon={FaArrowLeft} size={16} />
            <span>Back to all jobs</span>
          </BackButton>
          
          <JobHeader
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <JobMeta>
              <Department>{job.department}</Department>
              <JobTitle>{job.title}</JobTitle>
              <JobDetails>
                <DetailItem>
                  <IconWrapper icon={FaMapMarkerAlt} size={16} />
                  <span>{job.location}</span>
                </DetailItem>
                <DetailItem>
                  <IconWrapper icon={FaClock} size={16} />
                  <span>{job.employmentType}</span>
                </DetailItem>
              </JobDetails>
            </JobMeta>
            
            <ApplyButtonTop
              href="#application-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Apply Now
            </ApplyButtonTop>
          </JobHeader>
        </ContentContainer>
      </HeaderSection>
      
      <ContentContainer>
        <JobContent>
          <LeftColumn
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Section>
              <SectionTitle>About the Role</SectionTitle>
              <Description>{job.description}</Description>
            </Section>
            
            <Section>
              <SectionTitle>Responsibilities</SectionTitle>
              <List>
                {job.responsibilities.map((item, index) => (
                  <ListItem key={index}>{item}</ListItem>
                ))}
              </List>
            </Section>
            
            <Section>
              <SectionTitle>Requirements</SectionTitle>
              <List>
                {job.requirements.map((item, index) => (
                  <ListItem key={index}>{item}</ListItem>
                ))}
              </List>
            </Section>
            
            <Section>
              <SectionTitle>Nice to Have</SectionTitle>
              <List>
                {job.niceToHave.map((item, index) => (
                  <ListItem key={index}>{item}</ListItem>
                ))}
              </List>
            </Section>
            
            <Section>
              <SectionTitle>About ZEN-LYF</SectionTitle>
              <Description>{job.aboutCompany}</Description>
            </Section>
            
            <Section>
              <SectionTitle>About the Team</SectionTitle>
              <Description>{job.aboutTeam}</Description>
            </Section>
            
            <Section>
              <SectionTitle>Benefits</SectionTitle>
              <List>
                {job.benefits.map((item, index) => (
                  <ListItem key={index}>{item}</ListItem>
                ))}
              </List>
            </Section>
            
            <Section>
              <SectionTitle>Application Process</SectionTitle>
              <ProcessList>
                {job.applicationProcess.map((step, index) => (
                  <ProcessItem key={index}>
                    <ProcessNumber>{index + 1}</ProcessNumber>
                    <ProcessText>{step}</ProcessText>
                  </ProcessItem>
                ))}
              </ProcessList>
            </Section>
          </LeftColumn>
          
          <RightColumn
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ApplicationForm id="application-form">
              <FormTitle>Apply for this Position</FormTitle>
              
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    error={!!errors.fullName}
                  />
                  {errors.fullName && <ErrorText>{errors.fullName}</ErrorText>}
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!errors.email}
                  />
                  {errors.email && <ErrorText>{errors.email}</ErrorText>}
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="resume">Resume/CV (PDF or Word) *</Label>
                  <FileInputWrapper>
                    <FileInput
                      type="file"
                      id="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      error={!!errors.resume}
                    />
                    <FileInputLabel htmlFor="resume">
                      {resume ? resume.name : "Upload your resume"}
                    </FileInputLabel>
                  </FileInputWrapper>
                  {errors.resume && <ErrorText>{errors.resume}</ErrorText>}
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
                  <Textarea
                    id="coverLetter"
                    rows={5}
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                    placeholder="Tell us why you're a great fit for this role..."
                  />
                </FormGroup>
                
                <SubmitButton type="submit">
                  <IconWrapper icon={FaPaperPlane} size={16} />
                  Submit Application
                </SubmitButton>
              </form>
            </ApplicationForm>
            
            <SalaryCard>
              <SalaryTitle>Compensation</SalaryTitle>
              <SalaryAmount>{job.salary}</SalaryAmount>
            </SalaryCard>
          </RightColumn>
        </JobContent>
      </ContentContainer>
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--bg-primary);
  color: var(--text-primary);
`;

const HeaderSection = styled.div`
  background: linear-gradient(135deg, var(--primary) 0%, #3a0ca3 100%);
  padding: 2rem 0 3rem;
  color: white;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: var(--radius-md);
  cursor: pointer;
  font-size: 0.9rem;
  margin-bottom: var(--spacing-md);
  transition: background 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const JobHeader = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-md);
  }
`;

const JobMeta = styled.div``;

const Department = styled.div`
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: var(--spacing-xs);
`;

const JobTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
`;

const JobDetails = styled.div`
  display: flex;
  gap: var(--spacing-md);
  font-size: 1rem;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ApplyButtonTop = styled(motion.a)`
  display: inline-block;
  background: white;
  color: var(--primary);
  font-weight: 600;
  padding: 12px 24px;
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`;

const JobContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-xl);
  margin: var(--spacing-xl) 0;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const LeftColumn = styled(motion.div)``;

const RightColumn = styled(motion.div)`
  @media (max-width: 1024px) {
    order: -1;
  }
`;

const Section = styled.section`
  margin-bottom: var(--spacing-xl);
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: var(--spacing-md);
  color: var(--text-title);
  
  &:after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background: var(--primary);
    margin-top: 8px;
    border-radius: var(--radius-sm);
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
`;

const List = styled.ul`
  padding-left: 20px;
`;

const ListItem = styled.li`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-sm);
  position: relative;
`;

const ProcessList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const ProcessItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
`;

const ProcessNumber = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
`;

const ProcessText = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  padding-top: 3px;
`;

const ApplicationForm = styled.div`
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  margin-bottom: var(--spacing-lg);
  position: sticky;
  top: var(--spacing-lg);
`;

const FormTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: var(--spacing-lg);
  color: var(--text-title);
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: var(--spacing-md);
`;

const Label = styled.label`
  display: block;
  font-size: 0.95rem;
  margin-bottom: var(--spacing-xs);
  font-weight: 500;
  color: var(--text-title);
`;

const Input = styled.input<{ error?: boolean }>`
  width: 100%;
  padding: 12px;
  border: 1px solid ${props => props.error ? 'var(--error)' : 'var(--border-color)'};
  border-radius: var(--radius-md);
  background: var(--bg-input);
  color: var(--text-primary);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(67, 56, 202, 0.1);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  background: var(--bg-input);
  color: var(--text-primary);
  font-size: 1rem;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(67, 56, 202, 0.1);
  }
`;

const FileInputWrapper = styled.div`
  position: relative;
`;

const FileInput = styled.input<{ error?: boolean }>`
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
`;

const FileInputLabel = styled.label`
  display: block;
  width: 100%;
  padding: 12px;
  border: 1px dashed var(--border-color);
  border-radius: var(--radius-md);
  background: var(--bg-input);
  color: var(--text-secondary);
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary);
    color: var(--primary);
  }
`;

const ErrorText = styled.div`
  color: var(--error);
  font-size: 0.85rem;
  margin-top: 4px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    background: #4338ca;
  }
`;

const SalaryCard = styled.div`
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  text-align: center;
`;

const SalaryTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
  color: var(--text-title);
`;

const SalaryAmount = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--primary);
`;

const SuccessSection = styled(motion.div)`
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xxl);
  box-shadow: var(--shadow-md);
  text-align: center;
  max-width: 600px;
  margin: 5rem auto;
`;

const SuccessIcon = styled.div`
  color: var(--success);
  margin-bottom: var(--spacing-lg);
`;

const SuccessTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  color: var(--text-title);
`;

const SuccessMessage = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled(Link)`
  background: var(--primary);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: var(--radius-md);
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s ease;
  
  &:hover {
    background: #4338ca;
  }
`;

const SecondaryButton = styled.button`
  background: var(--bg-hover);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  padding: 12px 24px;
  border-radius: var(--radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--bg-active);
  }
`;

export default CareerJobPage; 
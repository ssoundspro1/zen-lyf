import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUsers, FaLaptopCode, FaBriefcaseMedical, FaHandHoldingMedical, FaBusinessTime, FaChevronRight, FaSearch, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import IconWrapper from 'components/IconWrapper';

const CareersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

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

  // Department categories
  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'engineering', name: 'Engineering', icon: FaLaptopCode },
    { id: 'data-science', name: 'Data Science & AI', icon: FaLaptopCode },
    { id: 'product', name: 'Product', icon: FaBusinessTime },
    { id: 'design', name: 'Design', icon: FaLaptopCode },
    { id: 'healthcare', name: 'Healthcare', icon: FaBriefcaseMedical },
    { id: 'customer-success', name: 'Customer Success', icon: FaHandHoldingMedical },
  ];

  // Job listings data
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Engineer",
      department: "engineering",
      location: "San Francisco, CA (Remote)",
      employmentType: "Full-time",
      description: "Join our engineering team to build cutting-edge health technology interfaces that help patients and healthcare providers access critical health information.",
      responsibilities: [
        "Develop and maintain high-quality, responsive web applications using React and TypeScript",
        "Collaborate with designers, product managers, and backend engineers",
        "Optimize applications for maximum speed and scalability",
        "Implement UI/UX designs to create intuitive, accessible user experiences",
        "Ensure the technical feasibility of UI/UX designs"
      ],
      requirements: [
        "5+ years of experience with frontend development",
        "Strong proficiency in React, TypeScript, and modern JavaScript",
        "Experience with responsive design and CSS frameworks",
        "Familiarity with RESTful APIs and GraphQL",
        "Understanding of cross-browser compatibility issues and solutions"
      ],
      featured: true
    },
    {
      id: 2,
      title: "Machine Learning Engineer",
      department: "data-science",
      location: "Boston, MA (Hybrid)",
      employmentType: "Full-time",
      description: "Help build our AI-powered health analytics platform to provide personalized insights from wearable device data and medical records.",
      responsibilities: [
        "Design and implement machine learning models for health data analysis",
        "Collaborate with data scientists and engineers to deploy models to production",
        "Optimize machine learning algorithms for performance and accuracy",
        "Analyze large datasets to derive meaningful insights",
        "Stay up-to-date with the latest ML research and technologies"
      ],
      requirements: [
        "MS or PhD in Computer Science, Machine Learning or related field",
        "3+ years of experience in machine learning or deep learning",
        "Proficiency in Python and ML frameworks like TensorFlow or PyTorch",
        "Experience with health data analysis is a plus",
        "Strong background in statistics and mathematics"
      ],
      featured: true
    },
    {
      id: 3,
      title: "UI/UX Designer",
      department: "design",
      location: "Remote",
      employmentType: "Full-time",
      description: "Design beautiful, intuitive interfaces that help users manage their health data effectively and make informed decisions about their wellbeing.",
      responsibilities: [
        "Create wireframes, prototypes, and high-fidelity designs",
        "Conduct user research and usability testing",
        "Collaborate with product managers and engineers",
        "Develop and maintain design systems",
        "Create visual assets for web and mobile applications"
      ],
      requirements: [
        "3+ years of experience in UI/UX design",
        "Proficiency in design tools such as Figma, Sketch, or Adobe XD",
        "Portfolio demonstrating strong visual design skills",
        "Experience with healthcare or medical applications is a plus",
        "Understanding of accessibility standards"
      ]
    },
    {
      id: 4,
      title: "Backend Engineer",
      department: "engineering",
      location: "New York, NY (Hybrid)",
      employmentType: "Full-time",
      description: "Build robust and secure backend systems to handle sensitive health data, ensuring compliance with healthcare regulations while delivering high-performance APIs.",
      responsibilities: [
        "Design and implement scalable backend services",
        "Develop RESTful APIs and GraphQL endpoints",
        "Optimize database performance and queries",
        "Implement security best practices for handling sensitive health data",
        "Collaborate with frontend engineers and data scientists"
      ],
      requirements: [
        "4+ years of experience in backend development",
        "Strong proficiency in Node.js, Python, or Java",
        "Experience with database design and optimization",
        "Knowledge of security best practices and HIPAA compliance",
        "Experience with cloud platforms like AWS or Azure"
      ]
    },
    {
      id: 5,
      title: "Product Manager",
      department: "product",
      location: "Chicago, IL (Hybrid)",
      employmentType: "Full-time",
      description: "Lead the development of innovative health technology products that improve patient outcomes and healthcare delivery.",
      responsibilities: [
        "Define product vision, strategy, and roadmap",
        "Gather and prioritize requirements from stakeholders",
        "Collaborate with engineering, design, and business teams",
        "Analyze market trends and competitive landscape",
        "Oversee product launches and measure success metrics"
      ],
      requirements: [
        "5+ years of experience in product management",
        "Experience with healthcare or health technology products",
        "Strong analytical and problem-solving skills",
        "Excellent communication and presentation abilities",
        "Technical background or understanding of software development"
      ]
    },
    {
      id: 6,
      title: "Healthcare Integration Specialist",
      department: "healthcare",
      location: "Remote",
      employmentType: "Full-time",
      description: "Bridge the gap between technology and healthcare by ensuring our platform integrates seamlessly with existing healthcare systems and workflows.",
      responsibilities: [
        "Work with healthcare providers to understand their systems and needs",
        "Develop integration strategies for electronic health records (EHR) systems",
        "Collaborate with engineering teams to implement integrations",
        "Ensure compliance with healthcare standards and regulations",
        "Provide technical support for healthcare partners"
      ],
      requirements: [
        "3+ years of experience in healthcare IT or integration",
        "Knowledge of healthcare data standards (HL7, FHIR, etc.)",
        "Understanding of healthcare workflows and systems",
        "Strong communication and relationship-building skills",
        "Technical background or experience with API integrations"
      ]
    },
    {
      id: 7,
      title: "Customer Success Manager",
      department: "customer-success",
      location: "Austin, TX (Remote)",
      employmentType: "Full-time",
      description: "Ensure our healthcare customers and patients get the most value from our platform through effective onboarding, training, and ongoing support.",
      responsibilities: [
        "Develop and maintain strong relationships with customers",
        "Create and deliver training programs for platform users",
        "Identify opportunities for customers to expand their use of our platform",
        "Collaborate with product and engineering teams to address customer needs",
        "Monitor and improve customer satisfaction metrics"
      ],
      requirements: [
        "3+ years of experience in customer success or account management",
        "Experience in healthcare or SaaS industries",
        "Strong interpersonal and communication skills",
        "Problem-solving abilities and customer-focused mindset",
        "Understanding of healthcare workflows and challenges"
      ]
    },
    {
      id: 8,
      title: "Data Scientist",
      department: "data-science",
      location: "Remote",
      employmentType: "Full-time",
      description: "Use advanced analytics and machine learning to transform health data into actionable insights that improve patient care and outcomes.",
      responsibilities: [
        "Analyze complex health datasets to identify patterns and insights",
        "Develop predictive models for health outcomes",
        "Collaborate with product and engineering teams",
        "Communicate findings and recommendations to stakeholders",
        "Stay up-to-date with the latest research in health data science"
      ],
      requirements: [
        "MS or PhD in Data Science, Statistics, or related field",
        "3+ years of experience in data science or analytics",
        "Proficiency in Python, R, or similar data analysis tools",
        "Experience with healthcare data is a plus",
        "Strong statistical and mathematical background"
      ]
    }
  ];

  // Filter jobs based on search query and active tab
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'all' || job.department === activeTab;
    
    return matchesSearch && matchesTab;
  });

  // Get featured jobs
  const featuredJobs = jobs.filter(job => job.featured);

  return (
    <PageContainer>
      <HeroSection
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <HeroContent>
          <Heading>Join Our Mission</Heading>
          <Subheading>Help us transform healthcare with AI and wearable technology</Subheading>
          
          <SearchContainer>
            <SearchIconWrapper>
              <IconWrapper icon={FaSearch} size={18} />
            </SearchIconWrapper>
            <SearchInput 
              type="text" 
              placeholder="Search for jobs..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchContainer>
        </HeroContent>
      </HeroSection>

      <ContentContainer>
        {featuredJobs.length > 0 && (
          <FeaturedSection
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <SectionTitle>Featured Opportunities</SectionTitle>
            <FeaturedGrid>
              {featuredJobs.map(job => (
                <FeaturedJobCard key={job.id}>
                  <JobDepartment>
                    <IconWrapper icon={departments.find(d => d.id === job.department)?.icon || FaLaptopCode} size={18} />
                    <span>{departments.find(d => d.id === job.department)?.name}</span>
                  </JobDepartment>
                  <JobTitle>{job.title}</JobTitle>
                  <JobDescription>{job.description}</JobDescription>
                  <JobMeta>
                    <MetaItem>
                      <IconWrapper icon={FaMapMarkerAlt} size={14} />
                      <span>{job.location}</span>
                    </MetaItem>
                    <MetaItem>
                      <IconWrapper icon={FaClock} size={14} />
                      <span>{job.employmentType}</span>
                    </MetaItem>
                  </JobMeta>
                  <ApplyButton to={`/careers/${job.id}`}>
                    View Job
                    <IconWrapper icon={FaChevronRight} size={14} />
                  </ApplyButton>
                </FeaturedJobCard>
              ))}
            </FeaturedGrid>
          </FeaturedSection>
        )}

        <MainContent>
          <CultureSection
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionTitle>Our Culture</SectionTitle>
            <CultureGrid>
              <CultureCard>
                <CultureIcon>
                  <IconWrapper icon={FaUsers} size={28} />
                </CultureIcon>
                <CultureTitle>Mission-Driven</CultureTitle>
                <CultureDescription>
                  We're united by our mission to transform healthcare, improving outcomes and accessibility through technology.
                </CultureDescription>
              </CultureCard>
              
              <CultureCard>
                <CultureIcon>
                  <IconWrapper icon={FaLaptopCode} size={28} />
                </CultureIcon>
                <CultureTitle>Innovation</CultureTitle>
                <CultureDescription>
                  We embrace cutting-edge technologies and creative thinking to solve complex healthcare challenges.
                </CultureDescription>
              </CultureCard>
              
              <CultureCard>
                <CultureIcon>
                  <IconWrapper icon={FaHandHoldingMedical} size={28} />
                </CultureIcon>
                <CultureTitle>Empathy</CultureTitle>
                <CultureDescription>
                  We put people first, designing solutions with deep understanding of patient and provider needs.
                </CultureDescription>
              </CultureCard>
              
              <CultureCard>
                <CultureIcon>
                  <IconWrapper icon={FaBusinessTime} size={28} />
                </CultureIcon>
                <CultureTitle>Impact</CultureTitle>
                <CultureDescription>
                  We measure our success by the positive difference we make in people's health and lives.
                </CultureDescription>
              </CultureCard>
            </CultureGrid>
          </CultureSection>
          
          <BenefitsSection
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionTitle>Benefits & Perks</SectionTitle>
            <BenefitsList>
              <BenefitItem>
                <BenefitTitle>Comprehensive Healthcare</BenefitTitle>
                <BenefitDescription>
                  Premium medical, dental, and vision coverage for you and your dependents
                </BenefitDescription>
              </BenefitItem>
              
              <BenefitItem>
                <BenefitTitle>Flexible Work</BenefitTitle>
                <BenefitDescription>
                  Remote-friendly culture with flexible hours and work-from-home options
                </BenefitDescription>
              </BenefitItem>
              
              <BenefitItem>
                <BenefitTitle>Competitive Compensation</BenefitTitle>
                <BenefitDescription>
                  Salary packages that recognize your skills and experience, plus equity options
                </BenefitDescription>
              </BenefitItem>
              
              <BenefitItem>
                <BenefitTitle>Generous PTO</BenefitTitle>
                <BenefitDescription>
                  Unlimited paid time off, plus paid holidays and sick leave
                </BenefitDescription>
              </BenefitItem>
              
              <BenefitItem>
                <BenefitTitle>Professional Development</BenefitTitle>
                <BenefitDescription>
                  Learning budget, conference attendance, and career growth opportunities
                </BenefitDescription>
              </BenefitItem>
              
              <BenefitItem>
                <BenefitTitle>Wellness Programs</BenefitTitle>
                <BenefitDescription>
                  Gym memberships, mental health resources, and wellness initiatives
                </BenefitDescription>
              </BenefitItem>
            </BenefitsList>
          </BenefitsSection>
          
          <OpenPositionsSection>
            <SectionTitle>Open Positions</SectionTitle>
            
            <DepartmentTabs>
              {departments.map(department => (
                <DepartmentTab 
                  key={department.id}
                  active={activeTab === department.id}
                  onClick={() => setActiveTab(department.id)}
                >
                  {department.icon && (
                    <TabIcon>
                      <IconWrapper icon={department.icon} size={18} />
                    </TabIcon>
                  )}
                  <span>{department.name}</span>
                </DepartmentTab>
              ))}
            </DepartmentTabs>
            
            {filteredJobs.length === 0 ? (
              <NoJobs>
                <p>No jobs match your search criteria. Try adjusting your search or check back later for new opportunities.</p>
              </NoJobs>
            ) : (
              <JobsList
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                {filteredJobs.map(job => (
                  <JobCard 
                    key={job.id}
                    variants={fadeIn}
                  >
                    <JobContent>
                      <JobHeader>
                        <div>
                          <JobTitle>{job.title}</JobTitle>
                          <JobDepartment>
                            <IconWrapper icon={departments.find(d => d.id === job.department)?.icon || FaLaptopCode} size={16} />
                            <span>{departments.find(d => d.id === job.department)?.name}</span>
                          </JobDepartment>
                        </div>
                        <ApplyButton to={`/careers/${job.id}`}>
                          View Job
                          <IconWrapper icon={FaChevronRight} size={14} />
                        </ApplyButton>
                      </JobHeader>
                      
                      <JobMeta>
                        <MetaItem>
                          <IconWrapper icon={FaMapMarkerAlt} size={14} />
                          <span>{job.location}</span>
                        </MetaItem>
                        <MetaItem>
                          <IconWrapper icon={FaClock} size={14} />
                          <span>{job.employmentType}</span>
                        </MetaItem>
                      </JobMeta>
                      
                      <JobDescription>{job.description}</JobDescription>
                      
                      <JobDetails>
                        <div>
                          <JobDetailsTitle>Key Responsibilities:</JobDetailsTitle>
                          <JobDetailsList>
                            {job.responsibilities.slice(0, 3).map((responsibility, index) => (
                              <JobDetailsItem key={index}>{responsibility}</JobDetailsItem>
                            ))}
                          </JobDetailsList>
                        </div>
                        
                        <div>
                          <JobDetailsTitle>Requirements:</JobDetailsTitle>
                          <JobDetailsList>
                            {job.requirements.slice(0, 3).map((requirement, index) => (
                              <JobDetailsItem key={index}>{requirement}</JobDetailsItem>
                            ))}
                          </JobDetailsList>
                        </div>
                      </JobDetails>
                    </JobContent>
                  </JobCard>
                ))}
              </JobsList>
            )}
          </OpenPositionsSection>
          
          <ApplySection
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <ApplyContent>
              <ApplyTitle>Don't see the right role for you?</ApplyTitle>
              <ApplyDescription>
                We're always looking for talented individuals to join our team. Send us your resume and we'll reach out when a suitable position opens up.
              </ApplyDescription>
              <ApplyGenericButton to="/careers/apply">
                Submit Your Resume
              </ApplyGenericButton>
            </ApplyContent>
          </ApplySection>
        </MainContent>
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

const HeroSection = styled(motion.div)`
  background: linear-gradient(135deg, var(--primary) 0%, #3a0ca3 100%);
  padding: 5rem var(--spacing-xl) 7rem;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: linear-gradient(to bottom right, transparent 49%, var(--bg-primary) 50%);
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
  color: white;
  font-weight: 700;
`;

const Subheading = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  opacity: 0.9;
  color: white;
  margin-bottom: var(--spacing-xl);
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-tertiary);
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 16px 16px 16px 45px;
  border-radius: var(--radius-lg);
  border: none;
  background: white;
  font-size: 1rem;
  color: var(--text-primary);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  &:focus {
    outline: none;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: -50px auto 0;
  padding: 0 var(--spacing-lg) var(--spacing-xxl);
  position: relative;
  z-index: 2;
`;

const FeaturedSection = styled(motion.section)`
  margin-bottom: var(--spacing-xl);
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: var(--spacing-lg);
  color: var(--text-title);
  font-weight: 700;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 60px;
    height: 4px;
    background: var(--primary);
    border-radius: var(--radius-sm);
  }
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedJobCard = styled.div`
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const JobDepartment = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  color: var(--primary);
  margin-bottom: var(--spacing-sm);
`;

const JobTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: var(--spacing-sm);
  font-weight: 600;
  color: var(--text-title);
`;

const JobDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
`;

const JobMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  color: var(--text-tertiary);
  font-size: 0.85rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ApplyButton = styled(Link)`
  background: var(--primary);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: var(--radius-md);
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  align-self: flex-start;
  transition: background 0.3s ease;
  
  &:hover {
    background: #4338ca;
  }
`;

const MainContent = styled.div`
  width: 100%;
`;

const CultureSection = styled(motion.section)`
  margin-bottom: var(--spacing-xl);
`;

const CultureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const CultureCard = styled.div`
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  text-align: center;
`;

const CultureIcon = styled.div`
  background: var(--primary-light);
  color: var(--primary);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-md);
`;

const CultureTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: var(--spacing-sm);
  font-weight: 600;
  color: var(--text-title);
`;

const CultureDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-secondary);
`;

const BenefitsSection = styled(motion.section)`
  margin-bottom: var(--spacing-xl);
`;

const BenefitsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitItem = styled.div`
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  border-left: 4px solid var(--primary);
`;

const BenefitTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: var(--spacing-sm);
  font-weight: 600;
  color: var(--text-title);
`;

const BenefitDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-secondary);
`;

const OpenPositionsSection = styled.section`
  margin-bottom: var(--spacing-xl);
`;

const DepartmentTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);
`;

const DepartmentTab = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${props => props.active ? 'var(--primary)' : 'var(--bg-card)'};
  color: ${props => props.active ? 'white' : 'var(--text-primary)'};
  border: ${props => props.active ? 'none' : '1px solid var(--border-color)'};
  padding: 8px 16px;
  border-radius: var(--radius-md);
  font-size: 0.95rem;
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.active ? 'var(--primary)' : 'var(--bg-hover)'};
  }
`;

const TabIcon = styled.span`
  display: flex;
  align-items: center;
`;

const JobsList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

const JobCard = styled(motion.div)`
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 4px solid var(--primary);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
`;

const JobContent = styled.div`
  padding: var(--spacing-lg);
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: var(--spacing-md);
  }
`;

const JobDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const JobDetailsTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: var(--spacing-sm);
  font-weight: 600;
  color: var(--text-title);
`;

const JobDetailsList = styled.ul`
  padding-left: var(--spacing-md);
`;

const JobDetailsItem = styled.li`
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xs);
`;

const NoJobs = styled.div`
  text-align: center;
  padding: var(--spacing-xl);
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  color: var(--text-secondary);
  font-size: 1.1rem;
`;

const ApplySection = styled(motion.section)`
  margin-top: var(--spacing-xxl);
  background: linear-gradient(135deg, var(--primary-light) 0%, rgba(79, 70, 229, 0.1) 100%);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  text-align: center;
`;

const ApplyContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ApplyTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: var(--spacing-md);
  color: var(--text-title);
  font-weight: 700;
`;

const ApplyDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
`;

const ApplyGenericButton = styled(Link)`
  background: var(--primary);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: var(--radius-md);
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: background 0.3s ease;
  
  &:hover {
    background: #4338ca;
  }
`;

export default CareersPage; 
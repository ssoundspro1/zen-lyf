import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaHeartbeat, FaStar, FaChartLine, FaUserMd, FaCalendarAlt } from 'react-icons/fa';
import IconWrapper from 'components/IconWrapper';

const PatientSuccessStoriesPage: React.FC = () => {
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

  // Patient success stories data
  const successStories = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 42,
      condition: "Post-Cardiac Surgery Recovery",
      image: "/assets/patients/sarah.jpg",
      quote: "ZEN-LYF transformed my recovery after open heart surgery. The personalized recovery plan and real-time monitoring gave me confidence to return to normal activities safely.",
      metrics: [
        { label: "Recovery Time", value: "30% faster" },
        { label: "Hospital Readmissions", value: "Avoided" },
        { label: "Activity Level", value: "Increased 45%" }
      ],
      fullStory: "After undergoing a triple bypass surgery, I was anxious about my recovery at home. ZEN-LYF connected to my Apple Watch and provided continuous monitoring of my vital signs. The app alerted me when my heart rate was abnormally high during exercise, preventing me from overexerting myself. The medication reminders ensured I never missed a dose, and the recovery timeline helped me understand what to expect each week. Six months post-surgery, I'm back to hiking and enjoying life with my grandchildren."
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 35,
      condition: "Type 2 Diabetes Management",
      image: "/assets/patients/michael.jpg",
      quote: "Managing my diabetes used to be overwhelming. With ZEN-LYF integrating my glucose monitor and providing AI-powered insights, I've maintained optimal levels for 8 months straight.",
      metrics: [
        { label: "HbA1c Reduction", value: "2.1 points" },
        { label: "Hypoglycemic Events", value: "Reduced 80%" },
        { label: "Medication Adherence", value: "98%" }
      ],
      fullStory: "As a busy software engineer, I struggled to keep my diabetes under control. ZEN-LYF integrated with my continuous glucose monitor and fitness tracker to give me a complete picture of how my diet, exercise, and medication affected my glucose levels. The pattern recognition identified that my glucose spiked significantly after certain meals, even ones I thought were healthy. The app suggested specific dietary adjustments and optimal times for exercise. My endocrinologist was impressed with the detailed reports I could share during appointments, and together we've reduced my medication dosage as my overall health improved."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      age: 29,
      condition: "ACL Reconstruction Rehabilitation",
      image: "/assets/patients/emily.jpg",
      quote: "The guided rehabilitation exercises and progress tracking in ZEN-LYF helped me recover from ACL surgery and return to competitive soccer ahead of schedule.",
      metrics: [
        { label: "Physical Therapy Goals", value: "Completed 4 weeks early" },
        { label: "Range of Motion", value: "100% restored" },
        { label: "Return to Sport", value: "3 months faster than average" }
      ],
      fullStory: "Tearing my ACL during a soccer match was devastating, especially with the typical 9-12 month recovery before returning to sports. After surgery, my physical therapist recommended ZEN-LYF to complement my in-person sessions. The app provided video guidance for daily exercises, ensuring I used proper form. The knee mobility tracking showed my progress over time, which kept me motivated during the frustrating plateaus. The app detected that I was favoring my uninjured leg during exercises and provided corrective guidance. My orthopedic surgeon was amazed at my progress, and I was back on the field in just 6 months, with better biomechanics than before my injury."
    },
    {
      id: 4,
      name: "Robert Williams",
      age: 68,
      condition: "COPD Management",
      image: "/assets/patients/robert.jpg",
      quote: "ZEN-LYF's early warning system detected changes in my breathing patterns and oxygen levels before I felt symptoms, preventing two potential hospitalizations.",
      metrics: [
        { label: "Emergency Room Visits", value: "Reduced from 4 to 0 annually" },
        { label: "Oxygen Saturation", value: "Maintained above 94%" },
        { label: "Quality of Life Score", value: "Improved 62%" }
      ],
      fullStory: "Living with COPD for 15 years, I was accustomed to frequent hospitalizations, especially during winter. ZEN-LYF connected to my pulse oximeter and smart inhaler to track my respiratory health continuously. The app alerted me and my healthcare team when subtle changes in my breathing patterns, sleep quality, and oxygen levels indicated an impending exacerbation. This early warning allowed me to adjust my medications and use supplemental oxygen proactively. The environmental monitoring feature even warns me about poor air quality days so I can plan accordingly. For the first time in a decade, I've gone a full year without hospitalization, giving me freedom to travel and spend quality time with my family."
    }
  ];

  // Healthcare provider testimonials
  const providerTestimonials = [
    {
      id: 1,
      name: "Dr. Jennifer Martinez, MD",
      specialty: "Cardiologist",
      image: "/assets/providers/dr-martinez.jpg",
      quote: "ZEN-LYF has revolutionized how I monitor my cardiac patients remotely. The detailed data and early warning system have helped us intervene before critical situations develop."
    },
    {
      id: 2,
      name: "Dr. Thomas Wilson, MD",
      specialty: "Orthopedic Surgeon",
      image: "/assets/providers/dr-wilson.jpg",
      quote: "My patients using ZEN-LYF during rehabilitation show consistently better outcomes. The real-time feedback on exercise form and adherence tracking has transformed post-surgical care."
    },
    {
      id: 3,
      name: "Lisa Thompson, RN",
      specialty: "Diabetes Care Specialist",
      image: "/assets/providers/nurse-thompson.jpg",
      quote: "The comprehensive data integration in ZEN-LYF gives me insights into my patients' health that weren't possible before. It's like having a 24/7 window into their condition."
    }
  ];

  // Success metrics
  const overallMetrics = [
    { label: "Average Recovery Time", value: "32%", description: "Faster recovery for post-surgical patients" },
    { label: "Hospital Readmissions", value: "78%", description: "Reduction for chronic condition patients" },
    { label: "Medication Adherence", value: "94%", description: "Average adherence rate for ZEN-LYF users" },
    { label: "Quality of Life", value: "67%", description: "Average improvement reported by patients" }
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
          <HeroTitle>Patient Success Stories</HeroTitle>
          <HeroSubtitle>
            Real people, real results. Discover how ZEN-LYF is transforming healthcare 
            experiences and improving lives.
          </HeroSubtitle>
        </motion.div>
      </HeroSection>

      {/* Success Metrics Section */}
      <MetricsSection>
        <SectionHeader>
          <SectionTitle>The ZEN-LYF Impact</SectionTitle>
          <SectionDescription>
            Measurable improvements in patient outcomes across conditions
          </SectionDescription>
        </SectionHeader>

        <MetricsGrid>
          {overallMetrics.map((metric, index) => (
            <MetricCard 
              key={index}
              as={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <MetricIcon><IconWrapper icon={FaChartLine} /></MetricIcon>
              <MetricValue>{metric.value}</MetricValue>
              <MetricLabel>{metric.label}</MetricLabel>
              <MetricDescription>{metric.description}</MetricDescription>
            </MetricCard>
          ))}
        </MetricsGrid>
      </MetricsSection>

      {/* Featured Success Stories */}
      <Section>
        <SectionHeader>
          <SectionTitle>Featured Patient Stories</SectionTitle>
          <SectionDescription>
            Hear from patients who have transformed their health journey with ZEN-LYF
          </SectionDescription>
        </SectionHeader>

        {successStories.map((story, index) => (
          <StoryCard 
            key={story.id}
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            reverse={index % 2 !== 0}
          >
            <StoryImageContainer reverse={index % 2 !== 0}>
              <StoryImage src={story.image} alt={story.name} />
              <StoryConditionTag>{story.condition}</StoryConditionTag>
            </StoryImageContainer>
            
            <StoryContent reverse={index % 2 !== 0}>
              <StoryName>{story.name}, {story.age}</StoryName>
              <StoryQuoteContainer>
                <QuoteIcon><IconWrapper icon={FaQuoteLeft} /></QuoteIcon>
                <StoryQuote>{story.quote}</StoryQuote>
              </StoryQuoteContainer>
              
              <StoryMetricsContainer>
                {story.metrics.map((metric, idx) => (
                  <StoryMetric key={idx}>
                    <StoryMetricValue>{metric.value}</StoryMetricValue>
                    <StoryMetricLabel>{metric.label}</StoryMetricLabel>
                  </StoryMetric>
                ))}
              </StoryMetricsContainer>
              
              <StoryFullText>{story.fullStory}</StoryFullText>
            </StoryContent>
          </StoryCard>
        ))}
      </Section>

      {/* Healthcare Provider Testimonials */}
      <TestimonialsSection>
        <SectionHeader light>
          <SectionTitle light>Healthcare Provider Perspectives</SectionTitle>
          <SectionDescription light>
            What medical professionals are saying about ZEN-LYF
          </SectionDescription>
        </SectionHeader>

        <TestimonialsGrid
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {providerTestimonials.map(testimonial => (
            <TestimonialCard 
              key={testimonial.id}
              variants={fadeIn}
            >
              <TestimonialImageContainer>
                <TestimonialImage src={testimonial.image} alt={testimonial.name} />
              </TestimonialImageContainer>
              <TestimonialContent>
                <TestimonialQuote>"{testimonial.quote}"</TestimonialQuote>
                <TestimonialName>{testimonial.name}</TestimonialName>
                <TestimonialSpecialty>{testimonial.specialty}</TestimonialSpecialty>
              </TestimonialContent>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </TestimonialsSection>

      {/* Research Outcomes */}
      <ResearchSection>
        <SectionHeader>
          <SectionTitle>Clinical Outcomes</SectionTitle>
          <SectionDescription>
            Research-backed results from ZEN-LYF implementation
          </SectionDescription>
        </SectionHeader>

        <ResearchGrid>
          <ResearchCard
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <ResearchIcon><IconWrapper icon={FaHeartbeat} /></ResearchIcon>
            <ResearchTitle>Cardiac Rehabilitation Study</ResearchTitle>
            <ResearchStats>
              <ResearchStat>
                <ResearchStatValue>89%</ResearchStatValue>
                <ResearchStatLabel>Completion Rate</ResearchStatLabel>
              </ResearchStat>
              <ResearchStat>
                <ResearchStatValue>64%</ResearchStatValue>
                <ResearchStatLabel>Reduced Readmissions</ResearchStatLabel>
              </ResearchStat>
            </ResearchStats>
            <ResearchDescription>
              A 12-month study of 248 post-cardiac event patients showed significantly higher rehabilitation program completion rates and reduced hospital readmissions compared to standard care.
            </ResearchDescription>
          </ResearchCard>

          <ResearchCard
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <ResearchIcon><IconWrapper icon={FaUserMd} /></ResearchIcon>
            <ResearchTitle>Chronic Disease Management</ResearchTitle>
            <ResearchStats>
              <ResearchStat>
                <ResearchStatValue>42%</ResearchStatValue>
                <ResearchStatLabel>Fewer ER Visits</ResearchStatLabel>
              </ResearchStat>
              <ResearchStat>
                <ResearchStatValue>3.2</ResearchStatValue>
                <ResearchStatLabel>Quality of Life Improvement</ResearchStatLabel>
              </ResearchStat>
            </ResearchStats>
            <ResearchDescription>
              Patients with chronic conditions including diabetes, COPD, and heart failure showed significant improvements in key health metrics and reduced emergency care utilization.
            </ResearchDescription>
          </ResearchCard>

          <ResearchCard
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <ResearchIcon><IconWrapper icon={FaCalendarAlt} /></ResearchIcon>
            <ResearchTitle>Post-Surgical Recovery</ResearchTitle>
            <ResearchStats>
              <ResearchStat>
                <ResearchStatValue>37%</ResearchStatValue>
                <ResearchStatLabel>Faster Return to Activities</ResearchStatLabel>
              </ResearchStat>
              <ResearchStat>
                <ResearchStatValue>91%</ResearchStatValue>
                <ResearchStatLabel>Patient Satisfaction</ResearchStatLabel>
              </ResearchStat>
            </ResearchStats>
            <ResearchDescription>
              Orthopedic and general surgery patients using ZEN-LYF returned to normal activities significantly faster and reported higher satisfaction with their recovery experience.
            </ResearchDescription>
          </ResearchCard>
        </ResearchGrid>
      </ResearchSection>

      {/* CTA Section */}
      <CTASection>
        <CTAContent>
          <CTATitle>Start Your Success Story</CTATitle>
          <CTADescription>
            Join thousands of patients who have transformed their healthcare journey with ZEN-LYF
          </CTADescription>
          <CTAButtons>
            <PrimaryButton>Get Started</PrimaryButton>
            <SecondaryButton>Talk to a Specialist</SecondaryButton>
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

const MetricsSection = styled.section`
  padding: 5rem 2rem;
  background: #f8f9fa;
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

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const MetricCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const MetricIcon = styled.div`
  font-size: 2.5rem;
  color: #3e92cc;
  margin-bottom: 1rem;
`;

const MetricValue = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: #0a2463;
  margin-bottom: 0.5rem;
`;

const MetricLabel = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

const MetricDescription = styled.div`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
`;

const StoryCard = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  margin-bottom: 3rem;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const StoryImageContainer = styled.div<{ reverse?: boolean }>`
  flex: 1;
  position: relative;
  min-height: 400px;
  background: ${props => props.reverse ? 'linear-gradient(135deg, #3e92cc 0%, #0a2463 100%)' : 'linear-gradient(135deg, #0a2463 0%, #3e92cc 100%)'};

  @media (max-width: 992px) {
    min-height: 300px;
  }
`;

const StoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.85;
  position: absolute;
  top: 0;
  left: 0;
`;

const StoryConditionTag = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.9);
  color: #0a2463;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const StoryContent = styled.div<{ reverse?: boolean }>`
  flex: 1.5;
  padding: 3rem;
  background: white;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const StoryName = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #0a2463;
`;

const StoryQuoteContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const QuoteIcon = styled.div`
  font-size: 2rem;
  color: #3e92cc;
  margin-right: 1rem;
  flex-shrink: 0;
  opacity: 0.7;
`;

const StoryQuote = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  font-style: italic;
  color: #555;
`;

const StoryMetricsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const StoryMetric = styled.div`
  min-width: 120px;
`;

const StoryMetricValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #3e92cc;
  margin-bottom: 0.25rem;
`;

const StoryMetricLabel = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const StoryFullText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #555;
`;

const TestimonialsSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #0a2463 0%, #3e92cc 100%);
  color: white;
`;

const TestimonialsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const TestimonialImageContainer = styled.div`
  height: 200px;
  overflow: hidden;
`;

const TestimonialImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TestimonialContent = styled.div`
  padding: 2rem;
`;

const TestimonialQuote = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;
`;

const TestimonialName = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const TestimonialSpecialty = styled.div`
  font-size: 0.9rem;
  opacity: 0.9;
`;

const ResearchSection = styled.section`
  padding: 5rem 2rem;
  background: #f8f9fa;
`;

const ResearchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const ResearchCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ResearchIcon = styled.div`
  font-size: 2.5rem;
  color: #3e92cc;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ResearchTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #0a2463;
  text-align: center;
`;

const ResearchStats = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1.5rem;
`;

const ResearchStat = styled.div`
  text-align: center;
`;

const ResearchStatValue = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #3e92cc;
  margin-bottom: 0.25rem;
`;

const ResearchStatLabel = styled.div`
  font-size: 0.85rem;
  color: #666;
  max-width: 120px;
`;

const ResearchDescription = styled.p`
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

export default PatientSuccessStoriesPage;

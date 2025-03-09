import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaCalendarAlt, FaClock, FaChevronRight, FaSearch } from 'react-icons/fa';
import IconWrapper from 'components/IconWrapper';

const GuidesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  // Categories
  const categories = [
    { id: 'all', name: 'All Guides' },
    { id: 'beginners', name: 'Beginners' },
    { id: 'devices', name: 'Device Setup' },
    { id: 'medical', name: 'Medical Reports' },
    { id: 'data', name: 'Data Management' },
    { id: 'analysis', name: 'Health Analysis' },
    { id: 'emergency', name: 'Emergency Features' }
  ];

  // Guide data
  const guides = [
    {
      id: 1,
      title: "Getting Started with ZEN-LYF",
      excerpt: "A comprehensive guide for new users to set up their ZEN-LYF account and start monitoring their health metrics.",
      category: "beginners",
      author: "ZEN-LYF Team",
      date: "April 15, 2023",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 2,
      title: "How to Connect Your First Wearable Device",
      excerpt: "Learn how to connect and sync your wearable device with ZEN-LYF for seamless health data tracking.",
      category: "devices",
      author: "Michael Roberts",
      date: "April 10, 2023",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Understanding Your Health Dashboard",
      excerpt: "A detailed walkthrough of your ZEN-LYF health dashboard and how to interpret the metrics and insights.",
      category: "beginners",
      author: "Dr. Sarah Chen",
      date: "April 5, 2023",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Uploading and Analyzing Medical Reports",
      excerpt: "Step-by-step instructions for uploading your medical reports and getting AI-powered analysis and insights.",
      category: "medical",
      author: "Dr. Emily Johnson",
      date: "March 28, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1576671081098-d562e936a0ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Managing Your Health Data Privacy",
      excerpt: "Learn how to control your privacy settings and manage who has access to your health information.",
      category: "data",
      author: "Alex Thompson",
      date: "March 20, 2023",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Setting Up Emergency Alerts",
      excerpt: "Configure emergency alerts to notify your emergency contacts when irregular health patterns are detected.",
      category: "emergency",
      author: "Samantha Lee",
      date: "March 15, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "Understanding AI Health Insights",
      excerpt: "A guide to interpreting the AI-generated health insights and recommendations from your health data.",
      category: "analysis",
      author: "Dr. James Wilson",
      date: "March 10, 2023",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1501159599018-4a1fb2771f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      title: "Syncing Multiple Devices",
      excerpt: "How to connect and manage multiple wearable devices and integrate data from different sources.",
      category: "devices",
      author: "Michael Roberts",
      date: "March 5, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 9,
      title: "Advanced Health Metrics Explained",
      excerpt: "A deep dive into advanced health metrics tracked by ZEN-LYF and what they mean for your health.",
      category: "analysis",
      author: "Dr. Sarah Chen",
      date: "February 28, 2023",
      readTime: "18 min read",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Filter guides based on search query and selected category
  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         guide.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || guide.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Get featured guide
  const featuredGuide = guides.find(guide => guide.featured);

  return (
    <PageContainer>
      <HeroSection
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <HeroContent>
          <Heading>Guides & Tutorials</Heading>
          <Subheading>Step-by-step guides to help you get the most out of ZEN-LYF</Subheading>
          
          <SearchContainer>
            <SearchIconWrapper>
              <IconWrapper icon={FaSearch} size={18} />
            </SearchIconWrapper>
            <SearchInput 
              type="text" 
              placeholder="Search guides..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchContainer>
        </HeroContent>
      </HeroSection>

      <ContentContainer>
        {featuredGuide && (
          <FeaturedGuideSection
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <SectionTitle>Featured Guide</SectionTitle>
            <FeaturedGuide>
              <FeaturedImageContainer>
                <FeaturedImage src={featuredGuide.image} alt={featuredGuide.title} />
              </FeaturedImageContainer>
              <FeaturedContent>
                <FeaturedCategory>{categories.find(c => c.id === featuredGuide.category)?.name}</FeaturedCategory>
                <FeaturedTitle>{featuredGuide.title}</FeaturedTitle>
                <FeaturedExcerpt>{featuredGuide.excerpt}</FeaturedExcerpt>
                <GuideMeta>
                  <MetaItem>
                    <IconWrapper icon={FaUserAlt} size={14} />
                    <span>{featuredGuide.author}</span>
                  </MetaItem>
                  <MetaItem>
                    <IconWrapper icon={FaCalendarAlt} size={14} />
                    <span>{featuredGuide.date}</span>
                  </MetaItem>
                  <MetaItem>
                    <IconWrapper icon={FaClock} size={14} />
                    <span>{featuredGuide.readTime}</span>
                  </MetaItem>
                </GuideMeta>
                <ReadGuideButton to={`/guides/${featuredGuide.id}`}>
                  Read Guide
                  <IconWrapper icon={FaChevronRight} size={14} />
                </ReadGuideButton>
              </FeaturedContent>
            </FeaturedGuide>
          </FeaturedGuideSection>
        )}

        <MainContent>
          <CategoriesSection>
            {categories.map(category => (
              <CategoryButton 
                key={category.id}
                active={selectedCategory === category.id}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </CategoryButton>
            ))}
          </CategoriesSection>

          <SectionTitle>All Guides</SectionTitle>
          
          {filteredGuides.length === 0 ? (
            <NoResults>
              <p>No guides found. Try adjusting your search or category selection.</p>
            </NoResults>
          ) : (
            <GuideGrid
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {filteredGuides.map(guide => (
                <GuideCard key={guide.id} variants={fadeIn}>
                  <GuideImageContainer>
                    <GuideImage src={guide.image} alt={guide.title} />
                    <GuideCategory>{categories.find(c => c.id === guide.category)?.name}</GuideCategory>
                  </GuideImageContainer>
                  <GuideContent>
                    <GuideTitle>{guide.title}</GuideTitle>
                    <GuideExcerpt>{guide.excerpt}</GuideExcerpt>
                    <GuideMeta>
                      <MetaItem>
                        <IconWrapper icon={FaUserAlt} size={12} />
                        <span>{guide.author}</span>
                      </MetaItem>
                      <MetaItem>
                        <IconWrapper icon={FaClock} size={12} />
                        <span>{guide.readTime}</span>
                      </MetaItem>
                    </GuideMeta>
                    <ReadMoreLink to={`/guides/${guide.id}`}>
                      Read Guide
                      <IconWrapper icon={FaChevronRight} size={12} />
                    </ReadMoreLink>
                  </GuideContent>
                </GuideCard>
              ))}
            </GuideGrid>
          )}
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

const FeaturedGuideSection = styled(motion.div)`
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

const FeaturedGuide = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedImageContainer = styled.div`
  height: 100%;
  
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const FeaturedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FeaturedContent = styled.div`
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
`;

const FeaturedCategory = styled.span`
  background: var(--primary-light);
  color: var(--primary);
  padding: 5px 12px;
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  font-weight: 600;
  width: fit-content;
  margin-bottom: var(--spacing-md);
`;

const FeaturedTitle = styled.h3`
  font-size: 1.75rem;
  margin-bottom: var(--spacing-md);
  font-weight: 700;
  color: var(--text-title);
`;

const FeaturedExcerpt = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
`;

const GuideMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  color: var(--text-tertiary);
  font-size: 0.9rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ReadGuideButton = styled(Link)`
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

const CategoriesSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--border-color);
`;

const CategoryButton = styled.button<{ active: boolean }>`
  background: ${props => props.active ? 'var(--primary)' : 'var(--bg-card)'};
  color: ${props => props.active ? 'white' : 'var(--text-primary)'};
  border: ${props => props.active ? 'none' : '1px solid var(--border-color)'};
  padding: 8px 16px;
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${props => props.active ? 'var(--primary)' : 'var(--bg-hover)'};
  }
`;

const GuideGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const GuideCard = styled(motion.div)`
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
`;

const GuideImageContainer = styled.div`
  position: relative;
`;

const GuideImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const GuideCategory = styled.span`
  position: absolute;
  top: var(--spacing-sm);
  left: var(--spacing-sm);
  background: var(--primary);
  color: white;
  padding: 4px 10px;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 600;
`;

const GuideContent = styled.div`
  padding: var(--spacing-md);
`;

const GuideTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: var(--spacing-sm);
  font-weight: 700;
  color: var(--text-title);
`;

const GuideExcerpt = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ReadMoreLink = styled(Link)`
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
  font-size: 0.95rem;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: var(--spacing-xl);
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  color: var(--text-secondary);
  font-size: 1.1rem;
`;

export default GuidesPage; 
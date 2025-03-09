import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUserAlt, FaTag } from 'react-icons/fa';
import IconWrapper from 'components/IconWrapper';

const BlogPage: React.FC = () => {
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
        staggerChildren: 0.2
      }
    }
  };

  // Mock blog post data
  const blogPosts = [
    {
      id: 1,
      title: "How AI is Transforming Healthcare Monitoring",
      excerpt: "Discover how artificial intelligence is revolutionizing the way we monitor health metrics and predict potential health issues before they become serious.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "April 10, 2023",
      author: "Dr. Sarah Chen",
      category: "AI in Healthcare",
      tags: ["AI", "Healthcare", "Monitoring"]
    },
    {
      id: 2,
      title: "Wearable Technology: Beyond Step Counting",
      excerpt: "Modern wearable devices are doing more than just counting steps. Learn how the latest innovations are tracking advanced health metrics and helping patients manage chronic conditions.",
      image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "March 25, 2023",
      author: "Michael Roberts",
      category: "Wearable Technology",
      tags: ["Wearables", "Health Tech", "Innovation"]
    },
    {
      id: 3,
      title: "The Future of Personalized Medicine",
      excerpt: "Personalized medicine is changing how we approach healthcare. See how AI and machine learning are making individualized treatment plans more accessible.",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "March 15, 2023",
      author: "Dr. Emily Johnson",
      category: "Personalized Medicine",
      tags: ["AI", "Medicine", "Personalization"]
    },
    {
      id: 4,
      title: "Healthcare Data Security: What You Need to Know",
      excerpt: "With the rise of digital health solutions, data security is more important than ever. Learn about the measures ZEN-LYF takes to protect your sensitive health information.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "March 5, 2023",
      author: "Alex Thompson",
      category: "Data Security",
      tags: ["Security", "Privacy", "Healthcare Data"]
    },
    {
      id: 5,
      title: "How to Integrate Health Data from Multiple Devices",
      excerpt: "Managing health data from multiple devices can be challenging. This guide provides practical tips on how to centralize and make sense of all your health metrics.",
      image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "February 20, 2023",
      author: "Samantha Lee",
      category: "Health Tech",
      tags: ["Integration", "Health Data", "Devices"]
    }
  ];

  const categories = [
    "AI in Healthcare",
    "Wearable Technology",
    "Personalized Medicine",
    "Data Security",
    "Health Tech",
    "Medical Research",
    "Patient Stories"
  ];

  const popularTags = [
    "AI", "Healthcare", "Wearables", "Data", "Innovation", 
    "Research", "Medicine", "Technology", "Wellness", "Security"
  ];

  return (
    <PageContainer>
      <HeroSection
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <HeroContent>
          <Heading>ZEN-LYF Blog</Heading>
          <Subheading>Insights, innovations, and inspiration for your health journey</Subheading>
        </HeroContent>
      </HeroSection>

      <ContentContainer>
        <MainContent>
          <FeaturedPost
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <FeaturedImage src={blogPosts[0].image} alt={blogPosts[0].title} />
            <FeaturedPostContent>
              <FeaturedCategory>{blogPosts[0].category}</FeaturedCategory>
              <FeaturedTitle>{blogPosts[0].title}</FeaturedTitle>
              <FeaturedExcerpt>{blogPosts[0].excerpt}</FeaturedExcerpt>
              <PostMeta>
                <MetaItem>
                  <IconWrapper icon={FaCalendarAlt} size={14} />
                  <span>{blogPosts[0].date}</span>
                </MetaItem>
                <MetaItem>
                  <IconWrapper icon={FaUserAlt} size={14} />
                  <span>{blogPosts[0].author}</span>
                </MetaItem>
                <MetaItem>
                  <IconWrapper icon={FaTag} size={14} />
                  <span>{blogPosts[0].tags[0]}</span>
                </MetaItem>
              </PostMeta>
              <ReadMoreButton to={`/blog/${blogPosts[0].id}`}>Read More</ReadMoreButton>
            </FeaturedPostContent>
          </FeaturedPost>

          <SectionTitle>Latest Articles</SectionTitle>
          
          <PostGrid
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {blogPosts.slice(1).map(post => (
              <PostCard key={post.id} variants={fadeIn}>
                <PostImageContainer>
                  <PostImage src={post.image} alt={post.title} />
                  <PostCategory>{post.category}</PostCategory>
                </PostImageContainer>
                <PostContent>
                  <PostTitle>{post.title}</PostTitle>
                  <PostExcerpt>{post.excerpt}</PostExcerpt>
                  <PostMeta>
                    <MetaItem>
                      <IconWrapper icon={FaCalendarAlt} size={12} />
                      <span>{post.date}</span>
                    </MetaItem>
                    <MetaItem>
                      <IconWrapper icon={FaUserAlt} size={12} />
                      <span>{post.author}</span>
                    </MetaItem>
                  </PostMeta>
                  <ReadMoreLink to={`/blog/${post.id}`}>Read More</ReadMoreLink>
                </PostContent>
              </PostCard>
            ))}
          </PostGrid>

          <Pagination>
            <PaginationButton disabled>Previous</PaginationButton>
            <PaginationNumber active>1</PaginationNumber>
            <PaginationNumber>2</PaginationNumber>
            <PaginationNumber>3</PaginationNumber>
            <PaginationButton>Next</PaginationButton>
          </Pagination>
        </MainContent>

        <Sidebar>
          <SidebarSection>
            <SidebarTitle>Search</SidebarTitle>
            <SearchBar>
              <SearchInput type="text" placeholder="Search articles..." />
              <SearchButton>Search</SearchButton>
            </SearchBar>
          </SidebarSection>

          <SidebarSection>
            <SidebarTitle>Categories</SidebarTitle>
            <CategoryList>
              {categories.map((category, index) => (
                <CategoryItem key={index}>
                  <CategoryLink to={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}>
                    {category}
                  </CategoryLink>
                </CategoryItem>
              ))}
            </CategoryList>
          </SidebarSection>

          <SidebarSection>
            <SidebarTitle>Popular Tags</SidebarTitle>
            <TagsContainer>
              {popularTags.map((tag, index) => (
                <TagLink key={index} to={`/blog/tag/${tag.toLowerCase()}`}>
                  {tag}
                </TagLink>
              ))}
            </TagsContainer>
          </SidebarSection>

          <SidebarSection>
            <SidebarTitle>Subscribe</SidebarTitle>
            <SubscribeForm>
              <SubscribeInput type="email" placeholder="Your email address" />
              <SubscribeButton>Subscribe</SubscribeButton>
              <SubscribeText>
                Get the latest articles, research, and insights delivered to your inbox.
              </SubscribeText>
            </SubscribeForm>
          </SidebarSection>
        </Sidebar>
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
  height: 300px;
  background: linear-gradient(135deg, var(--primary) 0%, #3a0ca3 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
`;

const HeroContent = styled.div`
  max-width: 800px;
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
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: var(--spacing-xl);
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.main`
  width: 100%;
`;

const FeaturedPost = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const FeaturedPostContent = styled.div`
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
`;

const FeaturedCategory = styled.span`
  background: var(--primary-light);
  color: var(--primary);
  padding: 4px 10px;
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
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
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

const PostGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PostCard = styled(motion.div)`
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

const PostImageContainer = styled.div`
  position: relative;
`;

const PostImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const PostCategory = styled.span`
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

const PostContent = styled.div`
  padding: var(--spacing-md);
`;

const PostTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: var(--spacing-sm);
  font-weight: 700;
  color: var(--text-title);
`;

const PostExcerpt = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PostMeta = styled.div`
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

const ReadMoreLink = styled(Link)`
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
  font-size: 0.95rem;
  display: inline-flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ReadMoreButton = styled(Link)`
  background: var(--primary);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: var(--radius-md);
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  margin-top: auto;
  align-self: flex-start;
  transition: background 0.3s ease;
  
  &:hover {
    background: #4338ca;
  }
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-xl);
`;

const PaginationButton = styled.button<{ disabled?: boolean }>`
  background: ${props => props.disabled ? 'var(--bg-muted)' : 'var(--primary)'};
  color: ${props => props.disabled ? 'var(--text-tertiary)' : 'white'};
  border: none;
  padding: 8px 16px;
  border-radius: var(--radius-md);
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.7 : 1};
`;

const PaginationNumber = styled.button<{ active?: boolean }>`
  background: ${props => props.active ? 'var(--primary)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-primary)'};
  border: ${props => props.active ? 'none' : '1px solid var(--border-color)'};
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover {
    background: ${props => props.active ? 'var(--primary)' : 'var(--bg-hover)'};
  }
`;

const Sidebar = styled.aside`
  width: 100%;
`;

const SidebarSection = styled.div`
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
`;

const SidebarTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: var(--spacing-md);
  color: var(--text-title);
  font-weight: 600;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 40px;
    height: 3px;
    background: var(--primary);
    border-radius: var(--radius-sm);
  }
`;

const SearchBar = styled.div`
  display: flex;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px 15px;
  border: 1px solid var(--border-color);
  border-right: none;
  border-radius: var(--radius-md) 0 0 var(--radius-md);
  background: var(--bg-input);
  color: var(--text-primary);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const SearchButton = styled.button`
  background: var(--primary);
  color: white;
  border: none;
  padding: 0 15px;
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  cursor: pointer;
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CategoryItem = styled.li`
  border-bottom: 1px solid var(--border-color);
  
  &:last-child {
    border-bottom: none;
  }
`;

const CategoryLink = styled(Link)`
  display: block;
  padding: 10px 0;
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary);
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TagLink = styled(Link)`
  background: var(--bg-muted);
  color: var(--text-secondary);
  padding: 5px 10px;
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  text-decoration: none;
  transition: background 0.3s ease, color 0.3s ease;
  
  &:hover {
    background: var(--primary-light);
    color: var(--primary);
  }
`;

const SubscribeForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

const SubscribeInput = styled.input`
  padding: 10px 15px;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  background: var(--bg-input);
  color: var(--text-primary);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const SubscribeButton = styled.button`
  background: var(--primary);
  color: white;
  border: none;
  padding: 10px;
  border-radius: var(--radius-md);
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;
  
  &:hover {
    background: #4338ca;
  }
`;

const SubscribeText = styled.p`
  font-size: 0.85rem;
  color: var(--text-tertiary);
  margin-top: var(--spacing-sm);
`;

export default BlogPage; 
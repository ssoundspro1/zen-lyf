import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PricingPage: React.FC = () => {
  const [annual, setAnnual] = useState(true);
  const [activeTab, setActiveTab] = useState<'individual' | 'enterprise'>('individual');

  // Define pricing plans with annual and monthly options
  const individualPlans = [
    {
      title: 'Basic',
      description: 'Essential recovery tracking and wellness monitoring',
      price: annual ? 89.99 : 8.99,
      period: annual ? '/year' : '/month',
      features: [
        'Basic health monitoring',
        'Medical record storage',
        'Daily wellness tips',
        'Emergency alerts',
        'Apple Health integration',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      title: 'Premium',
      description: 'Advanced recovery tracking and AI-driven insights',
      price: annual ? 149.99 : 14.99,
      period: annual ? '/year' : '/month',
      features: [
        'All Basic features',
        'AI medical report analysis',
        'Unlimited medical records',
        'Custom recovery plans',
        'Medication reminders',
        'All wearable integrations',
        'Priority customer support',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      title: 'Family',
      description: 'Multiple user profiles with caregiver monitoring',
      price: annual ? 239.99 : 24.99,
      period: annual ? '/year' : '/month',
      features: [
        'All Premium features',
        'Up to 5 family members',
        'Caregiver monitoring dashboard',
        'Family health insights',
        'Health trend analytics',
        'Family medication tracking',
        '24/7 emergency support',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
  ];

  const enterprisePlans = [
    {
      title: 'Starter',
      description: 'Essential patient monitoring for small hospitals',
      price: annual ? 1999 : 199,
      period: annual ? '/year' : '/month',
      features: [
        'Up to 100 patients',
        'Basic patient monitoring',
        'Real-time alerts',
        'Medical record access',
        'Standard support',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
    {
      title: 'Professional',
      description: 'Comprehensive solution for mid-sized healthcare providers',
      price: annual ? 3999 : 399,
      period: annual ? '/year' : '/month',
      features: [
        'Up to 500 patients',
        'All Starter features',
        'Advanced patient analytics',
        'AI medical report summaries',
        'Custom recovery protocols',
        'Staff management tools',
        'Priority support',
      ],
      cta: 'Contact Sales',
      popular: true,
    },
    {
      title: 'Enterprise',
      description: 'Complete solution for large hospitals and healthcare networks',
      price: 'Custom',
      period: '',
      features: [
        'Unlimited patients',
        'All Professional features',
        'AI hospital assistant',
        'Custom integrations',
        'White-labeled mobile app',
        'Advanced analytics dashboard',
        'Dedicated account manager',
        'SLA guarantees & compliance',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const activePlans = activeTab === 'individual' ? individualPlans : enterprisePlans;

  return (
    <PricingContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PricingHeader>
          <PricingTitle>Simple, Transparent Pricing</PricingTitle>
          <PricingSubtitle>
            Choose the plan that works for you. All plans include a 14-day free trial.
          </PricingSubtitle>
        </PricingHeader>

        <PricingTabs>
          <TabItem
            active={activeTab === 'individual'}
            onClick={() => setActiveTab('individual')}
          >
            Individual & Family
          </TabItem>
          <TabItem
            active={activeTab === 'enterprise'}
            onClick={() => setActiveTab('enterprise')}
          >
            Hospitals & Clinics
          </TabItem>
        </PricingTabs>

        <PricingToggle>
          <ToggleLabel>Monthly</ToggleLabel>
          <ToggleWrapper onClick={() => setAnnual(!annual)}>
            <ToggleButton active={annual} />
          </ToggleWrapper>
          <ToggleLabel active={annual}>Annual <SaveBadge>Save 15%</SaveBadge></ToggleLabel>
        </PricingToggle>

        <PlansContainer>
          {activePlans.map((plan, index) => (
            <PlanCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              popular={plan.popular}
            >
              {plan.popular && <PopularBadge>Most Popular</PopularBadge>}
              <PlanHeader>
                <PlanTitle>{plan.title}</PlanTitle>
                <PlanDescription>{plan.description}</PlanDescription>
              </PlanHeader>
              <PlanPrice>
                {typeof plan.price === 'number' ? (
                  <>
                    <CurrencySymbol>$</CurrencySymbol>
                    {plan.price}
                  </>
                ) : (
                  plan.price
                )}
                <PlanPeriod>{plan.period}</PlanPeriod>
              </PlanPrice>
              <PlanFeatures>
                {plan.features.map((feature, featureIndex) => (
                  <PlanFeature key={featureIndex}>
                    <FeatureIcon>✓</FeatureIcon>
                    <FeatureText>{feature}</FeatureText>
                  </PlanFeature>
                ))}
              </PlanFeatures>
              <PlanCTA to={activeTab === 'individual' ? '/signup' : '/contact'} popular={plan.popular}>
                {plan.cta}
              </PlanCTA>
            </PlanCard>
          ))}
        </PlansContainer>

        <EnterpriseSection>
          <EnterpriseSectionContent>
            <EnterpriseTitle>Need a custom solution?</EnterpriseTitle>
            <EnterpriseDescription>
              Our enterprise plan offers advanced features, dedicated support, and custom integrations for large hospitals and healthcare networks.
            </EnterpriseDescription>
            <EnterpriseButton to="/contact">Contact Our Sales Team</EnterpriseButton>
          </EnterpriseSectionContent>
        </EnterpriseSection>

        <FAQSection>
          <FAQTitle>Frequently Asked Questions</FAQTitle>
          <FAQGrid>
            <FAQItem>
              <FAQQuestion>What payment methods do you accept?</FAQQuestion>
              <FAQAnswer>
                We accept all major credit cards, PayPal, and for enterprise customers, we also accept wire transfers and purchase orders.
              </FAQAnswer>
            </FAQItem>
            <FAQItem>
              <FAQQuestion>Can I change my plan later?</FAQQuestion>
              <FAQAnswer>
                Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the beginning of the next billing cycle.
              </FAQAnswer>
            </FAQItem>
            <FAQItem>
              <FAQQuestion>Is my data secure and HIPAA compliant?</FAQQuestion>
              <FAQAnswer>
                Yes, ZEN-LYF adheres to strict HIPAA compliance standards. All your health data is encrypted and stored securely.
              </FAQAnswer>
            </FAQItem>
            <FAQItem>
              <FAQQuestion>Do you offer discounts for non-profits?</FAQQuestion>
              <FAQAnswer>
                Yes, we offer special pricing for non-profit healthcare organizations. Please contact our sales team for more information.
              </FAQAnswer>
            </FAQItem>
            <FAQItem>
              <FAQQuestion>What happens when my trial ends?</FAQQuestion>
              <FAQAnswer>
                After your 14-day trial period, you'll be automatically subscribed to the plan you selected. You can cancel anytime before the trial ends.
              </FAQAnswer>
            </FAQItem>
            <FAQItem>
              <FAQQuestion>Can I get a demo before subscribing?</FAQQuestion>
              <FAQAnswer>
                Absolutely! Contact our sales team for a personalized demo of any of our plans and features.
              </FAQAnswer>
            </FAQItem>
          </FAQGrid>
        </FAQSection>
      </motion.div>
    </PricingContainer>
  );
};

// Styled Components
const PricingContainer = styled.div`
  padding: 80px 24px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const PricingHeader = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

const PricingTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  background: linear-gradient(90deg, #1E88E5, #64B5F6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  letter-spacing: -0.5px;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const PricingSubtitle = styled.p`
  font-size: 18px;
  color: #718096;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const PricingTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 8px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const TabItem = styled.div<{ active: boolean }>`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: ${props => props.active ? 'rgba(30, 136, 229, 0.1)' : 'transparent'};
  color: ${props => props.active ? '#1E88E5' : '#718096'};
  
  &:hover {
    color: ${props => props.active ? '#1E88E5' : '#4A5568'};
  }
`;

const PricingToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
`;

const ToggleLabel = styled.span<{ active?: boolean }>`
  font-size: 16px;
  color: ${props => props.active ? '#1E88E5' : '#718096'};
  font-weight: ${props => props.active ? '600' : '400'};
  display: flex;
  align-items: center;
`;

const SaveBadge = styled.span`
  font-size: 12px;
  font-weight: 600;
  background: #E3F2FD;
  color: #1E88E5;
  padding: 4px 8px;
  border-radius: 12px;
  margin-left: 8px;
`;

const ToggleWrapper = styled.div`
  width: 50px;
  height: 28px;
  background: #E3F2FD;
  border-radius: 14px;
  margin: 0 12px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
`;

const ToggleButton = styled.div<{ active: boolean }>`
  width: 22px;
  height: 22px;
  background: ${props => props.active ? '#1E88E5' : '#90CAF9'};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${props => props.active ? '25px' : '3px'};
  transition: all 0.3s ease;
`;

const PlansContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  margin-bottom: 64px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PlanCard = styled(motion.div)<{ popular?: boolean }>`
  background: ${props => props.popular ? 'rgba(30, 136, 229, 0.05)' : 'white'};
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, ${props => props.popular ? '0.1' : '0.05'});
  border: 1px solid ${props => props.popular ? 'rgba(30, 136, 229, 0.3)' : 'rgba(0, 0, 0, 0.05)'};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, ${props => props.popular ? '0.15' : '0.1'});
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background: #1E88E5;
  color: white;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 12px;
`;

const PlanHeader = styled.div`
  margin-bottom: 24px;
`;

const PlanTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #2D3748;
  margin-bottom: 8px;
`;

const PlanDescription = styled.p`
  font-size: 14px;
  color: #718096;
  line-height: 1.6;
`;

const PlanPrice = styled.div`
  font-size: 48px;
  font-weight: 800;
  color: #2D3748;
  margin-bottom: 24px;
  display: flex;
  align-items: baseline;
`;

const CurrencySymbol = styled.span`
  font-size: 24px;
  margin-right: 4px;
  font-weight: 600;
  color: #718096;
`;

const PlanPeriod = styled.span`
  font-size: 16px;
  color: #718096;
  font-weight: 400;
  margin-left: 4px;
`;

const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
`;

const PlanFeature = styled.li`
  display: flex;
  margin-bottom: 16px;
  align-items: flex-start;
`;

const FeatureIcon = styled.span`
  color: #1E88E5;
  margin-right: 12px;
  font-weight: bold;
`;

const FeatureText = styled.span`
  font-size: 16px;
  color: #4A5568;
`;

const PlanCTA = styled(Link)<{ popular?: boolean }>`
  display: block;
  text-align: center;
  padding: 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  background: ${props => props.popular ? '#1E88E5' : 'white'};
  color: ${props => props.popular ? 'white' : '#1E88E5'};
  border: 2px solid ${props => props.popular ? '#1E88E5' : '#E3F2FD'};
  
  &:hover {
    background: ${props => props.popular ? '#1976D2' : '#E3F2FD'};
    transform: translateY(-2px);
  }
`;

const EnterpriseSection = styled.div`
  background: linear-gradient(135deg, #1A237E, #1E88E5);
  border-radius: 16px;
  padding: 48px;
  margin-bottom: 64px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 32px;
  }
`;

const EnterpriseSectionContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const EnterpriseTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: white;
  margin-bottom: 16px;
`;

const EnterpriseDescription = styled.p`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 32px;
  line-height: 1.6;
`;

const EnterpriseButton = styled(Link)`
  display: inline-block;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  background: white;
  color: #1E88E5;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const FAQSection = styled.div`
  margin-bottom: 64px;
`;

const FAQTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #2D3748;
  margin-bottom: 48px;
  text-align: center;
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FAQItem = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
`;

const FAQQuestion = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #2D3748;
  margin-bottom: 12px;
`;

const FAQAnswer = styled.p`
  font-size: 16px;
  color: #718096;
  line-height: 1.6;
`;

export default PricingPage; 
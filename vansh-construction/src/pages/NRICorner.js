import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGlobe, 
  faHandshake, 
  faFileContract, 
  faMoneyBillWave
} from '@fortawesome/free-solid-svg-icons';

const NRIContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.md};
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg');
  background-size: cover;
  background-position: center;
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xl} 0;
  border-radius: ${props => props.theme.borderRadius.lg};
  margin-bottom: ${props => props.theme.spacing.xl};
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xl};

  h1 {
    font-size: ${props => props.theme.fontSizes['4xl']};
    margin-bottom: ${props => props.theme.spacing.md};
  }

  p {
    font-size: ${props => props.theme.fontSizes.xl};
    opacity: 0.9;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${props => props.theme.spacing.lg};
  margin: ${props => props.theme.spacing.xl} 0;
`;

const ServiceCard = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  transition: ${props => props.theme.transitions.default};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.lg};
  }

  .icon {
    font-size: 2rem;
    color: ${props => props.theme.colors.primary};
    margin-bottom: ${props => props.theme.spacing.md};
  }

  h3 {
    font-size: ${props => props.theme.fontSizes.xl};
    margin-bottom: ${props => props.theme.spacing.sm};
  }

  p {
    color: ${props => props.theme.colors.darkGray};
  }
`;

const InvestmentGuide = styled.section`
  background-color: ${props => props.theme.colors.lightGray};
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.lg};
  margin: ${props => props.theme.spacing.xl} 0;
`;

const GuideGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.lg};
  margin-top: ${props => props.theme.spacing.xl};
`;

const GuideStep = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.sm};

  .step-number {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${props => props.theme.spacing.md};
  }

  h4 {
    font-size: ${props => props.theme.fontSizes.lg};
    margin-bottom: ${props => props.theme.spacing.sm};
  }
`;

const CTASection = styled.section`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.lg};
  text-align: center;
  margin: ${props => props.theme.spacing.xl} 0;

  h2 {
    font-size: ${props => props.theme.fontSizes['3xl']};
    margin-bottom: ${props => props.theme.spacing.md};
  }

  p {
    margin-bottom: ${props => props.theme.spacing.xl};
    font-size: ${props => props.theme.fontSizes.lg};
  }
`;

const CTAButton = styled.button`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: 600;
  cursor: pointer;
  transition: ${props => props.theme.transitions.default};

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};
  }
`;

const FAQSection = styled.section`
  margin: ${props => props.theme.spacing.xl} 0;

  h2 {
    text-align: center;
    margin-bottom: ${props => props.theme.spacing.xl};
    font-size: ${props => props.theme.fontSizes['3xl']};
  }
`;

const FAQGrid = styled.div`
  display: grid;
  gap: ${props => props.theme.spacing.md};
`;

const FAQItem = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.md};
  box-shadow: ${props => props.theme.shadows.sm};

  h3 {
    font-size: ${props => props.theme.fontSizes.lg};
    margin-bottom: ${props => props.theme.spacing.sm};
    color: ${props => props.theme.colors.primary};
  }

  p {
    color: ${props => props.theme.colors.darkGray};
  }
`;

const NRICorner = () => {
  return (
    <NRIContainer>
      <HeroSection>
        <HeroContent>
          <h1>NRI Investment Solutions</h1>
          <p>Your trusted partner for real estate investment in India. Expert guidance, hassle-free process, and premium returns.</p>
        </HeroContent>
      </HeroSection>

      <ServicesGrid>
        <ServiceCard>
          <FontAwesomeIcon icon={faGlobe} className="icon" />
          <h3>Global Investment Support</h3>
          <p>Specialized assistance for NRI investors from any part of the world</p>
        </ServiceCard>
        <ServiceCard>
          <FontAwesomeIcon icon={faHandshake} className="icon" />
          <h3>End-to-End Services</h3>
          <p>Complete support from property selection to documentation and maintenance</p>
        </ServiceCard>
        <ServiceCard>
          <FontAwesomeIcon icon={faFileContract} className="icon" />
          <h3>Legal Assistance</h3>
          <p>Expert legal guidance for smooth and compliant property transactions</p>
        </ServiceCard>
        <ServiceCard>
          <FontAwesomeIcon icon={faMoneyBillWave} className="icon" />
          <h3>Financial Planning</h3>
          <p>Customized financial solutions and NRI home loan assistance</p>
        </ServiceCard>
      </ServicesGrid>

      <InvestmentGuide>
        <h2>NRI Investment Guide</h2>
        <GuideGrid>
          <GuideStep>
            <div className="step-number">1</div>
            <h4>Property Selection</h4>
            <p>Browse through our premium properties and select based on your investment goals</p>
          </GuideStep>
          <GuideStep>
            <div className="step-number">2</div>
            <h4>Documentation</h4>
            <p>We'll guide you through the required documents and legal procedures</p>
          </GuideStep>
          <GuideStep>
            <div className="step-number">3</div>
            <h4>Payment & Transfer</h4>
            <p>Secure payment processing and property transfer through legal channels</p>
          </GuideStep>
          <GuideStep>
            <div className="step-number">4</div>
            <h4>Property Management</h4>
            <p>Optional property management services for rental and maintenance</p>
          </GuideStep>
        </GuideGrid>
      </InvestmentGuide>

      <CTASection>
        <h2>Schedule a Virtual Property Tour</h2>
        <p>Can't visit in person? Take a virtual tour of our properties from anywhere in the world.</p>
        <CTAButton>Book Your Virtual Tour</CTAButton>
      </CTASection>

      <FAQSection>
        <h2>Frequently Asked Questions</h2>
        <FAQGrid>
          <FAQItem>
            <h3>Can NRIs buy property in India?</h3>
            <p>Yes, NRIs can purchase residential or commercial properties in India. However, they cannot buy agricultural land, farmhouses, or plantation properties.</p>
          </FAQItem>
          <FAQItem>
            <h3>What documents are required for NRI property purchase?</h3>
            <p>Required documents include passport copy, visa copy, PAN card, NRE/NRO account details, and photographs. We'll guide you through the complete documentation process.</p>
          </FAQItem>
          <FAQItem>
            <h3>Are there any restrictions on property sale by NRIs?</h3>
            <p>NRIs can sell their property to either an Indian resident or another NRI/PIO. The sale proceeds can be repatriated subject to RBI guidelines.</p>
          </FAQItem>
          <FAQItem>
            <h3>What are the tax implications for NRI property investments?</h3>
            <p>NRIs need to pay property tax, capital gains tax on property sale, and income tax on rental income. We provide complete tax consultation services.</p>
          </FAQItem>
        </FAQGrid>
      </FAQSection>
    </NRIContainer>
  );
};

export default NRICorner;
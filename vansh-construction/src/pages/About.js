import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMedal, 
  faHandshake, 
  faUsers, 
  faHome,
  faCheckCircle 
} from '@fortawesome/free-solid-svg-icons';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.md};
`;

const HeroSection = styled.section`
  text-align: center;
  padding: ${props => props.theme.spacing.xl} 0;
  
  h1 {
    font-size: ${props => props.theme.fontSizes['4xl']};
    margin-bottom: ${props => props.theme.spacing.md};
    color: ${props => props.theme.colors.primary};
  }

  p {
    font-size: ${props => props.theme.fontSizes.lg};
    max-width: 800px;
    margin: 0 auto;
    color: ${props => props.theme.colors.darkGray};
  }
`;

const StatsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${props => props.theme.spacing.lg};
  padding: ${props => props.theme.spacing.xl} 0;
  background-color: ${props => props.theme.colors.lightGray};
  margin: ${props => props.theme.spacing.xl} 0;
  border-radius: ${props => props.theme.borderRadius.lg};
`;

const StatCard = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.lg};

  .icon {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.primary};
    margin-bottom: ${props => props.theme.spacing.sm};
  }

  .number {
    font-size: ${props => props.theme.fontSizes['3xl']};
    font-weight: 700;
    color: ${props => props.theme.colors.secondary};
    margin-bottom: ${props => props.theme.spacing.xs};
  }

  .label {
    color: ${props => props.theme.colors.darkGray};
    font-size: ${props => props.theme.fontSizes.md};
  }
`;

const ContentSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.xl};
  margin: ${props => props.theme.spacing.xl} 0;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const TextContent = styled.div`
  h2 {
    font-size: ${props => props.theme.fontSizes['2xl']};
    color: ${props => props.theme.colors.primary};
    margin-bottom: ${props => props.theme.spacing.md};
  }

  p {
    margin-bottom: ${props => props.theme.spacing.md};
    line-height: 1.6;
  }
`;

const ImageSection = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${props => props.theme.borderRadius.lg};
  }
`;

const ValuesList = styled.ul`
  display: grid;
  gap: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.lg};
`;

const ValueItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.md};
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.borderRadius.md};

  svg {
    color: ${props => props.theme.colors.success};
    font-size: 1.5rem;
  }

  h3 {
    font-size: ${props => props.theme.fontSizes.lg};
    margin-bottom: ${props => props.theme.spacing.xs};
  }

  p {
    margin: 0;
    color: ${props => props.theme.colors.darkGray};
  }
`;

const TeamSection = styled.section`
  margin: ${props => props.theme.spacing.xl} 0;

  h2 {
    text-align: center;
    font-size: ${props => props.theme.fontSizes['3xl']};
    margin-bottom: ${props => props.theme.spacing.xl};
    color: ${props => props.theme.colors.primary};
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.lg};
`;

const TeamMember = styled.div`
  text-align: center;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: ${props => props.theme.spacing.md};
    object-fit: cover;
  }

  h3 {
    font-size: ${props => props.theme.fontSizes.xl};
    margin-bottom: ${props => props.theme.spacing.xs};
  }

  .position {
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
    margin-bottom: ${props => props.theme.spacing.sm};
  }

  p {
    color: ${props => props.theme.colors.darkGray};
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <HeroSection>
        <h1>Building Trust Since 1998</h1>
        <p>
          At Vansh Construction, we believe in creating more than just buildings. 
          We create spaces that inspire, communities that thrive, and relationships that last.
        </p>
      </HeroSection>

      <StatsSection>
        <StatCard>
          <FontAwesomeIcon icon={faHome} className="icon" />
          <div className="number">500+</div>
          <div className="label">Projects Completed</div>
        </StatCard>
        <StatCard>
          <FontAwesomeIcon icon={faUsers} className="icon" />
          <div className="number">10,000+</div>
          <div className="label">Happy Families</div>
        </StatCard>
        <StatCard>
          <FontAwesomeIcon icon={faMedal} className="icon" />
          <div className="number">25+</div>
          <div className="label">Years of Excellence</div>
        </StatCard>
        <StatCard>
          <FontAwesomeIcon icon={faHandshake} className="icon" />
          <div className="number">100%</div>
          <div className="label">Customer Satisfaction</div>
        </StatCard>
      </StatsSection>

      <ContentSection>
        <TextContent>
          <h2>Our Legacy of Excellence</h2>
          <p>
            Founded in 1998, Vansh Construction has grown from a small local builder to one of 
            Mumbai's most trusted real estate developers. Our journey has been marked by an 
            unwavering commitment to quality, innovation, and customer satisfaction.
          </p>
          <p>
            We take pride in our ability to understand the evolving needs of modern homebuyers 
            and deliver properties that exceed expectations. Our projects are thoughtfully 
            designed, meticulously executed, and built to last.
          </p>
          <ValuesList>
            <ValueItem>
              <FontAwesomeIcon icon={faCheckCircle} />
              <div>
                <h3>Quality Assurance</h3>
                <p>Premium materials and superior craftsmanship in every project</p>
              </div>
            </ValueItem>
            <ValueItem>
              <FontAwesomeIcon icon={faCheckCircle} />
              <div>
                <h3>Timely Delivery</h3>
                <p>Consistent track record of on-time project completion</p>
              </div>
            </ValueItem>
            <ValueItem>
              <FontAwesomeIcon icon={faCheckCircle} />
              <div>
                <h3>Transparency</h3>
                <p>Clear communication and ethical business practices</p>
              </div>
            </ValueItem>
          </ValuesList>
        </TextContent>
        <ImageSection>
          <img 
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
            alt="Vansh Construction Project"
          />
        </ImageSection>
      </ContentSection>

      <TeamSection>
        <h2>Leadership Team</h2>
        <TeamGrid>
          <TeamMember>
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
              alt="Rajesh Kumar"
            />
            <h3>Rajesh Kumar</h3>
            <div className="position">Founder & Chairman</div>
            <p>30+ years of experience in real estate development</p>
          </TeamMember>
          <TeamMember>
            <img 
              src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg"
              alt="Priya Sharma"
            />
            <h3>Priya Sharma</h3>
            <div className="position">Managing Director</div>
            <p>Expert in strategic planning and project management</p>
          </TeamMember>
          <TeamMember>
            <img 
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
              alt="Amit Patel"
            />
            <h3>Amit Patel</h3>
            <div className="position">Technical Director</div>
            <p>Specializes in sustainable construction practices</p>
          </TeamMember>
        </TeamGrid>
      </TeamSection>
    </AboutContainer>
  );
};

export default About;
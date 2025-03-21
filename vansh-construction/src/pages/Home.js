import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding, 
  faHandshake, 
  faAward, 
  faChartLine,
  faArrowRight 
} from '@fortawesome/free-solid-svg-icons';

const HeroSection = styled.section`
  height: 80vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${props => props.theme.colors.white};
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: ${props => props.theme.spacing.md};

  h1 {
    font-size: ${props => props.theme.fontSizes['5xl']};
    margin-bottom: ${props => props.theme.spacing.md};
    font-weight: 700;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: ${props => props.theme.fontSizes['3xl']};
    }
  }

  p {
    font-size: ${props => props.theme.fontSizes.xl};
    margin-bottom: ${props => props.theme.spacing.lg};

    @media (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: ${props => props.theme.fontSizes.lg};
    }
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: 600;
  transition: ${props => props.theme.transitions.default};

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const FeaturesSection = styled.section`
  padding: ${props => props.theme.spacing.xl} 0;
  background-color: ${props => props.theme.colors.lightGray};
`;

const FeaturesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.lg};
`;

const FeatureCard = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  text-align: center;
  box-shadow: ${props => props.theme.shadows.md};
  transition: ${props => props.theme.transitions.default};

  &:hover {
    transform: translateY(-5px);
  }

  .icon {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.primary};
    margin-bottom: ${props => props.theme.spacing.md};
  }

  h3 {
    margin-bottom: ${props => props.theme.spacing.sm};
  }
`;

const ProjectsSection = styled.section`
  padding: ${props => props.theme.spacing.xl} 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: ${props => props.theme.fontSizes['3xl']};
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const ProjectsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.lg};
`;

const ProjectCard = styled.div`
  position: relative;
  height: 300px;
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  cursor: pointer;

  &:hover .overlay {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: ${props => props.theme.transitions.default};
    padding: ${props => props.theme.spacing.md};
    color: ${props => props.theme.colors.white};
    text-align: center;
  }
`;

const ViewAllButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  margin: ${props => props.theme.spacing.xl} auto 0;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  background-color: transparent;
  border: 2px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: 600;
  transition: ${props => props.theme.transitions.default};

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
`;

const Home = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <h1>Building Dreams, Creating Homes</h1>
          <p>Experience luxury living with Vansh Construction's premium residential projects</p>
          <CTAButton to="/projects">Explore Our Projects</CTAButton>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <FeaturesGrid>
          <FeatureCard>
            <FontAwesomeIcon icon={faBuilding} className="icon" />
            <h3>Premium Locations</h3>
            <p>Strategic locations with excellent connectivity and amenities</p>
          </FeatureCard>
          <FeatureCard>
            <FontAwesomeIcon icon={faHandshake} className="icon" />
            <h3>Trust & Reliability</h3>
            <p>25+ years of excellence in real estate development</p>
          </FeatureCard>
          <FeatureCard>
            <FontAwesomeIcon icon={faAward} className="icon" />
            <h3>Quality Assurance</h3>
            <p>Built with premium materials and superior craftsmanship</p>
          </FeatureCard>
          <FeatureCard>
            <FontAwesomeIcon icon={faChartLine} className="icon" />
            <h3>Investment Growth</h3>
            <p>Properties with high appreciation potential</p>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      <ProjectsSection>
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectsGrid>
          <ProjectCard>
            <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg" alt="Luxury Apartment" />
            <div className="overlay">
              <h3>The Grand Residences</h3>
              <p>3 & 4 BHK Luxury Apartments</p>
            </div>
          </ProjectCard>
          <ProjectCard>
            <img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg" alt="Villa Project" />
            <div className="overlay">
              <h3>Green Valley Villas</h3>
              <p>Premium Independent Villas</p>
            </div>
          </ProjectCard>
          <ProjectCard>
            <img src="https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg" alt="Township" />
            <div className="overlay">
              <h3>Vansh Township</h3>
              <p>Integrated Township Project</p>
            </div>
          </ProjectCard>
        </ProjectsGrid>
        <ViewAllButton to="/projects">
          View All Projects
          <FontAwesomeIcon icon={faArrowRight} />
        </ViewAllButton>
      </ProjectsSection>
    </>
  );
};

export default Home;
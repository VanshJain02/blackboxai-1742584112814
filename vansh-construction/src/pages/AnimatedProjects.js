import React, { useState } from 'react';
import styled from 'styled-components';
import AnimatedProjectCard from '../components/AnimatedProjectCard';
import { fadeIn, fadeInUp, durations, easings } from '../styles/animations';

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xl};
  animation: ${fadeIn} ${durations.medium} ${easings.easeOut};
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.xl};
`;

const FilterContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  margin-bottom: ${props => props.theme.spacing.xl};
  animation: ${fadeInUp} ${durations.medium} ${easings.easeOut};
`;

const FilterGroup = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  flex-wrap: wrap;
  margin-bottom: ${props => props.theme.spacing.md};
`;

const FilterButton = styled.button`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border: 2px solid ${props => props.active ? props.theme.colors.primary : props.theme.colors.lightGray};
  border-radius: ${props => props.theme.borderRadius.full};
  background-color: ${props => props.active ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.active ? props.theme.colors.white : props.theme.colors.darkGray};
  cursor: pointer;
  transition: all ${durations.medium} ${easings.easeInOut};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.sm};
    border-color: ${props => props.theme.colors.primary};
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.xl};
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  animation: ${fadeIn} ${durations.medium} ${easings.easeOut};
`;

const AnimatedProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects] = useState([
    {
      id: 1,
      title: "Luxury Apartments in Mumbai",
      type: "residential",
      location: "Mumbai",
      price: 25000000,
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
    },
    {
      id: 2,
      title: "Premium Villas",
      type: "villa",
      location: "Thane",
      price: 45000000,
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
    },
    {
      id: 3,
      title: "Commercial Complex",
      type: "commercial",
      location: "Mumbai",
      price: 75000000,
      image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg"
    }
  ]);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'villa', label: 'Villas' },
    { id: 'commercial', label: 'Commercial' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.type === activeFilter);

  return (
    <ProjectsContainer>
      <FilterContainer>
        <FilterGroup>
          {filters.map(filter => (
            <FilterButton
              key={filter.id}
              active={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </FilterButton>
          ))}
        </FilterGroup>
      </FilterContainer>

      {filteredProjects.length > 0 ? (
        <ProjectsGrid>
          {filteredProjects.map(project => (
            <AnimatedProjectCard key={project.id} project={project} />
          ))}
        </ProjectsGrid>
      ) : (
        <NoResults>
          <h3>No projects found</h3>
          <p>Try selecting a different filter.</p>
        </NoResults>
      )}
    </ProjectsContainer>
  );
};

export default AnimatedProjects;
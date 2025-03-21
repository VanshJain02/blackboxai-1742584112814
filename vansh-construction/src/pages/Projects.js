import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import ProjectFilters from '../components/ProjectFilters';
import ProjectCard from '../components/ProjectCard';

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.md};
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.lg};
`;

const MobileFilterButton = styled.button`
  display: none;
  position: fixed;
  bottom: ${props => props.theme.spacing.lg};
  right: ${props => props.theme.spacing.lg};
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.full};
  border: none;
  box-shadow: ${props => props.theme.shadows.lg};
  z-index: 999;
  cursor: pointer;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    display: flex;
    align-items: center;
    gap: ${props => props.theme.spacing.sm};
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.darkGray};
  font-size: ${props => props.theme.fontSizes.lg};
`;

const Projects = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    propertyType: {
      apartments: false,
      villas: false,
      plots: false
    },
    location: {
      mumbai: false,
      thane: false,
      naviMumbai: false
    }
  });
  const [priceRange, setPriceRange] = useState(10000000);

  // Sample project data
  const [projects] = useState([
    {
      id: 1,
      title: "The Grand Residences",
      type: "apartments",
      location: "mumbai",
      price: 15000000,
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
    },
    {
      id: 2,
      title: "Luxury Villas",
      type: "villas",
      location: "thane",
      price: 25000000,
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
    },
    {
      id: 3,
      title: "Premium Plots",
      type: "plots",
      location: "naviMumbai",
      price: 8000000,
      image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg"
    },
    {
      id: 4,
      title: "Seaside Apartments",
      type: "apartments",
      location: "mumbai",
      price: 20000000,
      image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg"
    },
    {
      id: 5,
      title: "Green Valley Villas",
      type: "villas",
      location: "thane",
      price: 30000000,
      image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg"
    }
  ]);

  const handleFilterChange = (category, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [value]: !prev[category][value]
      }
    }));
  };

  const handlePriceChange = (e) => {
    setPriceRange(Number(e.target.value));
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const filteredProjects = projects.filter(project => {
    // Check if any property type is selected
    const propertyTypeSelected = Object.values(filters.propertyType).some(value => value);
    const locationSelected = Object.values(filters.location).some(value => value);

    // If no filters are selected in a category, don't filter by that category
    const matchesPropertyType = !propertyTypeSelected || filters.propertyType[project.type];
    const matchesLocation = !locationSelected || filters.location[project.location];
    const matchesPrice = project.price <= priceRange;

    return matchesPropertyType && matchesLocation && matchesPrice;
  });

  return (
    <ProjectsContainer>
      <ProjectFilters 
        filters={filters}
        priceRange={priceRange}
        onFilterChange={handleFilterChange}
        onPriceChange={handlePriceChange}
        $isFilterOpen={isFilterOpen}
      />

      <div>
        <ProjectsGrid>
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <NoResults>No projects match your selected filters</NoResults>
          )}
        </ProjectsGrid>
      </div>

      <MobileFilterButton onClick={toggleFilter}>
        <FontAwesomeIcon icon={faFilter} />
        Filters
      </MobileFilterButton>
    </ProjectsContainer>
  );
};

export default Projects;
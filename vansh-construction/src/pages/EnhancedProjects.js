import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedProjectCard from '../components/AnimatedProjectCard';
import AnimatedButton from '../components/AnimatedButton';
import { fadeIn, fadeInUp, durations, easings } from '../styles/animations';

const ProjectsContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xl};
`;

const FilterSection = styled(motion.div)`
  background-color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const FilterGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const FilterTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.fontSizes.lg};
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xl};
`;

const RangeSlider = styled.input`
  width: 100%;
  margin: ${props => props.theme.spacing.md} 0;
  -webkit-appearance: none;
  background: ${props => props.theme.colors.lightGray};
  height: 4px;
  border-radius: 2px;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: ${props => props.theme.colors.primary};
    border-radius: 50%;
    cursor: pointer;
    transition: all ${durations.fast} ${easings.easeInOut};

    &:hover {
      transform: scale(1.2);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  }
`;

const PriceRange = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.darkGray};
  font-size: ${props => props.theme.fontSizes.md};
  margin-top: ${props => props.theme.spacing.sm};
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const EnhancedProjects = () => {
  const [filters, setFilters] = useState({
    type: 'all',
    location: 'all',
    maxPrice: 10.0
  });

  const [projects] = useState([
    {
      id: 1,
      title: "Luxury Apartments in Mumbai",
      type: "residential",
      location: "Mumbai",
      price: 2.5,
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
    },
    {
      id: 2,
      title: "Premium Villas",
      type: "villa",
      location: "Thane",
      price: 4.5,
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
    },
    {
      id: 3,
      title: "Commercial Complex",
      type: "commercial",
      location: "Mumbai",
      price: 7.5,
      image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg"
    }
  ]);

  const handleFilterChange = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const filteredProjects = projects.filter(project => {
    return (
      (filters.type === 'all' || project.type === filters.type) &&
      (filters.location === 'all' || project.location === filters.location) &&
      project.price <= filters.maxPrice
    );
  });

  return (
    <ProjectsContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <FilterSection
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FilterTitle>Property Type</FilterTitle>
        <FilterGroup>
          {['all', 'residential', 'villa', 'commercial'].map(type => (
            <AnimatedButton
              key={type}
              variant={filters.type === type ? 'primary' : 'outline'}
              onClick={() => handleFilterChange('type', type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </AnimatedButton>
          ))}
        </FilterGroup>

        <FilterTitle>Location</FilterTitle>
        <FilterGroup>
          {['all', 'Mumbai', 'Thane', 'Navi Mumbai'].map(location => (
            <AnimatedButton
              key={location}
              variant={filters.location === location ? 'primary' : 'outline'}
              onClick={() => handleFilterChange('location', location)}
            >
              {location}
            </AnimatedButton>
          ))}
        </FilterGroup>

        <FilterTitle>Budget (Cr)</FilterTitle>
        <RangeSlider
          type="range"
          min="1"
          max="10"
          step="0.5"
          value={filters.maxPrice}
          onChange={(e) => handleFilterChange('maxPrice', parseFloat(e.target.value))}
        />
        <PriceRange>Up to ₹{filters.maxPrice} Cr</PriceRange>
      </FilterSection>

      <AnimatePresence mode="wait">
        <ProjectsGrid variants={containerVariants}>
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatedProjectCard project={project} />
            </motion.div>
          ))}
        </ProjectsGrid>
      </AnimatePresence>
    </ProjectsContainer>
  );
};

export default EnhancedProjects;
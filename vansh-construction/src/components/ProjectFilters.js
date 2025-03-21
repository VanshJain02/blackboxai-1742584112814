import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding, 
  faRupeeSign, 
  faMapMarkerAlt 
} from '@fortawesome/free-solid-svg-icons';

const FilterSidebar = styled.aside`
  background-color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
  height: fit-content;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    position: ${props => props.$isFilterOpen ? 'fixed' : 'static'};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    overflow-y: auto;
  }
`;

const FilterSection = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};

  h3 {
    font-size: ${props => props.theme.fontSizes.lg};
    margin-bottom: ${props => props.theme.spacing.md};
    display: flex;
    align-items: center;
    gap: ${props => props.theme.spacing.sm};
  }
`;

const FilterOption = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.sm};

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  label {
    flex: 1;
    cursor: pointer;
  }
`;

const PriceRange = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};

  input[type="range"] {
    width: 100%;
    cursor: pointer;
  }
`;

const ProjectFilters = ({ 
  filters, 
  priceRange, 
  onFilterChange, 
  onPriceChange,
  $isFilterOpen 
}) => {
  return (
    <FilterSidebar $isFilterOpen={$isFilterOpen}>
      <FilterSection>
        <h3>
          <FontAwesomeIcon icon={faBuilding} />
          Property Type
        </h3>
        <FilterOption>
          <input 
            type="checkbox" 
            id="apartments"
            checked={filters.propertyType.apartments}
            onChange={() => onFilterChange('propertyType', 'apartments')}
          />
          <label htmlFor="apartments">Apartments</label>
        </FilterOption>
        <FilterOption>
          <input 
            type="checkbox" 
            id="villas"
            checked={filters.propertyType.villas}
            onChange={() => onFilterChange('propertyType', 'villas')}
          />
          <label htmlFor="villas">Villas</label>
        </FilterOption>
        <FilterOption>
          <input 
            type="checkbox" 
            id="plots"
            checked={filters.propertyType.plots}
            onChange={() => onFilterChange('propertyType', 'plots')}
          />
          <label htmlFor="plots">Plots</label>
        </FilterOption>
      </FilterSection>

      <FilterSection>
        <h3>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          Location
        </h3>
        <FilterOption>
          <input 
            type="checkbox" 
            id="mumbai"
            checked={filters.location.mumbai}
            onChange={() => onFilterChange('location', 'mumbai')}
          />
          <label htmlFor="mumbai">Mumbai</label>
        </FilterOption>
        <FilterOption>
          <input 
            type="checkbox" 
            id="thane"
            checked={filters.location.thane}
            onChange={() => onFilterChange('location', 'thane')}
          />
          <label htmlFor="thane">Thane</label>
        </FilterOption>
        <FilterOption>
          <input 
            type="checkbox" 
            id="naviMumbai"
            checked={filters.location.naviMumbai}
            onChange={() => onFilterChange('location', 'naviMumbai')}
          />
          <label htmlFor="naviMumbai">Navi Mumbai</label>
        </FilterOption>
      </FilterSection>

      <FilterSection>
        <h3>
          <FontAwesomeIcon icon={faRupeeSign} />
          Budget
        </h3>
        <PriceRange>
          <input 
            type="range" 
            min="1000000" 
            max="50000000" 
            value={priceRange}
            onChange={onPriceChange}
          />
          <div>Up to ₹{(priceRange / 10000000).toFixed(1)} Cr</div>
        </PriceRange>
      </FilterSection>
    </FilterSidebar>
  );
};

export default ProjectFilters;
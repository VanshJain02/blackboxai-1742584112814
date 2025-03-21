import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Card = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.md};
  transition: ${props => props.theme.transitions.default};
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const Image = styled.div`
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const Info = styled.div`
  padding: ${props => props.theme.spacing.lg};

  h3 {
    margin-bottom: ${props => props.theme.spacing.sm};
    font-size: ${props => props.theme.fontSizes.xl};
    color: ${props => props.theme.colors.primary};
  }
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.darkGray};
  font-size: ${props => props.theme.fontSizes.sm};

  svg {
    color: ${props => props.theme.colors.primary};
  }
`;

const Price = styled.div`
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
  margin-top: ${props => props.theme.spacing.md};
`;

const Badge = styled.div`
  display: inline-block;
  background-color: ${props => props.theme.colors.success};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius.sm};
  font-size: ${props => props.theme.fontSizes.sm};
  margin-top: ${props => props.theme.spacing.sm};
`;

const ProjectCard = ({ project }) => {
  const formatLocation = (location) => {
    return location.charAt(0).toUpperCase() + location.slice(1).replace(/([A-Z])/g, ' $1');
  };

  const formatType = (type) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
    <Card>
      <Image>
        <img src={project.image} alt={project.title} />
      </Image>
      <Info>
        <h3>{project.title}</h3>
        <Meta>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>{formatLocation(project.location)}</span>
        </Meta>
        <Meta>
          <FontAwesomeIcon icon={faBuilding} />
          <span>{formatType(project.type)}</span>
        </Meta>
        <Price>Starting ₹{(project.price / 10000000).toFixed(1)} Cr*</Price>
        <Badge>RERA Registered</Badge>
      </Info>
    </Card>
  );
};

export default ProjectCard;
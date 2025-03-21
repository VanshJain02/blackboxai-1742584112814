import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { fadeInUp, scaleIn, durations, easings } from '../styles/animations';

const Card = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.md};
  transition: all ${durations.medium} ${easings.easeInOut};
  animation: ${fadeInUp} ${durations.medium} ${easings.easeOut};
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const Image = styled.div`
  height: 250px;
  overflow: hidden;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.2) 100%);
    opacity: 0;
    transition: opacity ${durations.medium} ${easings.easeInOut};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${durations.slow} ${easings.easeInOut};
  }

  ${Card}:hover & {
    &:after {
      opacity: 1;
    }

    img {
      transform: scale(1.1);
    }
  }
`;

const Content = styled.div`
  padding: ${props => props.theme.spacing.xl};
  animation: ${scaleIn} ${durations.medium} ${easings.easeOut};
`;

const Title = styled.h3`
  margin: 0;
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.xl};
  transition: color ${durations.fast} ${easings.easeInOut};

  ${Card}:hover & {
    color: ${props => props.theme.colors.primaryDark};
  }
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.darkGray};
  font-size: ${props => props.theme.fontSizes.sm};

  svg {
    color: ${props => props.theme.colors.primary};
    transition: transform ${durations.fast} ${easings.bounce};
  }

  ${Card}:hover & svg {
    transform: scale(1.2);
  }
`;

const Price = styled.div`
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
  margin-top: ${props => props.theme.spacing.md};
  transition: all ${durations.medium} ${easings.easeInOut};

  ${Card}:hover & {
    transform: scale(1.05);
    color: ${props => props.theme.colors.primaryDark};
  }
`;

const Badge = styled.span`
  display: inline-block;
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  background-color: ${props => props.theme.colors.success};
  color: white;
  border-radius: ${props => props.theme.borderRadius.sm};
  font-size: ${props => props.theme.fontSizes.sm};
  margin-top: ${props => props.theme.spacing.sm};
  transition: all ${durations.medium} ${easings.easeInOut};

  ${Card}:hover & {
    transform: translateX(5px);
  }
`;

const AnimatedProjectCard = ({ project }) => {
  return (
    <Card>
      <Image>
        <img src={project.image} alt={project.title} />
      </Image>
      <Content>
        <Title>{project.title}</Title>
        <Meta>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span>{project.location}</span>
        </Meta>
        <Meta>
          <FontAwesomeIcon icon={faBuilding} />
          <span>{project.type}</span>
        </Meta>
        <Price>Starting ₹{(project.price / 10000000).toFixed(1)} Cr*</Price>
        <Badge>RERA Registered</Badge>
      </Content>
    </Card>
  );
};

export default AnimatedProjectCard;
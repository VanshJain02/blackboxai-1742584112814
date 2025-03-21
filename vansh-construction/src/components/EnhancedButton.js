import React from 'react';
import styled, { keyframes } from 'styled-components';
import { durations, easings } from '../styles/animations';

const ripple = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const ButtonWrapper = styled.button`
  position: relative;
  overflow: hidden;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  border: none;
  border-radius: ${props => props.theme.borderRadius.md};
  background-color: ${props => props.$variant === 'primary' 
    ? props.theme.colors.primary 
    : props.$variant === 'secondary'
    ? props.theme.colors.secondary
    : 'transparent'};
  color: ${props => props.$variant === 'outline' 
    ? props.theme.colors.primary 
    : props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: 600;
  cursor: pointer;
  transition: all ${durations.medium} ${easings.easeInOut};
  border: 2px solid ${props => props.$variant === 'outline' 
    ? props.theme.colors.primary 
    : 'transparent'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: ${props => props.$variant === 'primary' 
      ? props.theme.colors.primaryDark 
      : props.$variant === 'secondary'
      ? props.theme.colors.secondaryDark
      : props.theme.colors.lightBlue};
  }

  &:active {
    transform: translateY(1px);
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primary}40;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  ${props => props.$isLoading && `
    cursor: wait;
    opacity: 0.8;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      margin: -10px 0 0 -10px;
      border: 2px solid transparent;
      border-top-color: currentColor;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
  `}
`;

const RippleEffect = styled.span`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transform: scale(0);
  animation: ${ripple} 0.6s linear;
  pointer-events: none;
`;

const EnhancedButton = ({ 
  children, 
  variant = 'primary', 
  isLoading = false, 
  disabled = false,
  onClick,
  type = 'button',
  ...props 
}) => {
  const [coords, setCoords] = React.useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = React.useState(false);

  React.useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 600);
    } else {
      setIsRippling(false);
    }
  }, [coords]);

  React.useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    if (onClick) onClick(e);
  };

  return (
    <ButtonWrapper
      $variant={variant}
      $isLoading={isLoading}
      disabled={disabled || isLoading}
      onClick={handleClick}
      type={type}
      {...props}
    >
      {isRippling && (
        <RippleEffect
          style={{
            left: coords.x,
            top: coords.y
          }}
        />
      )}
      {children}
    </ButtonWrapper>
  );
};

export default EnhancedButton;
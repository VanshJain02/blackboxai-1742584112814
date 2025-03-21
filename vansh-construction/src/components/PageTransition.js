import React from 'react';
import styled, { keyframes } from 'styled-components';
import { durations, easings } from '../styles/animations';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

const PageWrapper = styled.div`
  animation: ${props => props.isExiting ? fadeOut : fadeIn} ${durations.medium} ${easings.easeInOut};
  min-height: 100vh;
  width: 100%;
  position: relative;

  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.colors.background};
    z-index: -1;
  }
`;

const ContentWrapper = styled.div`
  opacity: ${props => props.isVisible ? 1 : 0};
  transition: opacity ${durations.medium} ${easings.easeInOut};
`;

const PageTransition = ({ children, isExiting = false }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    // Delay showing content to allow for page transition
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageWrapper isExiting={isExiting}>
      <ContentWrapper isVisible={isVisible}>
        {children}
      </ContentWrapper>
    </PageWrapper>
  );
};

// Higher Order Component for easy wrapping
export const withPageTransition = (WrappedComponent) => {
  return function WithPageTransition(props) {
    return (
      <PageTransition>
        <WrappedComponent {...props} />
      </PageTransition>
    );
  };
};

export default PageTransition;
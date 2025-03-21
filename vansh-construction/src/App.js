import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import theme from './theme';
import GlobalStyle from './GlobalStyle';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const Projects = React.lazy(() => import('./pages/Projects'));
const About = React.lazy(() => import('./pages/About'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Contact = React.lazy(() => import('./pages/Contact'));
const NRICorner = React.lazy(() => import('./pages/NRICorner'));

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  margin-top: 80px; // Height of the navigation bar
  padding-bottom: ${props => props.theme.spacing.xl};
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.primary};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AppWrapper>
          <Navigation />
          <MainContent>
            <Suspense fallback={<LoadingSpinner>Loading...</LoadingSpinner>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/nri" element={<NRICorner />} />
              </Routes>
            </Suspense>
          </MainContent>
          <Footer />
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;

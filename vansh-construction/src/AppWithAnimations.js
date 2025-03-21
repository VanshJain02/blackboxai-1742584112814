import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from './GlobalStyle';
import theme from './theme';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import EnhancedProjects from './pages/EnhancedProjects';
import About from './pages/About';
import BlogPage from './pages/BlogPage';
import Contact from './pages/Contact';
import NRICorner from './pages/NRICorner';
import PageTransition from './components/PageTransition';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <PageTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<EnhancedProjects />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/nri-corner" element={<NRICorner />} />
        </Routes>
      </PageTransition>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navigation />
          <main style={{ flex: 1 }}>
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
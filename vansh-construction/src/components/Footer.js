import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn, 
  faWhatsapp 
} from '@fortawesome/free-brands-svg-icons';

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xl} 0;
  margin-top: auto;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.xl};
`;

const FooterSection = styled.div`
  h3 {
    font-size: ${props => props.theme.fontSizes.lg};
    margin-bottom: ${props => props.theme.spacing.md};
    color: ${props => props.theme.colors.white};
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};

  a {
    color: ${props => props.theme.colors.white};
    display: flex;
    align-items: center;
    gap: ${props => props.theme.spacing.sm};
    
    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};

  a {
    color: ${props => props.theme.colors.white};
    transition: ${props => props.theme.transitions.default};

    &:hover {
      color: ${props => props.theme.colors.secondary};
      padding-left: ${props => props.theme.spacing.sm};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.sm};
  margin-top: ${props => props.theme.spacing.md};

  a {
    color: ${props => props.theme.colors.white};
    background-color: rgba(255, 255, 255, 0.1);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ${props => props.theme.transitions.default};

    &:hover {
      background-color: ${props => props.theme.colors.secondary};
      transform: translateY(-3px);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.xl};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: ${props => props.theme.fontSizes.sm};
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterSection>
          <h3>Contact Us</h3>
          <ContactInfo>
            <a href="tel:+919876543210">
              <FontAwesomeIcon icon={faPhone} />
              +91 98765 43210
            </a>
            <a href="mailto:info@vanshconstruction.com">
              <FontAwesomeIcon icon={faEnvelope} />
              info@vanshconstruction.com
            </a>
            <a href="https://goo.gl/maps" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              123 Construction Avenue, Mumbai, India
            </a>
          </ContactInfo>
          <SocialLinks>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Quick Links</h3>
          <QuickLinks>
            <Link to="/about">About Us</Link>
            <Link to="/projects">Our Projects</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/nri">NRI Corner</Link>
          </QuickLinks>
        </FooterSection>

        <FooterSection>
          <h3>Legal</h3>
          <QuickLinks>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/disclaimer">Disclaimer</Link>
            <Link to="/rera">RERA Information</Link>
          </QuickLinks>
        </FooterSection>

        <FooterSection>
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for updates on new projects and exclusive offers.</p>
          {/* Newsletter form to be added later */}
        </FooterSection>
      </FooterContainer>

      <Copyright>
        <div className="container">
          © {new Date().getFullYear()} Vansh Construction. All rights reserved.
        </div>
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;
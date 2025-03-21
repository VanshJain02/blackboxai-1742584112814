import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt,
  faClock 
} from '@fortawesome/free-solid-svg-icons';
import ContactForm from '../components/ContactForm';

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xl};
`;

const ContactHero = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xxl};

  h1 {
    font-size: ${props => props.theme.fontSizes.xxxl};
    color: ${props => props.theme.colors.primary};
    margin-bottom: ${props => props.theme.spacing.md};
  }

  p {
    font-size: ${props => props.theme.fontSizes.lg};
    color: ${props => props.theme.colors.darkGray};
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: grid;
  gap: ${props => props.theme.spacing.lg};
`;

const InfoCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${props => props.theme.spacing.lg};
  padding: ${props => props.theme.spacing.lg};
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};

  .icon {
    font-size: ${props => props.theme.fontSizes.xl};
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.lightBlue};
    padding: ${props => props.theme.spacing.md};
    border-radius: ${props => props.theme.borderRadius.full};
  }

  .content {
    flex: 1;

    h3 {
      font-size: ${props => props.theme.fontSizes.lg};
      margin-bottom: ${props => props.theme.spacing.sm};
      color: ${props => props.theme.colors.primary};
    }

    p {
      color: ${props => props.theme.colors.darkGray};
      margin-bottom: ${props => props.theme.spacing.xs};
    }

    a {
      color: ${props => props.theme.colors.darkGray};
      text-decoration: none;
      transition: ${props => props.theme.transitions.default};

      &:hover {
        color: ${props => props.theme.colors.primary};
      }
    }
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactHero>
        <h1>Get in Touch</h1>
        <p>
          Have questions about our projects? Looking to invest in real estate? 
          Our team is here to help you make the right choice.
        </p>
      </ContactHero>

      <ContactGrid>
        <ContactForm />

        <ContactInfo>
          <InfoCard>
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <div className="content">
              <h3>Phone</h3>
              <p><a href="tel:+919876543210">+91 98765 43210</a></p>
              <p><a href="tel:+919876543211">+91 98765 43211</a></p>
            </div>
          </InfoCard>

          <InfoCard>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <div className="content">
              <h3>Email</h3>
              <p><a href="mailto:info@vanshconstruction.com">info@vanshconstruction.com</a></p>
              <p><a href="mailto:sales@vanshconstruction.com">sales@vanshconstruction.com</a></p>
            </div>
          </InfoCard>

          <InfoCard>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
            <div className="content">
              <h3>Office Address</h3>
              <p>
                123 Construction Avenue,<br />
                Andheri West, Mumbai - 400053,<br />
                Maharashtra, India
              </p>
            </div>
          </InfoCard>

          <InfoCard>
            <FontAwesomeIcon icon={faClock} className="icon" />
            <div className="content">
              <h3>Business Hours</h3>
              <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
              <p>Sunday: 10:00 AM - 2:00 PM</p>
            </div>
          </InfoCard>
        </ContactInfo>
      </ContactGrid>
    </ContactContainer>
  );
};

export default Contact;
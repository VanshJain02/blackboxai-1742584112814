import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Form = styled.form`
  background-color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
`;

const FormGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};

  label {
    display: block;
    margin-bottom: ${props => props.theme.spacing.sm};
    color: ${props => props.theme.colors.darkGray};
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: ${props => props.theme.spacing.md};
    border: 1px solid ${props => props.theme.colors.lightGray};
    border-radius: ${props => props.theme.borderRadius.sm};
    font-size: ${props => props.theme.fontSizes.md};

    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.primary};
    }
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }

  .error {
    color: ${props => props.theme.colors.error};
    font-size: ${props => props.theme.fontSizes.sm};
    margin-top: ${props => props.theme.spacing.xs};
  }
`;

const SubmitButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  border: none;
  border-radius: ${props => props.theme.borderRadius.sm};
  font-size: ${props => props.theme.fontSizes.md};
  cursor: pointer;
  transition: ${props => props.theme.transitions.default};
  width: 100%;

  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
  }

  &:disabled {
    background-color: ${props => props.theme.colors.lightGray};
    cursor: not-allowed;
  }
`;

const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  background-color: #25D366;
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.sm};
  text-decoration: none;
  margin-top: ${props => props.theme.spacing.md};
  transition: ${props => props.theme.transitions.default};

  &:hover {
    background-color: #128C7E;
  }
`;

const SuccessMessage = styled.div`
  background-color: ${props => props.theme.colors.success};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.sm};
  margin-top: ${props => props.theme.spacing.md};
  text-align: center;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectInterest: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.projectInterest) {
      newErrors.projectInterest = 'Please select a project type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Here you would typically send the data to your backend
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectInterest: '',
          message: ''
        });
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors(prev => ({
          ...prev,
          submit: 'Failed to submit form. Please try again.'
        }));
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <label htmlFor="name">Full Name*</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
        />
        {errors.name && <div className="error">{errors.name}</div>}
      </FormGroup>

      <FormGroup>
        <label htmlFor="email">Email Address*</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </FormGroup>

      <FormGroup>
        <label htmlFor="phone">Phone Number*</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />
        {errors.phone && <div className="error">{errors.phone}</div>}
      </FormGroup>

      <FormGroup>
        <label htmlFor="projectInterest">Interested In*</label>
        <select
          id="projectInterest"
          name="projectInterest"
          value={formData.projectInterest}
          onChange={handleChange}
        >
          <option value="">Select a Project Type</option>
          <option value="residential">Residential Apartments</option>
          <option value="villa">Luxury Villas</option>
          <option value="plot">Premium Plots</option>
          <option value="commercial">Commercial Spaces</option>
        </select>
        {errors.projectInterest && <div className="error">{errors.projectInterest}</div>}
      </FormGroup>

      <FormGroup>
        <label htmlFor="message">Message*</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your requirements"
        />
        {errors.message && <div className="error">{errors.message}</div>}
      </FormGroup>

      <SubmitButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </SubmitButton>

      {errors.submit && <div className="error">{errors.submit}</div>}

      {isSubmitted && (
        <SuccessMessage>
          Thank you for contacting us! We'll get back to you shortly.
        </SuccessMessage>
      )}

      <WhatsAppButton 
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
        Chat on WhatsApp
      </WhatsAppButton>
    </Form>
  );
};

export default ContactForm;
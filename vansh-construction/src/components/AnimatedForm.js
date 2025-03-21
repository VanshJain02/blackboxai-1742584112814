import React from 'react';
import styled, { keyframes } from 'styled-components';
import AnimatedButton from './AnimatedButton';
import { fadeInUp, durations, easings } from '../styles/animations';

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FormContainer = styled.div`
  animation: ${fadeInUp} ${durations.medium} ${easings.easeOut};
  max-width: 600px;
  margin: 0 auto;
`;

const StyledForm = styled.form`
  background-color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
`;

const FormGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
  opacity: 0;
  animation: ${fadeInUp} ${durations.medium} ${easings.easeOut} forwards;
  animation-delay: ${props => props.index * 0.1}s;
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.darkGray};
  font-weight: 500;
  transform-origin: left;
  transition: all ${durations.fast} ${easings.easeInOut};

  ${props => props.$focused && `
    color: ${props.theme.colors.primary};
    transform: scale(0.95);
  `}
`;

const Input = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing.md};
  border: 2px solid ${props => props.$focused 
    ? props.theme.colors.primary 
    : props.theme.colors.lightGray};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.fontSizes.md};
  transition: all ${durations.medium} ${easings.easeInOut};
  background-color: ${props => props.$focused 
    ? props.theme.colors.lightBlue 
    : props.theme.colors.white};

  &:hover {
    border-color: ${props => props.theme.colors.primary}80;
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primary}20;
  }
`;

const TextArea = styled(Input).attrs({ as: 'textarea' })`
  min-height: 120px;
  resize: vertical;
`;

const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.error};
  font-size: ${props => props.theme.fontSizes.sm};
  margin-top: ${props => props.theme.spacing.xs};
  animation: ${slideDown} ${durations.fast} ${easings.easeOut};
`;

const SuccessMessage = styled.div`
  background-color: ${props => props.theme.colors.success};
  color: white;
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.md};
  margin-top: ${props => props.theme.spacing.md};
  animation: ${slideDown} ${durations.medium} ${easings.easeOut};
  text-align: center;
`;

const AnimatedForm = ({ onSubmit, initialValues = {}, validationSchema }) => {
  const [values, setValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState({});
  const [focused, setFocused] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleFocus = (name) => {
    setFocused(prev => ({ ...prev, [name]: true }));
  };

  const handleBlur = (name) => {
    setFocused(prev => ({ ...prev, [name]: false }));
    if (validationSchema) {
      validateField(name, values[name]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateField = (name, value) => {
    try {
      validationSchema.validateSyncAt(name, { [name]: value });
      setErrors(prev => ({ ...prev, [name]: '' }));
      return true;
    } catch (error) {
      setErrors(prev => ({ ...prev, [name]: error.message }));
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validationSchema) {
      try {
        await validationSchema.validate(values, { abortEarly: false });
      } catch (error) {
        const validationErrors = {};
        error.inner.forEach(err => {
          validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
        return;
      }
    }

    setIsSubmitting(true);
    try {
      await onSubmit(values);
      setIsSubmitted(true);
      setValues(initialValues);
      setErrors({});
    } catch (error) {
      setErrors(prev => ({
        ...prev,
        submit: error.message || 'Something went wrong. Please try again.'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <FormGroup index={0}>
          <Label $focused={focused.name}>Name</Label>
          <Input
            type="text"
            name="name"
            value={values.name || ''}
            onChange={handleChange}
            onFocus={() => handleFocus('name')}
            onBlur={() => handleBlur('name')}
            $focused={focused.name}
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </FormGroup>

        <FormGroup index={1}>
          <Label $focused={focused.email}>Email</Label>
          <Input
            type="email"
            name="email"
            value={values.email || ''}
            onChange={handleChange}
            onFocus={() => handleFocus('email')}
            onBlur={() => handleBlur('email')}
            $focused={focused.email}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormGroup>

        <FormGroup index={2}>
          <Label $focused={focused.message}>Message</Label>
          <TextArea
            name="message"
            value={values.message || ''}
            onChange={handleChange}
            onFocus={() => handleFocus('message')}
            onBlur={() => handleBlur('message')}
            $focused={focused.message}
          />
          {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup index={3}>
          <AnimatedButton
            type="submit"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </AnimatedButton>
        </FormGroup>

        {errors.submit && <ErrorMessage>{errors.submit}</ErrorMessage>}
        {isSubmitted && (
          <SuccessMessage>
            Thank you! Your message has been sent successfully.
          </SuccessMessage>
        )}
      </StyledForm>
    </FormContainer>
  );
};

export default AnimatedForm;
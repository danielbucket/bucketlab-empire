
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth.js';
import { FormStyle, FormContainerStyle } from './index.style.js';
import { VALIDATION_RULES } from './validationRules.js';

const API_URL = import.meta.env.DEV
  ? 'https://dev.bucketlab.io'
  : 'https://api.bucketlab.io';




const NewLoginForm = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setToken, setUserData } = useAuth();

  // Async submit handler
  const submitForm = async (values) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/auth/accounts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });
      const data = await response.json();
      if (!response.ok || data.status !== 'success') {
        setError(data.message || 'Registration failed. Please try again.');
        return;
      }
      if (data.token) setToken(data.token);
      if (data.user) setUserData(data.user);
      // After successful registration, navigate to login and pass email
      if (values.email) {
        navigate('/auth/login', { state: { email: values.email } });
      } else {
        navigate('/auth/login');
      }
    } catch (err) {
      let errorMessage = 'Network error. Please check your connection and try again.';
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        errorMessage = 'Unable to connect to the server. Please check your internet connection.';
      } else if (err.message.includes('CORS')) {
        errorMessage = 'Server configuration error. Please contact support if this persists.';
      }
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Cancel handler
  const handleCancel = () => {
    navigate('/auth/login');
  };

  // Form field component
  const FormField = ({ label, name, type = 'text', validation, placeholder }) => (
    <div className='form-field'>
      <div>
        <label htmlFor={name}>{label}</label>
        {errors[name] && <p>{errors[name].message}</p>}
      </div>
      <input
        id={name}
        type={type}
        {...register(name, validation)}
        placeholder={placeholder}
        disabled={isLoading}
      />
    </div>
  );

  return (
    <FormContainerStyle>
      <FormStyle onSubmit={handleSubmit(submitForm)}>
        {error && (
          <div className='error-message'>
            <p>{error}</p>
          </div>
        )}
        <div className='fields-container'>
          <FormField label="First Name" name="first_name" validation={VALIDATION_RULES.firstName} placeholder="First Name" />
          <FormField label="Last Name" name="last_name" validation={VALIDATION_RULES.lastName} placeholder="Last Name" />
          <FormField label="Email" name="email" type="email" validation={VALIDATION_RULES.email} placeholder="Email" />
          <FormField label="Password" name="password" type="password" validation={VALIDATION_RULES.password} placeholder="Password" />
        </div>
        <div className='submit-btns'>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Creating Account...' : 'Submit'}
          </button>
          <button type="button" onClick={handleCancel} disabled={isLoading}>
            Cancel
          </button>
        </div>
      </FormStyle>
    </FormContainerStyle>
  );
};

export default NewLoginForm;
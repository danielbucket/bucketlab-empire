import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth.js';
import { FormStyle, FormContainerStyle } from './index.style.js';

const apiUrl = import.meta.env.DEV ? import.meta.env.VITE_DEV_API_URL : import.meta.env.VITE_PROD_API_URL;

// Validation rules constants
const VALIDATION_RULES = {
  firstName: {
    required: 'First Name is required',
    maxLength: {
      value: 20,
      message: 'First Name must be less than 20 characters.'
    }
  },
  lastName: {
    required: 'Last Name is required',
    maxLength: {
      value: 20,
      message: 'Last Name must be less than 20 characters.'
    }
  },
  email: {
    required: 'An email is required',
    pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: 'Please enter a valid email.'
    }
  },
  password: {
    required: 'Password is required',
    minLength: {
      value: 6,
      message: 'Password must be at least 6 characters.'
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
      message: 'Password must contain at least one uppercase letter, one lowercase letter, and one number.'
    }
  }
};

function NewLoginForm() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setToken, setUserData } = useAuth();

  const submitForm = useCallback(async (values) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${apiUrl}/auth/accounts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      });

      const data = await response.json();

      if (!response.ok || data.status !== 'success') {
        setError(data.message || 'Registration failed. Please try again.');
        return;
      }

      // Update auth context with token and user data
      if (data.token) {
        setToken(data.token);
      }
      if (data.user) {
        setUserData(data.user);
      }

      navigate('/laboratory/cubicle');
    } catch (err) {
      console.error('Registration error:', err);
      
      // Handle specific error types
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
  }, [setToken, setUserData, navigate]);

  const handleCancel = useCallback(() => {
    navigate('/auth/login');
  }, [navigate]);

  // Reusable form field component
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
          <FormField 
            label="First Name"
            name="first_name"
            validation={VALIDATION_RULES.firstName}
            placeholder="First Name"
          />
          
          <FormField 
            label="Last Name"
            name="last_name"
            validation={VALIDATION_RULES.lastName}
            placeholder="Last Name"
          />
          
          <FormField 
            label="Email"
            name="email"
            type="email"
            validation={VALIDATION_RULES.email}
            placeholder="Email"
          />
          
          <FormField 
            label="Password"
            name="password"
            type="password"
            validation={VALIDATION_RULES.password}
            placeholder="Password"
          />
        </div>
        
        <div className='submit-btns'>
          <button 
            type="submit" 
            disabled={isLoading}
          >
            {isLoading ? 'Creating Account...' : 'Submit'}
          </button>
          <button 
            type="button"
            onClick={handleCancel}
            disabled={isLoading}
          >
            Cancel
          </button>
        </div>
      </FormStyle>
    </FormContainerStyle>
  );
};

export default NewLoginForm;
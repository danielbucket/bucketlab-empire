import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useCallback, useMemo } from "react";
import { useAuth } from '../../../../hooks/useAuth.js';
import { FormStyle } from './index.styled.js';
import { jwtDecode } from "jwt-decode";

const apiUrl = import.meta.env.DEV
  ? import.meta.env.VITE_DEV_API_URL
  : import.meta.env.VITE_PROD_API_URL;

// Validation rules constants
const VALIDATION_RULES = {
  email: {
    required: 'An email is required',
    pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: 'Please enter a valid email.'
    }
  },
  password: {
    required: 'Password is required.'
  }
};

// Message types
const MESSAGE_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info'
};

export default function LoginForm() {
  const [formState, setFormState] = useState({
    isLoading: false,
    message: '',
    messageType: null,
    error: null
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm();
  
  const navigate = useNavigate();
  const location = useLocation();
  const { setToken, setUserData } = useAuth();

  // Memoized default email from location state
  const defaultEmail = useMemo(() => {
    return location.state?.email || '';
  }, [location.state?.email]);

  // Handle location state messages
  useEffect(() => {
    if (location.state?.isNew && location.state?.email) {
      setFormState(prev => ({
        ...prev,
        message: `Account created successfully for ${location.state.email}. Please login.`,
        messageType: MESSAGE_TYPES.SUCCESS
      }));
      setValue('email', location.state.email);
    } else if (location.state?.email && !location.state?.isNew) {
      setFormState(prev => ({
        ...prev,
        message: `Account with ${location.state.email} already exists. Please login.`,
        messageType: MESSAGE_TYPES.INFO
      }));
      setValue('email', location.state.email);
    }
  }, [location.state, setValue]);

  // Handle API errors
  const handleApiError = useCallback((errorData) => {
    let message = 'Login failed. Please try again.';
    let messageType = MESSAGE_TYPES.ERROR;

    if (errorData?.fail_type === 'invalid_password') {
      message = errorData.message || 'Invalid password. Please try again.';
    } else if (errorData?.fail_type === 'user_not_found') {
      message = 'No account found with this email. Please check your email or create an account.';
    } else if (errorData?.fail_type === 'server_error') {
      message = 'Server error occurred. Please try again later.';
    } else if (errorData?.message) {
      message = errorData.message;
    }

    setFormState(prev => ({
      ...prev,
      message,
      messageType,
      error: errorData
    }));
  }, []);

  const onSubmit = useCallback(async (values) => {
    setFormState(prev => ({
      ...prev,
      isLoading: true,
      error: null,
      message: '',
      messageType: null
    }));

    try {
      console.log('apiUrl: ', apiUrl);
      const response = await fetch(`${apiUrl}/auth/accounts/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      const data = await response.json();

      if (!response.ok || data.status !== 'success') {
        handleApiError(data);
        return;
      }

      // Validate and update auth context with token and user data
      const { token } = data;
      if (token) {
        setToken(token);
        const decodedToken = jwtDecode(token);
        setUserData(decodedToken.account);
      } else {
        console.error('No token received from server');
        setFormState(prev => ({
          ...prev,
          message: 'Authentication failed. No token received.',
          messageType: MESSAGE_TYPES.ERROR
        }));
        return;
      }

      // Clear form state before navigation
      setFormState({
        isLoading: false,
        message: '',
        messageType: null,
        error: null
      });

      // Navigate to intended destination or default to laboratory
      const redirectTo = location.state?.from || '/laboratory/cubicle';
      navigate(redirectTo, { replace: true });
    } catch (err) {
      console.error('Login network error:', err);
      
      // Handle specific error types
      let errorMessage = 'Network error. Please check your connection and try again.';
      
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        errorMessage = 'Unable to connect to the server. Please check your internet connection.';
      } else if (err.message.includes('CORS')) {
        errorMessage = 'Server configuration error. Please contact support if this persists.';
      }
      
      setFormState(prev => ({
        ...prev,
        message: errorMessage,
        messageType: MESSAGE_TYPES.ERROR,
        error: { message: err.message }
      }));
    } finally {
      setFormState(prev => ({
        ...prev,
        isLoading: false
      }));
    }
  }, [setToken, setUserData, navigate, handleApiError, location.state?.from]);

  // Reusable form field component for consistency
  const FormField = ({ label, name, type = 'text', validation, placeholder, defaultValue }) => (
    <div className='form-field'>
      <div>
        <label htmlFor={name}>{label}</label>
        {errors[name] && <p className="field-error">{errors[name].message}</p>}
      </div>
      <input
        id={name}
        type={type}
        {...register(name, validation)}
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={formState.isLoading}
        autoComplete={name === 'email' ? 'email' : name === 'password' ? 'current-password' : 'off'}
      />
    </div>
  );

  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      {formState.message && (
        <div className={`message-container ${formState.messageType}`}>
          <p>{formState.message}</p>
        </div>
      )}
      
      <div className='fields-container'>
        <FormField 
          label="Email"
          name="email"
          type="email"
          validation={VALIDATION_RULES.email}
          placeholder="Email"
          defaultValue={defaultEmail}
        />
        
        <FormField 
          label="Password"
          name="password"
          type="password"
          validation={VALIDATION_RULES.password}
          placeholder="Password"
        />
      </div>
      
      <div className='submit-btn'>
        <button 
          type="submit" 
          disabled={formState.isLoading}
          className={formState.isLoading ? 'loading' : ''}
        >
          {formState.isLoading ? 'Signing in...' : 'Login'}
        </button>
      </div>
    </FormStyle>
  );
};
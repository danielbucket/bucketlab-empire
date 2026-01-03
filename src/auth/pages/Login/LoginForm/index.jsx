import { useForm } from "react-hook-form";
import { useState, useCallback, useEffect, useRef } from "react";
import { useAuth } from '../../../../hooks/useAuth.js';
import { useAvatar } from '../../../../hooks/useAvatar.js';
import { FormStyle } from './index.styled.js';
import { useLocation, Navigate } from "react-router-dom";
import { VALIDATION_RULES, MESSAGE_TYPES } from "./vars.js";

// API URL based on environment
const API_URL = import.meta.env.DEV
  ? 'https://dev.bucketlab.io/accounts'
  : 'https://api.bucketlab.io/accounts';

export default function LoginForm() {
  const location = useLocation();
  const { isAuthenticated, setToken, setAccountData } = useAuth();
  const { setAvatarUrl } = useAvatar();

  const [defaultEmail, setDefaultEmail] = useState(() => location.state?.email || '');

  // Sync defaultEmail with location state
  useEffect(() => {
    if (location.state?.email) {
      setDefaultEmail(location.state.email);
    }
  }, [location.state?.email]);
  const [formState, setFormState] = useState({
    isLoading: false,
    message: '',
    messageType: null,
    error: null
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleApiError = useCallback((errorData) => {
    let message = 'Login failed. Please try again.';
    let messageType = MESSAGE_TYPES.ERROR;

    // Show specific error messages for wrong password or email
    if (errorData?.fail_type === 'invalid_password') {
      message = 'Incorrect password. Please try again.';
    } else if (errorData?.fail_type === 'user_not_found') {
      message = 'No account found with this email. Please check your email or sign up.';
    } else if (errorData?.fail_type === 'invalid_email') {
      message = 'Invalid email format. Please check your email.';
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

  // Prevent state updates after unmount
  const isMounted = useRef(true);
  useEffect(() => {
    isMounted.current = true;
    return () => { isMounted.current = false; };
  }, []);

  const onSubmit = useCallback(async (values) => {
    if (!isMounted.current) return;
    setFormState(prev => ({
      ...prev,
      isLoading: true,
      error: null,
      message: '',
      messageType: null
    }));

    try {
      const response = await fetch(`${API_URL}/login`, {
      // const response = await fetch('api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await response.json();

      if (!response.ok || data.status !== 'success') {
        if (isMounted.current) handleApiError(data);
        return;
      }

      const { token, avatarUrl } = data.accountData;
      
      if (token) {
        if (isMounted.current) {
          setToken(token);
          setAccountData(token);
          avatarUrl && setAvatarUrl(avatarUrl);
        }
      } else {
        if (isMounted.current) {
          setFormState(prev => ({
            ...prev,
            message: 'Authentication failed. No token received.',
            messageType: MESSAGE_TYPES.ERROR
          }));
        }
        return;
      }
    } catch (err) {
      let errorMessage = 'Network error. Please check your connection and try again.';
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        errorMessage = 'Unable to connect to the server. Please check your internet connection.';
      } else if (err.message.includes('CORS')) {
        errorMessage = 'Server configuration error. Please contact support if this persists.';
      }
      if (isMounted.current) {
        setFormState(prev => ({
          ...prev,
          message: errorMessage,
          messageType: MESSAGE_TYPES.ERROR,
          error: { message: err.message }
        }));
      }
    } finally {
      if (isMounted.current) {
        setFormState(prev => ({
          ...prev,
          isLoading: false
        }));
      }
    }
  }, [setToken, setAccountData, setAvatarUrl, handleApiError]);

  // Use redirect instead of null render to prevent abrupt unmounts
  if (isAuthenticated) return <Navigate to="/laboratory" replace />;

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
        <FormField label="Email"
          name="email"
          type="email"
          validation={VALIDATION_RULES.email}
          placeholder="Email"
          defaultValue={defaultEmail} />
        <FormField label="Password"
          name="password"
          type="password"
          validation={VALIDATION_RULES.password}
          placeholder="Password" />
      </div>
      <div className='submit-btn'>
        <button type="submit" 
          disabled={formState.isLoading}
          className={formState.isLoading ? 'loading' : ''}>
          {formState.isLoading ? 'Signing in...' : 'Login'}
        </button>
      </div>
    </FormStyle>
  );
};
import { useForm } from "react-hook-form";
import { useState, useCallback, useEffect, useRef } from "react";
import { useAuth } from '../../../../hooks/useAuth.js';
import { FormStyle } from './index.styled.js';
import { useLocation, useNavigate } from "react-router-dom";
import { VALIDATION_RULES, MESSAGE_TYPES } from "./vars.js";
import { API_URLS, PRIVATE_URLS } from '../../../../globals/global.urls.js';

export default function LoginForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const { getAuth } = useAuth();

  const [defaultEmail] = useState(() => location.state?.email || '');
  const [formState, setFormState] = useState({
    isLoading: false,
    message: '',
    messageType: null,
    error: null
  });

  // Use AbortController for request cancellation instead of isMounted
  const abortControllerRef = useRef(null);

  useEffect(() => {
    return () => {
      // Cancel any pending requests on unmount
      abortControllerRef.current?.abort();
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleApiError = useCallback((errorData) => {
    let message = 'Login failed. Please try again.';
    let messageType = MESSAGE_TYPES.ERROR;

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
      error: errorData,
      isLoading: false
    }));
  }, []);

  const onSubmit = useCallback(async (values) => {
    // Cancel any previous request
    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController();

    setFormState(prev => ({
      ...prev,
      isLoading: true,
      error: null,
      message: '',
      messageType: null
    }));

    try {
      const response = await getAuth(values.email, values.password);
      if (response.status === 'success') {
        setFormState(prev => ({
          ...prev,
          message: 'Login successful! Redirecting...',
          messageType: MESSAGE_TYPES.SUCCESS,
          isLoading: false
        }));
        navigate(PRIVATE_URLS.laboratory.root);
      } else {
        handleApiError(response);
      }
    } catch (err) {
      if (err.name === 'AbortError') { return }

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
        error: { message: err.message },
        isLoading: false
      }));
    }
  }, [getAuth, handleApiError, navigate]);

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
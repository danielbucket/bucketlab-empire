import { useForm } from "react-hook-form";
import { useState, useCallback, useEffect, useRef } from "react";
import { useAuth } from '../../../../hooks/useAuth.js';
import { useAvatar } from '../../../../hooks/useAvatar.js';
import { FormStyle } from './index.styled.js';
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { VALIDATION_RULES, MESSAGE_TYPES } from "./vars.js";
import { API_URLS, PRIVATE_URLS } from '../../../../global.urls.js';

export default function LoginForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, setToken, setProfileData } = useAuth();
  const { setAvatarUrl } = useAvatar();

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
      const response = await fetch(API_URLS.profiles.login, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
        signal: abortControllerRef.current.signal
      });

      const data = await response.json();

      if (!response.ok || data.status !== 'success') {
        handleApiError(data);
        return;
      }

      const { token, avatarUrl, id } = data.profileData || data;

      if (!token) {
        handleApiError({ message: 'Authentication failed. No token received.' });
        return;
      }

      // Set token first
      setToken(token);
      if (avatarUrl) {
        setAvatarUrl(avatarUrl);
      }

      // Fetch profile data using the ID received from login
      if (id) {
        try {
          const profileResponse = await fetch(API_URLS.profiles.getProfileById(id), {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            signal: abortControllerRef.current.signal
          });

          if (!profileResponse.ok) {
            console.error('Failed to fetch profile data:', profileResponse.status);
            setFormState(prev => ({
              ...prev,
              message: 'Login successful, but failed to load profile data.',
              messageType: MESSAGE_TYPES.WARNING,
              isLoading: false
            }));
            return;
          }

          const profileData = await profileResponse.json();
          setProfileData(profileData);

          // Redirect immediately after successful login
          navigate(PRIVATE_URLS.laboratory.root, { replace: true });
        } catch (profileError) {
          console.error('Error fetching profile:', profileError);
          if (profileError.name !== 'AbortError') {
            setFormState(prev => ({
              ...prev,
              message: 'Login successful, but failed to load profile data.',
              messageType: MESSAGE_TYPES.WARNING,
              isLoading: false
            }));
          }
        }
      }
    } catch (err) {
      // Don't show error if request was aborted (unmount)
      if (err.name === 'AbortError') {
        return;
      }

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
  }, [setToken, setProfileData, setAvatarUrl, handleApiError, navigate]);

  // Early return if already authenticated during render (e.g., page refresh)
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
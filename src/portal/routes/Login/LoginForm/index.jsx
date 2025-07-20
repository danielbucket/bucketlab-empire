import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import { FormStyle } from './index.styled.js';

const apiUrl = import.meta.env.DEV ? import.meta.env.VITE_DEV_API_URL : import.meta.env.VITE_PROD_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const originUrl = import.meta.env.VITE_ORIGIN_URL;

export default function LoginForm() {
  const [isNew, setIsNew] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState();
  const [email, setEmail] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (error?.fail_type === 'invalid_password') {
      setIsNew(() => false);
      setMessage(() => error.message);
      return;
    };

    if (error?.fail_type === 'server_error') {
      throw new Error(error);
    };
  }, [error]);

  useEffect(() => {
    if (location.state?.isNew) {
      setIsNew(() => location.state.isNew);
      setEmail(() => location.state.email);
      setMessage(() => `An account with the email ${location.state.email} has been created.`);
    };

    if (!location.state?.isNew && location.state?.email) {
      setIsNew(() => false);
      setEmail(() => location.state.email);
      setMessage(() => `An account with the email ${location.state.email} already exists.`);
    }
  }, [location.state]);

  const onSubmit = (values) => {
    fetch(`${apiUrl}/travelers/login`, {
      method: 'POST',
      originUrl: originUrl,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...values }, { apiKey })
    })
    .then((res) => res.json())
    .then((res) => {
      if (res.status !== 'success') {
        return setError(() => res);
      };
    
      navigate('/laboratory/cubicle', {
        state: res
      });
    })
    .catch((err) => {
      setError(() => err);
    });
  };

  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      { isNew !== null && <p>{message}</p> }
      <div className='fields-container'>
        <div className='form-field'>
          <div>
            <label>Email</label>
            <p>{errors.email?.message}</p>
          </div>
          <input type="email"
            {...register('email', { 
              required: 'An email is required',
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Please enter a valid email.'
              }
            })}
            defaultValue={email !== null ? email : ''}
            placeholder='Email'
          />
        </div>
        <div className='form-field'>
          <div>
            <label>Password</label>
            <p>{errors.password?.message}</p>
          </div>
          <input type='password'
            {...register('password', {
              required: 'Password is required.'
            })}
            placeholder='Password'
          />
        </div>
      </div>
      <div className='submit-btn'>
        <input type="submit"
          value="Login" />
      </div>
    </FormStyle>
  );
};
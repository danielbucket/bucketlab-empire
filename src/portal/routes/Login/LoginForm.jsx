import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
// import { submitForm } from './api'; // Assuming you have an API function to handle form
import { FormStyle } from './index.styled.js';

export default function LoginForm() {
  const [isNew, setIsNew] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(watch("example"));

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
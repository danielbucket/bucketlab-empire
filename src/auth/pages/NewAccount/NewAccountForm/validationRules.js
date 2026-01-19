// Validation rules constants
export const VALIDATION_RULES = {
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
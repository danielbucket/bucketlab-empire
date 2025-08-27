// Validation rules constants
export const VALIDATION_RULES = {
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
export const MESSAGE_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info'
};
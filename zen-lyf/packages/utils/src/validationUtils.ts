/**
 * Validate an email address
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate a password (at least 8 characters, including a number and a special character)
 */
export const isValidPassword = (password: string): boolean => {
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  return passwordRegex.test(password);
};

/**
 * Validate a phone number (simple validation for demonstration)
 */
export const isValidPhoneNumber = (phoneNumber: string): boolean => {
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  return phoneRegex.test(phoneNumber);
};

/**
 * Validate a date of birth (must be in the past)
 */
export const isValidDateOfBirth = (dateOfBirth: Date): boolean => {
  const now = new Date();
  return dateOfBirth < now;
};

/**
 * Validate a height value (in cm, must be positive)
 */
export const isValidHeight = (height: number): boolean => {
  return height > 0 && height < 300; // Reasonable height range in cm
};

/**
 * Validate a weight value (in kg, must be positive)
 */
export const isValidWeight = (weight: number): boolean => {
  return weight > 0 && weight < 500; // Reasonable weight range in kg
}; 
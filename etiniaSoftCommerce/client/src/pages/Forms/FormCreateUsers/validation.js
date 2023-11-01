const validateUserInput = (userData) => {
    const errors = {};
  
    if (!userData.name) {
      errors.name = 'Name is required';
    }
  
    if (!userData.last_name) {
      errors.last_name = 'Last name is required';
    }
  
    if (!userData.phone_number) {
      errors.phone_number = 'Phone number is required';
    } else if (userData.phone_number.length !== 10) {
      errors.phone_number = 'Phone number must be 10 digits';
    }
  
    if (!userData.address) {
      errors.address = 'Address is required';
    }
  
    if (!userData.email) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(userData.email)) {
      errors.email = 'Invalid email address';
    }
  
    if (!userData.password) {
      errors.password = 'Password is required';
    } else if (!isValidPassword(userData.password)) {
      errors.password = 'Password must contain at least one digit';
    }
  
    return errors;
  };
  
  const isValidEmail = (email) => {
    // You can implement a more complex email validation logic if needed
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
  };
  
  const isValidPassword = (password) => {
    // Check if the password contains at least one digit
    return /\d/.test(password);
  };
  
  module.exports = {
    validateUserInput,
  };
  
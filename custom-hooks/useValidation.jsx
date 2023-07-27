import { useState } from 'react';

export const useValidation = (initialState, validationRules) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name)
    console.log(value)
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};

    // Validate the form data based on the provided rules
    Object.entries(validationRules).forEach(([field, rules]) => {
      for (const rule of rules) {
        const ruleName = rule.name;
        const ruleValue = rule.value;

        if (ruleName === 'required' && !values[field].trim()) {
          validationErrors[field] = `Please enter ${field}.`;
        }

        if (ruleName === 'minLength' && values[field].length < ruleValue) {
          validationErrors[field] = `${field} must be at least ${ruleValue} characters long.`;
        }

        // Add more rules as needed based on your requirements
      }
    });

    setErrors(validationErrors);
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

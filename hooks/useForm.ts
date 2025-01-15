import { useState } from 'react';

export const useForm = <T extends { [K in keyof T]: string | boolean | string[] }>(
  initialValues: T,
  validationRules?: { [K in keyof T]?: (value: T[K], values: T) => string | null }
) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<{ [K in keyof T]?: string | null }>({});

  const handleChange = <K extends keyof T>(name: K, value: T[K]) => {
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors: { [K in keyof T]?: string | null } = {};
    if (validationRules) {
      (Object.keys(validationRules) as (keyof T)[]).forEach(field => {
        const rule = validationRules[field];
        if (rule) {
          const error = rule(values[field], values);
          if (error) {
            newErrors[field] = error;
          }
        }
      });
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    errors,
    handleChange,
    validate,
    resetForm,
  };
};

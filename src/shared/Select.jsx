import { FormikErrors } from 'formik';

import React from 'react';



export const Select = ({
  name,
  inputClass = '',
  label,
  value,
  options,
  noEmptyValue = false,
  onChange,
  isInvalid,
  feedback,
  className,
  disabled,
  defaultValue,
  isLoading,
  placeholder,
  selectProps = {},
}) => {
  return (
    <div className={`form-group ${className || ''}`}>
      {label && <label className={`form-label ${isInvalid ? 'text-danger' : ''}`}>{label}</label>}
      <select
        className={`form-select ${inputClass} ${isInvalid ? 'is-invalid' : ''}`}
        name={name}
        onChange={onChange}
        value={value ?? ''}
        disabled={disabled}
        {...selectProps}
      >
        {!noEmptyValue && <option>{defaultValue}</option>}
        {placeholder && <option hidden>{placeholder}</option>}
        {options.map(({ label, value }, index) => (
          <option key={`option-${index}`} value={value}>
            {label}
          </option>
        ))}
      </select>
      {/* {isInvalid && feedback && <InvalidFeedback message={feedback.toString()} />} */}
    </div>
  );
};

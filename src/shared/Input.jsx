const Input = ({
  className,
  onChange,
  placeholder,
  type,
  label,
  invalidClassLabel,
  containerClass,
  disabled,
  name,
  required,
  value,
  defaultValue
}) => {
  return (
    <div className={`form-group ${containerClass}`}>
      {label && (
        <label className={`form-label ${invalidClassLabel}`}>{label}</label>
      )}
      <input
      defaultValue={defaultValue}
        required={required}
        name={name}
        value={value}
        className={`form-control ${className}`}
        placeholder={placeholder}
        type={type}
        onChange={(e) => onChange(e)}
        disabled={disabled}
        autoComplete="off"
      />
    </div>
  );
};

export default Input;

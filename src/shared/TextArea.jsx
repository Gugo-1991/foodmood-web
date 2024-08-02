import React from "react";

export const Textarea = ({
  name,
  textareaClass = "",
  label,
  value,
  onChange,
  onBlur,
  onKeyDown,
  placeholder,
  isInvalid,
  feedback,
  disabled,
  isLoading,
  formatter,
  rows,
  cols,
  maxLength,
}) => {
  return (
    <div className="form-group">
      {label && (
        <label className={`form-label ${isInvalid ? "text-danger" : ""}`}>
          {label}
        </label>
      )}
      <textarea
        name={name}
        className={`form-control ${textareaClass} ${
          isInvalid ? "is-invalid" : ""
        }`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          if (formatter) {
            e.target.value = formatter(e.target.value);
          }
          onChange(e);
        }}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        disabled={disabled}
        autoComplete="off"
        rows={rows}
        cols={cols}
        maxLength={maxLength}
      />
    </div>
  );
};

const Switch = ({ name, label, checked, onChange, className, disabled }) => {
  return (
    <div className={`form-group row ${className}`}>
      <div className="col-auto">
        <div className="form-check form-switch">
          <input
            name={name}
            className="form-check-input"
            type="checkbox"
            value={checked ? "true" : "false"}
            onChange={onChange}
            checked={checked}
            disabled={disabled}
          />
          <label className="form-check-label"></label>
        </div>
      </div>
      {label && (
        <div className="col ms-n2">
          <small className="text-muted">{label}</small>
        </div>
      )}
    </div>
  );
};

export default Switch;

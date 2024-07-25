const Button = ({
  className,
  onClick,
  type,
  label,
  disabled,
  badge,
  isLoading,
  labelOnAction,
  badgeClass,
  rightIcon,
  rightIconClasses,
}) => {
  return (
    <button
    className={`btn  text-nowrap ${  className ?? 'btn-outline-primary'} ${badge ? 'position-relative' : ''}`}
      type={type}
      disabled={isLoading || disabled}
      onClick={onClick}
    >
      {isLoading ? (
        <>
          <span className="spinner-border spinner-border-sm" aria-hidden></span>
          {labelOnAction && <span className="ms-3">{labelOnAction}</span>}
        </>
      ) : (
        <>
          <span>{label}</span>
          {badge ? (
            <span
              className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success-soft ${badgeClass}`}
            >
              {badge}
            </span>
          ) : null}
        </>
      )}
      {rightIcon && <span className={rightIconClasses}> {rightIcon} </span>}
    </button>
  );
};

export default Button;

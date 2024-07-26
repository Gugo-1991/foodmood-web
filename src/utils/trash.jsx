const Delete = ({ onClick, message, className }) => {
  return (
    <span
      className={`${className}   `}
      aria-hidden
      onClick={onClick}
    >
      {message} <i className="bi bi-trash text-danger display-5 p-3"></i>
    </span>
  );
};
export default Delete;

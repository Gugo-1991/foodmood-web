const Edit = ({onClick, message, className}) => {
  return (
    <span className={className} aria-hidden onClick={onClick}>
      {message} <i className="bi bi-pen"></i>
    </span>
  );
};
export default Edit;

const Edit = ({ onClick, label, className }) => {
  return (
    <span className={`${className} `} aria-hidden onClick={onClick}>
      {label} <i className="bi bi-pen text-warning display-6 p-3"></i>
    </span>
  );
};
export default Edit;

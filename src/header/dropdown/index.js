import "./index.css";

function DropDown({ name, children }) {
  return (
    <>
      <div className="dropdown">
        <button className="btn btn-dark">{name}</button>
        <div className="dropdown-content">{children}</div>
      </div>
    </>
  );
}

export default DropDown;

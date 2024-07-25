import "./index.css";

function DropDown({ name, children }) {
  return (
      <div className="dropdown">
        <button className="btn btn-dark">{name}</button>
        <div className="dropdown-content rounded-3">{children}</div>
      </div>
  );
}

export default DropDown;

import "./index.css";

function DropDown({ name, children }) {
  return (
    <>
      <div class="dropdown">
        <button className="dropbtn">{name}</button>
        <div className="dropdown-content">{children}</div>
      </div>
    </>
  );
}

export default DropDown;

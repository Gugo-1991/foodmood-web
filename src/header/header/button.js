import { useDispatch, useSelector } from "react-redux";
import { loginstate } from "../../store/users";

function Button({ value, login, password }) {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="btn btn-info"
      onClick={() => dispatch(loginstate({ login, password }))}>
      {value}
    </button>
  );
}
export default Button;

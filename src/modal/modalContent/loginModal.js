import { useDispatch } from "react-redux";
import { closeModal, showSigninModal } from "../../store/showmodal";
import "./index.css";
import Login from "./login";

function LoginModalPage() {
  const dispatch = useDispatch();
  return (
    <div className="general">
      <div className="logincard rounded-3">
        {
          <Login
            children={
              <button
                className="btn btn-success"
                onClick={() =>
                  dispatch(closeModal()) && dispatch(showSigninModal())
                }>
                Signin
              </button>
            }
          />
        }
      </div>
    </div>
  );
}
export default LoginModalPage;

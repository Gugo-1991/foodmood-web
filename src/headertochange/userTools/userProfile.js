import "./index.css";
import "react-dropdown/style.css";

function UserProfile() {
  const userName = localStorage.getItem("userName");
  // const isLogin = localStorage.getItem("isLogin");
  return (
    <div className="total d-flex ">
      <h6>{userName}</h6>
    </div>
  );
}

export default UserProfile;

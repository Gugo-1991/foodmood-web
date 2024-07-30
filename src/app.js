import "./app.css";
import { Route, Routes } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setUser } from "./app/authSlice";
import routes from "./routes";
import Header from "./features/header/Header";
import LoginSlice from "./features/main/login";
import Navbar from "./features/header/navbar";

const ProtectedRoute = ({ children, roles }) => {
  const xUser = localStorage.getItem("x-user");

  if (!xUser) {
    return null;
  }

  if (roles && roles.length > 0 && xUser) {
    const userRole = JSON.parse(xUser)?.role;
    if (roles.indexOf(userRole) > -1) {
      return children;
    } else {
      return null;
    }
  }

  return children;
};
const App = () => {
  const dispatch = useDispatch();
  const xUser = localStorage.getItem("x-user");
  if (xUser) {
    dispatch(setUser(JSON.parse(xUser)));
  }

  return (
    <>
        <Navbar />
    
      {/* <Header /> */}
     {/* {!xUser  && <LoginSlice />} */}
      <Routes>
        {routes.map(
          ({ isProtected, roles, path, component: Component }, index) =>
            isProtected ? (
              <Route
                key={`route-${index}`}
                path={path}
                element={
                  <ProtectedRoute roles={roles}>
                    <Component />
                  </ProtectedRoute>
                }
              />
            ) : (
              <Route
                key={`route-${index}`}
                path={path}
                element={<Component />}
              />
            )
        )}
      </Routes>
    </>
  );
};

export default App;

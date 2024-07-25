import "./app.css";
import ShowFood from "./mainContainer/showFood";
import { Route, Routes } from "react-router-dom";

import Header from "./header/Header";
import { useDispatch } from "react-redux";
import { setUser } from "./app/authSlice";
import { useEffect } from "react";
import routes from "./routes";

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
      <Header />
      <Routes>
        {routes.map(
          (
            { isProtected, roles, path,  component: Component },
            index
          ) =>
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

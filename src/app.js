import "./App.css";

import { Route, Routes } from "react-router-dom";

import routes from "./routes";
import TopHeader from "./components/TopHeader/TopHeader";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import LoginSlice from "./features/main/login";
import { useInitFirstUserMutation } from "./api/userApi";
import { useEffect } from "react";

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
  const [user] = useInitFirstUserMutation();
  useEffect(() => {
    user();
  }, [user]);
  const xUser = localStorage.getItem("x-user");

  return (
    <div className="App">
      <TopHeader />
      <NavBar />

      {!xUser && <LoginSlice />}

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
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import { Provider } from "react-redux";
import { ModalProvider } from "./context/modal/modalProvider";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ModalProvider>
        <BrowserRouter>
          <GoogleOAuthProvider clientId="109434057358-mcit3s6du7ta71shfhvlha8p4jor3nju.apps.googleusercontent.com">
            <App />
          </GoogleOAuthProvider>
        </BrowserRouter>
      </ModalProvider>
    </React.StrictMode>
  </Provider>
);

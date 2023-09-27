import React from "react";
import { createRoot } from "react-dom";
import App from "./app";
import { Provider } from "react-redux";
import store from "./store/store";
import api from "./api/foodmoodApi";

const container = document.getElementById("root");
const root = createRoot(container);
export const queryUsers = async () => {
  try {
    const response = await api.post("users/initFirstUser");
  } catch (error) {}
};

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

import React from "react";
import { createRoot } from "react-dom"; // Update import path
import App from "./app";
import { Provider } from "react-redux";
import store from "./store/store";
import api from "./api/foodmoodApi";

const container = document.getElementById("root");
const root = createRoot(container);
export const queryUsers = async () => {
  try {
    const response = await api.post("./initFirstUser");
    console.log(response.data);
  } catch (error) {}
}; // Replace the comma with a semicolon

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

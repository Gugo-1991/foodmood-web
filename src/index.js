import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import { Provider } from "react-redux";
import { ModalProvider } from "./context/modal/modalProvider";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
const container = document.getElementById("root");
const root = createRoot(container);
// export const queryUsers = async () => {
//   try {
//     const response = await api.post("users/initFirstUser");
//   } catch (error) {}
// };

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ModalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalProvider>
    </React.StrictMode>
  </Provider>
);

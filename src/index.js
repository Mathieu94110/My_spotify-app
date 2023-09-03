import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { setupStore } from "./store";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <App />
    </Provider>
  </React.StrictMode>
);

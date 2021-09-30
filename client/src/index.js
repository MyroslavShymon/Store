import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import DeviceStore from "./store/DeviceStore.js";
import UserStore from "./store/UserStore.js";

export const Context = createContext(null);

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        user: new UserStore(),
        devices: new DeviceStore(),
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

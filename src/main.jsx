import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import {UserProvider } from './context/UserContext'
import "./index.css";

// Here the App component is being rendered in the browser and we have most of the functionality in the App component

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <App />
      </UserProvider>
    </BrowserRouter>

  </React.StrictMode>
);

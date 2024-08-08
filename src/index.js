import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App";
import { ThemeProvider } from "./screens/HomePage/BackgroundThemes/ThemeContext";
import { LoadingProvider } from "./contexts/LoadingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoadingProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LoadingProvider>
  </React.StrictMode>
);

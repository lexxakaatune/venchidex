import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// React Helmet Provider for SEO
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
      <div>i am good </div>
    </HelmetProvider>
  </React.StrictMode>
);

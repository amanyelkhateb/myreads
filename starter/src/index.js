import React from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";

// Used createRoot In React 18
const root = createRoot(document.getElementById("root"));
root.render(
  // Use Helmet Provider to allow head and title tags
  // Then use React Router to allow routing
  <HelmetProvider> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);


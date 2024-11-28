import "react-app-polyfill/ie11"; // required for IE11
import "react-app-polyfill/stable"; // required for IE11
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client"; // Use ReactDOM.createRoot for React 18+
import { BrowserRouter } from "react-router-dom";
import './index.css'; // Stylesheet
import App from "./App";

// Set up the routes for the app
const APP = (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
     <App />
    </Suspense>
  </BrowserRouter>
);

// Get the root element from the DOM
const rootElement = document.getElementById("root");

// Use React 18's createRoot for rendering
if (rootElement.hasChildNodes()) {
  // If server-side rendered content exists, hydrate it
  ReactDOM.hydrateRoot(rootElement, APP);
} else {
  // Otherwise, use createRoot for client-side rendering
  const root = ReactDOM.createRoot(rootElement);
  root.render(APP);
}

// Handling changes in the user's preferred color scheme
const prefersColorSchemeWatcher = window.matchMedia("(prefers-color-scheme: dark)");

prefersColorSchemeWatcher.addEventListener("change", () => {
  const favicon = document.querySelector('link[rel="icon"]');
  if (favicon) {
    favicon.href = "/favicon.svg"; // Update the favicon
  }
});

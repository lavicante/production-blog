import { createRoot } from "react-dom/client";
import { App } from "app/App";
import "app/styles/index.scss";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";

// Render your React component instead
const el = document.getElementById("root");
if (el) {
  const root = createRoot(el);
  root.render(
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  );
}

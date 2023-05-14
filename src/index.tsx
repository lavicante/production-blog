import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./styles.scss";

// Render your React component instead
const el = document.getElementById("root");
if (el) {
  const root = createRoot(el);
  root.render(<App />);
}

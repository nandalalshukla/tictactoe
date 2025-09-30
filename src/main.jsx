import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="text-5xl font-extrabold">Hello world</div>
  </StrictMode>
);

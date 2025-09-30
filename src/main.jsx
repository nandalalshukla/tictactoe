import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Board from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="flex justify-center items-center min-h-screen min-w-screen">
      <Board />
    </div>
  </StrictMode>
);

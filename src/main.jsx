import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Board from "./App.jsx";
import Box from "./box.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="flex justify-center items-center min-h-screen min-w-screen">
      <Board />
      <Box />
    </div>
  </StrictMode>
);

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./Pages/Home";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Home />
  </StrictMode>
);

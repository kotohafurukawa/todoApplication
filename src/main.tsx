import React from "react";
import ReactDOM from "react-dom/client";
import Task from "./Task";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { TaskProvider } from "./contexts/TaskProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <TaskProvider>
        <Task />
      </TaskProvider>
    </NextUIProvider>
  </React.StrictMode>
);

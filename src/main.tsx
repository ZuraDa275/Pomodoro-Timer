import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { PomodoroContextProvider } from "./PomodoroContext.tsx";
import theme from "./theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <PomodoroContextProvider>
        <App />
      </PomodoroContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);

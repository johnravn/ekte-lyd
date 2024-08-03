import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

const colors = {
  brandPrimary: {
    main: "#234E70",
    50: "#ecf3f9",
    100: "#c5dbed",
    200: "#9ec3e1",
    300: "#77abd4",
    400: "#5093c8",
    500: "#377aaf",
    600: "#2b5f88",
    700: "#1e4461",
    800: "#12293a",
    900: "#060e13",
  },
  brandSecondary: {
    main: "#704523",
    50: "#f9f1ec",
    100: "#edd6c5",
    200: "#e1bb9e",
    300: "#d4a077",
    400: "#c88550",
    500: "#af6c37",
    600: "#88542b",
    700: "#613c1e",
    800: "#3a2412",
    900: "#130c06",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

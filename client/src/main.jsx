import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#008ae6",
    },
    background: {
      default: "#12171d",
    },
    text: {
      primary: "#008ae6",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: "#232a33",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "#232a33",
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

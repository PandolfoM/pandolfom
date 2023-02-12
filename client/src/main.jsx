import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import JetBrainsMonoMedium from "./fonts/jetbrainsmono-medium-webfont.woff";
import JetBrainsMonoMedium2 from "./fonts/jetbrainsmono-medium-webfont.woff2";
import JetBrainsMonoBold from "./fonts/jetbrainsmono-bold-webfont.woff";
import JetBrainsMonoBold2 from "./fonts/jetbrainsmono-bold-webfont.woff2";

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
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: "jetbrains_monomedium";
          src: url(${JetBrainsMonoMedium}) format("woff2"),
            url(${JetBrainsMonoMedium2}) format("woff");
          font-weight: 500;
          font-style: normal;
        }

        @font-face {
          font-family: "jetbrains_monobold";
          src: url(${JetBrainsMonoBold}) format("woff2"),
            url(${JetBrainsMonoBold2}) format("woff");
          font-weight: 700;
          font-style: normal;
        }
      `,
    },
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
  typography: {
    fontFamily: [
      "jetbrains_monobold, monospace",
      "jetbrains_monomedium, monospace",
    ].join(","),
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

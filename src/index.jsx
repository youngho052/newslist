import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import GlobalStyle from "./Styles/GlobalStyle";
import theme from "./Styles/Theme";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "./utils/theme";
import GlobalStyles from "./utils/global";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <>
        <App />
        <GlobalStyles />
      </>
    </ThemeProvider>
  </BrowserRouter>,
  document.querySelector("#root")
);

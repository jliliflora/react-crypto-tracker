import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

// <React.StrictMode> 얘네가 콘솔을 찍으면 두번씩 토해내서 걍 없애버림! 뭐 두번씩 검사를 해서 그런다나? 암튼 거슬려서 뺌

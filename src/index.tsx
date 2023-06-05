import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </RecoilRoot>
);

// <React.StrictMode> 얘네가 콘솔을 찍으면 두번씩 토해내서 걍 없애버림! 뭐 두번씩 검사를 해서 그런다나? 암튼 거슬려서 뺌

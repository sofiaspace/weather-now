import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { WeatherProvider } from "./context/WeatherContext";
import { GlobalStyle } from "./styles/globalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <WeatherProvider>
      <GlobalStyle />
      <App />
    </WeatherProvider>
  </React.StrictMode>
);

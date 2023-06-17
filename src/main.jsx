import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "./routes/index";
import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

import { AuthProvider } from "./hook/auth";
import { FavoritesProvider } from "./hook/favorites";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <FavoritesProvider>
          <Routes />
        </FavoritesProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "./routes/index";
import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

import { AuthProvider } from "./hook/auth";
import { FavoritesProvider } from "./hook/favorites";
import { CartsProvider } from "./hook/cart";



ReactDOM.createRoot(document.getElementById("root")).render(

    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <FavoritesProvider>
          <CartsProvider>
          <Routes />
          </CartsProvider>
        </FavoritesProvider>
      </AuthProvider>
    </ThemeProvider>

);

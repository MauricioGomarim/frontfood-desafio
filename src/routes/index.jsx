import { BrowserRouter } from "react-router-dom";
//import { useAuth } from "../hooks/auth";

import { AppRoutes } from "./app.routes";

export function Routes() {

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

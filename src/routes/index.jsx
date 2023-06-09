import { BrowserRouter } from "react-router-dom";
// import { useAuth } from "../hooks/auth";

import { AppRoutes } from "./app.routes";
import { AuthRotes } from "./auth.routes";


export function Routes() {

  return (
    <BrowserRouter>
      <AuthRotes />
    </BrowserRouter>
  );
}

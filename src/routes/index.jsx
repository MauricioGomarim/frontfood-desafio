import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hook/auth";

import { AdminRoutes } from "./admin.routes";
import { AuthRoutes } from "./auth.routes";
import { UserRoutes } from "./user.routes";

export function Routes() {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      {(user && user.isAdmin) ? <AdminRoutes /> : (user ? <UserRoutes /> : <AuthRoutes />)}
    </BrowserRouter>
  );
}

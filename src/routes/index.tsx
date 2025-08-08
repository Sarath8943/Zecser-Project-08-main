import { Routes, Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import AdminRoutes from "./AdminRoute";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      {PublicRoute()}
      {AdminRoutes()}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

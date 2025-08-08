import { Navigate, Outlet } from "react-router-dom";

const AdminOnlyRoute = () => {
  const isAdmin = true;

  return isAdmin ? <Outlet /> : <Navigate to="/login" replace />;
  
};

export default AdminOnlyRoute;

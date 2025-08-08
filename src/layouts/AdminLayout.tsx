import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/common/SideBar";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-primary flex">
      <AdminSidebar />
      <main className="flex-1 bg-background overflow-y-auto my-6 rounded-xl mr-2 md:mr-3">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

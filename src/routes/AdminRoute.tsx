import { Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import AdminOnlyRoute from "../components/route-protection/AdminOnlyRoute";
import {
  Login,
  Dashboard,
  Gallery,
  
  Reports,
  Services,
  ResetPassword,
} from "../pages/admin";
import Projects from "../pages/admin/Projects";
import Profile from "../pages/admin/Profile";
import ProfileEditpage from "../pages/admin/ProfileEdit";





const AdminRoutes = () => (
  <>
    <Route path="/admin/login" element={<Login />} />
    <Route path="/admin/*" element={<AdminOnlyRoute />}>
      <Route element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="projects" element={<Projects/>} />
        <Route path="reports" element={<Reports />} />
        <Route path="services" element={<Services />} />
         <Route path="profile/edit" element={<ProfileEditpage/>} />
         <Route path="profile/reset-password" element={<ResetPassword />} />
         <Route path="profile" element={<Profile />} />
      </Route>
    </Route>
  </>
);

export default AdminRoutes;

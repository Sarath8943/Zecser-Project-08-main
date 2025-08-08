import { Route } from "react-router-dom";
import { Home, AboutUs, Gallery, Services,ContactUs } from "../pages/user";
import PublicLayout from "../layouts/PublicLayout";

const PublicRoute
 = () => (
  <Route element={<PublicLayout />}>
    <Route index element={<Home />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/gallery" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/contact" element={<ContactUs />} />
  </Route>
);

export default PublicRoute
;

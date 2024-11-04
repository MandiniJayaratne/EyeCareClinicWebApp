import { Routes, Route } from "react-router-dom";
import OurServicesComponent from "./pages/OurServicesComponent";
import AdminDashBoardComponent from "./pages/AdminDashBoard";
import ProductPage from "./pages/ProductPage";
import RegisterAndLogin from "./authentication/RegisterAndLogin";
import ResetPass from "./authentication/ForgotPassword";
import HomeComponent from "./pages/HomeComponent";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/admin" element={<AdminDashBoardComponent />} />
        <Route path="/ourServices" element={<OurServicesComponent />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
        <Route path="/reglog" element={<RegisterAndLogin />}></Route>
        <Route path="/reset" element={<ResetPass />}></Route>
      </Routes>
    </>
  );
};

export default App;

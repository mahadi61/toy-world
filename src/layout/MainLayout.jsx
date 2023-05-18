import { Outlet } from "react-router-dom";
import Footer from "../shared/footer/Footer";
import Navbar from "../shared/navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

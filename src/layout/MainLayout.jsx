import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default MainLayout;

import { useContext } from "react";
import { GoThreeBars } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../../assets/logo-01.png";
import { AuthContext } from "../../provider/AuthProvider";
import "./Navbar.css";
const Navbar = () => {
  const { user, logOut, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logout Successful",
          showConfirmButton: false,
          timer: 2000,
        });
        setUser(null);
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  return (
    <nav className="navbar bg-gradient-to-r from-[#FED54A]  to-[#FF9347] ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className=" text-4xl lg:hidden">
            <GoThreeBars />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/" className="text-[#3B4051] text-xl">
                Home
              </Link>
            </li>
            <li>
              <Link to="/all-toys" className="text-[#3B4051] text-xl">
                All Toys
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="text-[#3B4051] text-xl">
                Blogs
              </Link>
            </li>
            <li>
              {user && (
                <Link
                  to={`/myToys/${user?.email}`}
                  className="text-[#3B4051] text-xl"
                >
                  My Toys
                </Link>
              )}
            </li>
            <li>
              {user && (
                <Link to="/addToys" className="text-[#3B4051] text-xl">
                  Add A Toy
                </Link>
              )}
            </li>
            <li>
              {user && (
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={user?.displayName}
                >
                  <img
                    className="rounded-full mx-2"
                    style={{ height: "40px", width: "40px" }}
                    src={user?.photoURL}
                    alt="user image"
                  />
                </div>
              )}
            </li>
            <li>
              {user ? (
                <button
                  onClick={handleLogOut}
                  className="btn btn-secondary border-0 text-white font-bold bg-[#05058a]"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="btn btn-secondary border-0 text-white font-bold bg-[#05058a]"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
        <div className="w-36 h-20 flex items-center">
          <img className="" src={logo} alt="" />
          <Link to="/" className="text-4xl font-bold text-[#FF6224]">
            Toy<span className="text-[#3B4051]">World</span>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  px-1">
          <li>
            <Link to="/" className="text-[#3B4051] text-xl">
              Home
            </Link>
          </li>
          <li>
            <Link to="/all-toys" className="text-[#3B4051] text-xl">
              All Toys
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="text-[#3B4051] text-xl">
              Blogs
            </Link>
          </li>
          <li>
            {user && (
              <Link
                to={`/myToys/${user?.email}`}
                className="text-[#3B4051] text-xl"
              >
                My Toys
              </Link>
            )}
          </li>
          <li>
            {user && (
              <Link to="/addToys" className="text-[#3B4051] text-xl">
                Add A Toy
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="hidden  lg:block">
          <div className="flex items-center">
            {user && (
              <div
                className="tooltip tooltip-bottom"
                data-tip={user?.displayName}
              >
                <img
                  className="rounded-full mx-2"
                  style={{ height: "40px", width: "40px" }}
                  src={user?.photoURL}
                  alt="user image"
                />
              </div>
            )}
            {user ? (
              <button
                onClick={handleLogOut}
                className="btn btn-secondary border-0 text-white font-bold bg-[#05058a]"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="btn btn-secondary border-0 text-white font-bold bg-[#05058a]"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

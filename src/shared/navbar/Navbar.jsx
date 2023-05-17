import { Link } from "react-router-dom";
import logo from "../../assets/logo-01.png";

const Navbar = () => {
  return (
    <div className="navbar bg-[#22d3eea9]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="text-[#3B4051] text-xl">Home</Link>
            </li>
            <li>
              <Link className="text-[#3B4051] text-xl">All Toys</Link>
            </li>
            <li>
              <Link className="text-[#3B4051] text-xl">Blogs</Link>
            </li>
            <li>
              <Link className="text-[#3B4051] text-xl">My Toys</Link>
            </li>
            <li>
              <Link className="text-[#3B4051] text-xl">Add A Toy</Link>
            </li>
            <li>
              <Link className="btn text-white">Login</Link>
            </li>
          </ul>
        </div>
        <div className="w-36 h-20 flex items-center">
          <img className="" src={logo} alt="" />
          <Link className="text-4xl font-bold text-[#FF6224]">
            Toy<span className="text-[#3B4051]">World</span>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  px-1">
          <li>
            <Link className="text-[#3B4051] text-xl">Home</Link>
          </li>
          <li>
            <Link className="text-[#3B4051] text-xl">All Toys</Link>
          </li>
          <li>
            <Link className="text-[#3B4051] text-xl">Blogs</Link>
          </li>
          <li>
            <Link className="text-[#3B4051] text-xl">My Toys</Link>
          </li>
          <li>
            <Link className="text-[#3B4051] text-xl">Add A Toy</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:block">
          <Link className="btn btn-secondary border-0 bg-[#FF6224]">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-01.png";

const Footer = () => {
  return (
    <footer className="footer  p-10 bg-[#c7e8f3] text-black">
      <div>
        <img className="w-44" src={logo} alt="" />
        <Link className="text-4xl font-bold text-[#FF6224]">
          Toy<span className="text-[#3B4051]">World</span>
        </Link>
        <p className="font-bold">Selling reliable toy since 2001</p>
        <p>Copyright © 2023 - All right reserved</p>
      </div>

      <div className="">
        <h3 className="text-3xl underline font-semibold">Contact Us</h3>
        <div className="form-control">
          <textarea
            placeholder="Enter your message"
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
          ></textarea>
          <label className="input-group mt-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
            />
            <button className="btn btn-outline hover:border-white hover:bg-orange-400">
              Send
            </button>
          </label>
        </div>
      </div>

      <div className="">
        <h2 className="text-3xl underline mb-3 font-semibold">Social Links</h2>
        <Link className="text-2xl flex items-center gap-2">
          <BsFacebook /> Facebook
        </Link>
        <Link className="text-2xl flex items-center gap-2">
          <BsInstagram /> Instagram
        </Link>
        <Link className="text-2xl flex items-center gap-2">
          {" "}
          <BsTwitter />
          Twitter
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

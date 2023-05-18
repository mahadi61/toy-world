import Lottie from "lottie-react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import car from "../../assets/animation/car-safety.json";

const Login = () => {
  const [error, setError] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    if (password.length < 6) {
      return setError("Password must be six character.");
    }

    form.reset();
  };

  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie animationData={car} loop={true} height={400} width={400} />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm ">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered input-accent"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered input-accent"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                {error && <span className="text-red-600">{error}</span>}
                <div className="form-control mt-3">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-primary bg-[#05058a]"
                  />
                </div>
              </form>
            </div>
            <div className="text-center">
              <h5>
                Do not Have an account?{" "}
                <Link to="/register" className="underline">
                  Register Here!
                </Link>
              </h5>
              <p className="mt-3 font-medium">Login With</p>
              <button className="text-3xl mt-4">
                <FcGoogle />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import Lottie from "lottie-react";
import car from "../../assets/animation/car-safety.json";

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie animationData={car} loop={true} height={400} width={400} />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm ">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered input-accent"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered input-accent"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-[#05058a]">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

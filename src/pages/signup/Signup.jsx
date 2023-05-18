import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import car from "../../assets/animation/car-in-movement.json";
import { AuthContext } from "../../provider/AuthProvider";

const Signup = () => {
  const [error, setError] = useState("");

  const { singUpWithEmail, googleLogin } = useContext(AuthContext);

  const hadnleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSingUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      return setError("Password must be six character.");
    }
    singUpWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
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
              <form onSubmit={handleSingUp}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="input input-bordered input-accent"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo Url"
                    name="photo"
                    className="input input-bordered input-accent"
                    required
                  />
                </div>
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
                    value="SignUp"
                    className="btn btn-primary bg-[#05058a]"
                  />
                </div>
              </form>
            </div>
            <div className="text-center">
              <h5>
                Already have an account?
                <Link to="/register" className="underline">
                  Login Now!
                </Link>
              </h5>
              <p className="mt-3 font-medium">SignUp With</p>
              <button onClick={hadnleGoogleSignIn} className="text-3xl mt-4">
                <FcGoogle />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

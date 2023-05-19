import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import car from "../../assets/animation/car-safety.json";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { signInWithEmail, googleLogin, setObserverState } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //   login with email and password
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      return setError("Password must be six character.");
    }
    signInWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 2000,
          });
          navigate("/");
        }
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //   login with google

  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        if (user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 2000,
          });
          navigate("/");
        }

        setObserverState(new Date().getTime());
      })
      .catch((error) => {
        console.log(error);
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
              <h2 className="text-center font-bold text-3xl">Login Now</h2>
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
              <div className="divider">or</div>
              <p className="mt-3 font-medium">Login With</p>
              <button onClick={handleGoogleSignIn} className="text-3xl mt-4">
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

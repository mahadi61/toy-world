import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import car from "../../assets/animation/car-in-movement.json";

import { AuthContext } from "../../provider/AuthProvider";

const Signup = () => {
  const [error, setError] = useState("");
  const { singUpWithEmail, googleLogin, profileUpdate, setObserverState } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        if (user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Sign up Successful",
            showConfirmButton: false,
            timer: 2000,
          });
          navigate("/");
        }
      })
      .catch((error) => {
        setError(error?.message);
      });
  };

  const handleSingUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;

    if (password.length < 6) {
      return setError("Password should be at least 8 characters");
    }
    singUpWithEmail(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          profileUpdate(name, photo)
            .then(() => {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Sign up Successful",
                showConfirmButton: false,
                timer: 2000,
              });
              setObserverState(new Date().getTime());
              navigate("/");
            })
            .catch((error) => {
              setError(error?.message);
            });
        }
        setError("");
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
              <h2 className="text-center font-bold text-3xl">Sign Up Now</h2>

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
                <Link to="/login" className="underline">
                  Login Now!
                </Link>
              </h5>
              <div className="divider">or</div>
              <p className="mt-3 font-medium">SignUp With</p>
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

export default Signup;

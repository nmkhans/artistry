import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import HeaderLogo from "../../assets/logo.png";
import LoginSVG from "../../assets/login.svg";
import { useAuthContext } from "../../context/Auth/AuthContext";
import { toast } from "react-toastify";
import { firebaseError } from "./../../utils/firebaseError";

const Login = () => {
  const { loginUser, setLoading, googleLogin } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const { email, password } = Object.fromEntries(
      formData.entries()
    );

    try {
      const res = await loginUser(email, password);

      if (res?.user?.email) {
        setLoading(false);
        toast.success("Login successful.");
        navigate(location?.state?.from || "/");
      }
    } catch (error) {
      toast.error(firebaseError[error.code]);
    }
  };

  const handleGoogleLogin = async () => {
    const res = await googleLogin();

    if (res.user.accessToken) {
      setLoading(false);
      toast.success("Login successfull");
      navigate(location?.state?.from || "/");
    }
  };

  return (
    <section className="py-[80px]">
      <div className="container mx-auto">
        <div>
          <Link to="/" className="flex items-center gap-x-2">
            <img
              src={HeaderLogo}
              className="w-12"
              alt="Header Logo"
            />
            <span className="text-xl font-bold hidden md:inline-block lg:inline-block">
              <span className="text-primary">Arti</span>stry
            </span>
          </Link>
        </div>
        <div>
          <div className="flex">
            <div className="basis-1/2">
              <div className="mt-10 my-5 w-2/3 mx-auto">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Welcome back!
                </h3>
                <p className="text-[15px] text-gray-600">
                  Login to continue.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="w-2/3 mx-auto">
                <fieldset className="fieldset bg-base-100 w-full">
                  <div className="mb-2">
                    <label className="label mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="input w-full"
                      placeholder="johndoe@gmail.com"
                    />
                  </div>

                  <div className="mb-2">
                    <label className="label mb-1">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="input w-full"
                      placeholder="********"
                    />
                  </div>

                  <div>
                    <p>
                      Don't have an account?{" "}
                      <Link className="text-blue-500" to="/register">
                        Register
                      </Link>
                    </p>
                  </div>

                  <div className="mt-2">
                    <button className="btn btn-primary w-full text-white">
                      Login
                    </button>
                  </div>
                </fieldset>
              </form>

              <div className="w-2/3 mx-auto mt-5">
                <div className="divider">OR</div>
                <button
                  onClick={handleGoogleLogin}
                  className="btn bg-white text-black border-[#e5e5e5] w-full shadow"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
              </div>
            </div>

            <div className="basis-1/2">
              <img
                className="w-4/5"
                src={LoginSVG}
                alt="Login image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

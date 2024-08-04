import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";
import toast from "react-hot-toast";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(null);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { signUp, loading, error } = useSignUp();
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6; // Example: Minimum 6 characters
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError("Invalid email address");
      return;
    }
    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    }
    setEmailError("");
    setPasswordError("");
    const user = await signUp(email, password, username, image);
    if (user) {
      toast.success("Account created successfully!");
      navigate("/createtrip");
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-2xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 mt-10 border-1">
      <div className="w-full">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900">SignUp</h1>
          <p className="mt-2 text-gray-500">Create an account!</p>
        </div>
        <div className="mt-5">
          <form onSubmit={handleSignUp}>
            <div className="relative mt-6">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className={`peer mt-1 w-full border-b-2 px-0 py-1 placeholder:text-transparent focus:outline-none ${emailError ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-gray-500"}`}
                autoComplete="NA"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => {
                  if (!validateEmail(email)) setEmailError("Invalid email address");
                  else setEmailError("");
                }}
              />
              <label
                htmlFor="email"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Email Address
              </label>
              {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            </div>
            <div className="relative mt-6">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className={`peer mt-1 w-full border-b-2 px-0 py-1 placeholder:text-transparent focus:outline-none ${passwordError ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-gray-500"}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => {
                  if (!validatePassword(password)) setPasswordError("Password must be at least 6 characters long");
                  else setPasswordError("");
                }}
              />
              <label
                htmlFor="password"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Password
              </label>
              {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
            </div>
            <div className="relative mt-6">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label
                htmlFor="username"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Username
              </label>
            </div>
            <div className="relative mt-6">
              <input
                type="file"
                name="image"
                id="image"
                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <label
                htmlFor="image"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Profile Picture
              </label>
            </div>
            <div className="my-6">
              <button
                type="submit"
                className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                disabled={loading || emailError || passwordError}
              >
                SignUp
              </button>
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <Link to={"/login"}>
              <p className="text-center text-sm text-gray-500">
                Already have an account?
                <span className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">
                  Login
                </span>
                .
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

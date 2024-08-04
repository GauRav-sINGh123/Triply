import React, { useState } from "react";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { auth } from "@/config/firebase";
import toast from "react-hot-toast";
import useUserDetails from "@/hooks/useUserDetails";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { userDetails } = useUserDetails();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = async () => {
    setDropdownOpen(false);
    await logout(auth);
    navigate("/");
    toast.success("Logged out successfully");
  };

  return (
    <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <div className="flex items-center">
          <p className="text-2xl font-bold">Triply</p>
        </div>
        <div className="flex items-center lg:order-2">
          {user ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src={userDetails?.imageUrl || "/user.png"}
                  alt="User avatar"
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                  <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    {userDetails?.email || "User"}
                  </p>
                  <Link
                    to="/createtrip"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Create Trip
                  </Link>
                  <Link
                    to="/savedtrips"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    My Trips
                  </Link>
                  <Link
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <Button className="hover:scale-105 transition-all ease-in-out px-7">
                Login
              </Button>
            </Link>
          )}
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-6 h-6 ${menuOpen ? "hidden" : "block"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className={`w-6 h-6 ${menuOpen ? "block" : "hidden"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
            menuOpen ? "block" : "hidden"
          }`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link to="/">
                <p
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded lg:bg-transparent hover:bg-gray-200 lg:hover:bg-transparent lg:p-0 dark:text-white cursor-pointer hover:scale-105 transition-all ease-in-out"
                  aria-current="page"
                >
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link to="/features">
                <p className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer hover:scale-105 transition-all ease-in-out">
                  Features
                </p>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <p className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer hover:scale-105 transition-all ease-in-out">
                  Contact
                </p>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <p className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer hover:scale-105 transition-all ease-in-out">
                  About
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import NavLinks from "../NavLinks/NavLinks";
import { Link } from "react-router";
import HeaderLogo from "../../assets/logo.png";
import { LogOut, Menu } from "lucide-react";
import { useAuthContext } from "../../context/Auth/AuthContext";
import UserAvater from "../UserAvater/UserAvater";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, loading } = useAuthContext();

  return (
    <header>
      <div className="navbar bg-base-100 fixed top-0 left-0 right-0 w-full z-99 ">
        <div className="container mx-auto px-5 lg:px-0">
          <div className="flex">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="p-1 lg:hidden"
                >
                  <Menu />
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
                >
                  <NavLinks />
                </ul>
              </div>
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
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 font-semibold">
                <NavLinks />
              </ul>
            </div>
            <div className="navbar-end">
              {loading ? (
                <span className="loading loading-spinner loading-xl text-primary"></span>
              ) : user ? (
                <div className="avatar relative">
                  <div
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2 cursor-pointer"
                  >
                    <img src={user.photoURL} alt="User avater" />
                  </div>
                  {isMenuOpen && <UserAvater />}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="btn btn-primary w-24 text-white"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

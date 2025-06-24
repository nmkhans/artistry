import React, { useState } from "react";
import NavLinks from "../NavLinks/NavLinks";
import { Link } from "react-router";
import HeaderLogo from "../../assets/jug.png";
import { LogOut, Menu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="navbar bg-base-100 shadow-sm">
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
              {/* <Link
                to="/login"
                className="btn btn-primary w-24 text-white"
              >
                Login
              </Link> */}
              <div className="avatar relative">
                <div
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2 cursor-pointer"
                >
                  <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                </div>
                {isMenuOpen && (
                  <div className="bg-base-100 absolute top-12 right-0 p-5 w-[200px] rounded-lg z-9 border border-primary">
                    <div className="py-2 mb-2 text-center font-semibold border-b-2 border-secondary">
                      <Link to="/my-artifacts">My Artifacts</Link>
                    </div>
                    <div className="py-2 mb-2 text-center font-semibold border-b-2 border-secondary">
                      <button className="cursor-pointer flex justify-center w-full">
                        Logout{" "}
                        <span className="ms-2">
                          <LogOut />
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

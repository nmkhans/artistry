import React from "react";
import { Link } from "react-router";
import { useAuthContext } from "../../context/Auth/AuthContext";

const NavLinks = () => {
  const { user, loading } = useAuthContext();
  return (
    <>
      <li>
        <Link className="active:bg-primary!" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="active:bg-primary!" to="/all-artifacts">
          All Artifacts
        </Link>
      </li>
      {!loading && user && (
        <li>
          <Link to="/my-artifacts">My Artifacts</Link>
        </li>
      )}
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/contacts">Contact</Link>
      </li>
    </>
  );
};

export default NavLinks;

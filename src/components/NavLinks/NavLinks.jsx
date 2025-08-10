import React from "react";
import { Link } from "react-router";

const NavLinks = () => {
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
      <li>
        <Link to="/my-artifacts">My Artifacts</Link>
      </li>
    </>
  );
};

export default NavLinks;

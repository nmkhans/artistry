import React from "react";
import { Link } from "react-router";
import { LogOut } from "lucide-react";
import { useAuthContext } from "../../context/Auth/AuthContext";

const UserAvater = () => {
  const { user, logoutUser } = useAuthContext();

  return (
    <div className="bg-base-100 absolute top-12 right-0 p-5 w-[200px] rounded-lg z-9 border border-primary aspect-auto!">
      <div className="py-2 mb-2 text-center font-semibold border-b-2 border-secondary text-[15px]">
        <h3 className="font-semibold text-primary">
          Welcome back <br /> {user.displayName}!
        </h3>
      </div>
      <div className="py-2 mb-2 text-center font-semibold border-b-2 border-secondary text-[15px]">
        <Link className="active:bg-primary!" to="/add-artifacts">
          Add Artifacts
        </Link>
      </div>
      <div className="py-2 mb-2 text-center font-semibold border-b-2 border-secondary text-[15px]">
        <Link to="/liked-artifacts">Liked Artifacts</Link>
      </div>
      <div className="py-2 mb-2 text-center font-semibold border-b-2 border-secondary text-[15px]">
        <button
          onClick={logoutUser}
          className="cursor-pointer flex justify-center w-full"
        >
          Logout{" "}
          <span className="ms-2">
            <LogOut />
          </span>
        </button>
      </div>
    </div>
  );
};

export default UserAvater;

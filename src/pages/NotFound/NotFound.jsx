import React from "react";
import NotFoundImg from "../../assets/notFound.png";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <section className="pt-[120px] pb-[80px]">
      <div className="container mx-auto px-5 lg:px-0">
        <div>
          <img
            className="w-[800px] mx-auto"
            src={NotFoundImg}
            alt="Not found"
          />
        </div>
        <div className="my-10">
          <h3 className="text-2xl font-bold text-center">
            Oops! This Page Not Found
          </h3>
        </div>
        <div className="text-center">
          <Link
            to="/"
            className="btn btn-primary w-48 rounded-4xl text-white"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;

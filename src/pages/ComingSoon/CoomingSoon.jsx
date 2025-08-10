import React from "react";
import { Link } from "react-router";

const CoomingSoon = () => {
  return (
    <section className="pt-[120px] pb-[80px]">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="my-10">
          <h3 className="text-2xl font-bold text-center">
            Cooming Soon!
          </h3>
          <p className="text-center">
            The page you are looking for is cooming soon!
          </p>
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

export default CoomingSoon;

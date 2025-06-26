import React from "react";
import useFetch from "../../hooks/useFetch";
import useAxios from "./../../hooks/useAxios";
import Spinner from "./../Spinner/Spinner";
import ArtifactCard from "../ArtifactCard/ArtifactCard";
import { Link } from "react-router";

const FeaturedArtifacts = () => {
  const { axiosInstance } = useAxios();
  const { data, loading } = useFetch([], async () => {
    const res = await axiosInstance.get(`/artifacts?limit=${6}`);
    return res;
  });

  return (
    <section className="py-[80px]">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary">
            Featured Artifacts
          </h2>
        </div>
        <div>
          {loading ? (
            <div className="text-center">
              <Spinner />
            </div>
          ) : (
            <div>
              {data?.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {data?.map((artifact) => (
                    <ArtifactCard
                      key={artifact._id}
                      artifact={artifact}
                    />
                  ))}
                </div>
              ) : (
                <h3 className="text-2xl font-bold text-center">
                  No Data found!
                </h3>
              )}

              <div className="mt-10 text-center">
                <Link
                  to="/all-artifacts"
                  className="btn btn-primary text-white w-full lg:w-1/5 mx-auto rounded-4xl"
                >
                  See All
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtifacts;

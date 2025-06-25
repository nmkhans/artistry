import React from "react";
import useFetch from "../../hooks/useFetch";
import useAxios from "./../../hooks/useAxios";
import Spinner from "./../Spinner/Spinner";
import ArtifactCard from "../ArtifactCard/ArtifactCard";

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
            <div className="grid grid-cols-4 gap-5">
              {data.map((artifact) => (
                <ArtifactCard
                  key={artifact._id}
                  artifact={artifact}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtifacts;

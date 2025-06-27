import React from "react";
import useAxios from "./../../hooks/useAxios";
import useFetch from "./../../hooks/useFetch";
import { useAuthContext } from "../../context/Auth/AuthContext";
import Spinner from "./../../components/Spinner/Spinner";
import ArtifactCard from "./../../components/ArtifactCard/ArtifactCard";

const LikedArtifacts = () => {
  const { user } = useAuthContext();
  const { axiosInstance } = useAxios();
  const { data, loading } = useFetch([], async () => {
    const res = await axiosInstance.get(
      `artifacts/liked?email=${user?.email}`
    );
    return res;
  });

  return (
    <section className="pt-[120px] pb-[80px]">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="mb-5">
          <h2 className="text-center text-3xl font-bold text-primary">
            Your Liked Artifacts
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
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LikedArtifacts;

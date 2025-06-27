import React from "react";
import ArtifactForm from "./../../components/ArtifactForm/ArtifactForm";
import { useParams } from "react-router";
import { useAuthContext } from "../../context/Auth/AuthContext";
import useAxios from "../../hooks/useAxios";
import useFetch from "../../hooks/useFetch";
import Spinner from "../../components/Spinner/Spinner";

const UpdateArtifacts = () => {
  const { id } = useParams();
  const { user } = useAuthContext();
  const { axiosInstance } = useAxios();
  const { data, loading } = useFetch(
    {},
    async () => {
      const res = await axiosInstance.get(
        `/artifacts/detail/${id}?email=${user.email}`
      );
      return res;
    },
    id
  );

  return (
    <section className="pt-[120px] pb-[80px]">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="mb-10">
          <h2 className="text-center font-bold text-3xl text-primary">
            Update artifact
          </h2>
        </div>
        <div>
          {loading ? (
            <div className="text-center">
              <Spinner />
            </div>
          ) : (
            <ArtifactForm artifactData={data} />
          )}
        </div>
      </div>
    </section>
  );
};

export default UpdateArtifacts;

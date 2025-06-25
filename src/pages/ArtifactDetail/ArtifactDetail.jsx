import React from "react";
import { useParams } from "react-router";
import useAxios from "./../../hooks/useAxios";
import useFetch from "./../../hooks/useFetch";
import Spinner from "./../../components/Spinner/Spinner";
import AuthorImage from "../../assets/author.jpg";

const ArtifactDetail = () => {
  const { id } = useParams();
  const { axiosInstance } = useAxios();
  const { data, loading } = useFetch(
    {},
    async () => {
      const res = await axiosInstance.get(`/artifacts/detail/${id}`);
      return res;
    },
    id
  );

  return (
    <section className="pt-[120px] pb-[80px]">
      <div className="container mx-auto px-5 lg:px-0">
        {loading ? (
          <div className="text-center">
            <Spinner />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
              <div className="w-[300px] p-2 bg-secondary rounded-lg">
                <img
                  className="w-full"
                  src={data?.artifactImage}
                  alt="Artifact image"
                />
              </div>

              <div className="mt-5">
                <p className="text-slate-600">
                  Description: {data?.shortDescription}
                </p>
              </div>

              <div className="mt-5">
                <p className="text-slate-600">
                  Historical context: {data?.historicalContext}
                </p>
              </div>

              <div className="mt-5">
                <p className="text-slate-600">
                  Discovered By: {data?.discoveredBy}
                </p>
              </div>

              <div className="mt-5">
                <div className="flex items-center gap-5">
                  <div className="avatar">
                    <div className="w-18 rounded-full">
                      <img src={AuthorImage} alt="Author" />
                    </div>
                  </div>
                  <div className="text-slate-600 text-[15px]">
                    <p>Author: {data?.authorName}</p>
                    <p>Author email: {data?.authorEmail}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-secondary p-5 rounded-xl">
              <div className="mb-5">
                <h3 className="text-3xl font-bold text-primary">
                  {data?.artifactName}
                </h3>
              </div>

              <div className="text-slate-600 font-bold mb-5">
                <p>Artifact type: {data?.artifactType}</p>
              </div>

              <div className="text-slate-600 font-bold mb-5">
                <p>Created At: {data?.createdAt}</p>
              </div>

              <div className="text-slate-600 font-bold mb-5">
                <p>Discovered At: {data?.discoveredAt}</p>
              </div>

              <div className="text-slate-600 font-bold mb-5">
                <p>Discovered By: {data?.discoveredBy}</p>
              </div>

              <div className="text-slate-600 font-bold mb-5">
                <p>Present Location: {data?.presentLocation}</p>
              </div>

              <div className="text-slate-600 font-bold mb-10">
                <p>Likes: {data?.likes?.length}</p>
              </div>

              <div className="text-slate-600 font-bold mb-5">
                <button className="btn btn-primary w-full text-white rounded-4xl">
                  Like This Artifact
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArtifactDetail;

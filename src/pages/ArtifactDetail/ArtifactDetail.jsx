import React from "react";
import { useParams } from "react-router";
import useAxios from "./../../hooks/useAxios";
import useFetch from "./../../hooks/useFetch";
import Spinner from "./../../components/Spinner/Spinner";
import AuthorImage from "../../assets/author.jpg";
import { CircleCheckBig, ThumbsUp, ThumbsDown } from "lucide-react";
import { useAuthContext } from "../../context/Auth/AuthContext";
import { toast } from "react-toastify";

const ArtifactDetail = () => {
  const { id } = useParams();
  const { user } = useAuthContext();
  const { axiosInstance } = useAxios();
  const { data, loading, setData } = useFetch(
    {},
    async () => {
      const res = await axiosInstance.get(
        `/artifacts/detail/${id}?email=${user.email}`
      );
      return res;
    },
    id
  );

  const isAuthor = user?.email === data?.authorEmail;
  const isAlreadyLiked = data?.likes?.includes(user?.email);

  const toggleLike = async (id) => {
    const res = await axiosInstance.patch(`/artifacts/like/${id}`, {
      email: user?.email,
    });

    if (res.data.data.acknowledged) {
      setData({
        ...data,
        likes: isAlreadyLiked
          ? [
              ...data.likes.filter(
                (likedEmail) => likedEmail !== user?.email
              ),
            ]
          : [...data.likes, user?.email],
      });

      toast.success(res.data.message);
    }
  };

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
              <div className="w-auto lg:w-[300px] p-2 bg-secondary rounded-lg">
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
            <div className="bg-secondary p-5 rounded-xl relative min-h-[800px]">
              <div className="mb-5">
                <h3 className="text-3xl font-bold text-primary">
                  {data?.artifactName}
                </h3>
              </div>

              <ul className="timeline timeline-vertical absolute w-auto h-auto top-[15%] -left-[250px]">
                <li>
                  <div className="timeline-middle">
                    <span className="text-[15px]">
                      <CircleCheckBig
                        size="20"
                        className="text-primary"
                      />
                    </span>
                  </div>
                  <div className="timeline-end timeline-box text-slate-600 font-bold ">
                    Artifact type: {data?.artifactType}
                  </div>
                  <hr className="bg-slate-700 pb-5" />
                </li>
                <li>
                  <hr className="bg-slate-700" />
                  <div className="timeline-middle">
                    <span className="text-[15px]">
                      <CircleCheckBig
                        size="20"
                        className="text-primary"
                      />
                    </span>
                  </div>
                  <div className="timeline-end timeline-box text-slate-600 font-bold ">
                    Created At: {data?.createdAt}
                  </div>
                  <hr className="bg-slate-700 pb-5" />
                </li>
                <li>
                  <hr className="bg-slate-700" />
                  <div className="timeline-middle">
                    <span className="text-[15px]">
                      <CircleCheckBig
                        size="20"
                        className="text-primary"
                      />
                    </span>
                  </div>
                  <div className="timeline-end timeline-box text-slate-600 font-bold ">
                    Discovered At: {data?.discoveredAt}
                  </div>
                  <hr className="bg-slate-700 pb-5" />
                </li>
                <li>
                  <hr className="bg-slate-700" />
                  <div className="timeline-middle">
                    <span className="text-[15px]">
                      <CircleCheckBig
                        size="20"
                        className="text-primary"
                      />
                    </span>
                  </div>
                  <div className="timeline-end timeline-box text-slate-600 font-bold ">
                    Discovered By: {data?.discoveredBy}
                  </div>
                  <hr className="bg-slate-700 pb-5" />
                </li>
                <li>
                  <hr className="bg-slate-700" />
                  <div className="timeline-middle">
                    <span className="text-[15px]">
                      <CircleCheckBig
                        size="20"
                        className="text-primary"
                      />
                    </span>
                  </div>
                  <div className="timeline-end timeline-box text-slate-600 font-bold ">
                    Present Location: {data?.presentLocation}
                  </div>
                  <hr className="bg-slate-700 pb-5" />
                </li>
                <li>
                  <hr className="bg-slate-700 pt-5" />
                  <div className="timeline-middle">
                    <span className="text-[15px]">
                      <CircleCheckBig
                        size="20"
                        className="text-primary"
                      />
                    </span>
                  </div>
                  <div className="timeline-end timeline-box text-slate-600 font-bold ">
                    Likes: {data?.likes?.length}
                  </div>
                </li>
              </ul>

              <div className="text-slate-600 font-bold mb-5 absolute bottom-[20%] left-0 right-0 w-full p-5">
                <button
                  disabled={isAuthor}
                  onClick={() => toggleLike(data?._id)}
                  className="btn btn-primary w-full text-white rounded-4xl"
                >
                  {isAuthor ? (
                    "Author can not like own post."
                  ) : isAlreadyLiked ? (
                    <>
                      <ThumbsDown /> Dislike This Artifact
                    </>
                  ) : (
                    <>
                      <ThumbsUp /> Like This Artifact
                    </>
                  )}
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

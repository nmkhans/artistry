import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import useAxios from "../../hooks/useAxios";
import ArtifactCard from "../../components/ArtifactCard/ArtifactCard";
import Spinner from "../../components/Spinner/Spinner";
import { MoveLeft, Search } from "lucide-react";
import { toast } from "react-toastify";

const AllArtifacts = () => {
  const [search, setSearch] = useState("");

  const { axiosInstance } = useAxios();
  const { data, loading } = useFetch(
    [],
    async () => {
      const res = await axiosInstance.get(
        `/artifacts?limit=${0}&searchTerm=${search}`
      );
      return res;
    },
    search
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value;

    if (searchTerm !== "") {
      setSearch(searchTerm);
    } else {
      toast.warning("Please enter something to search");
      return;
    }
  };

  return (
    <section className="pt-[120px] pb-[80px]">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="text-center mb-10">
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset w-full">
              <div className="join justify-center">
                <input
                  type="search"
                  name="search"
                  className="input join-item w-auto lg:w-[600px]"
                  placeholder="Craft name"
                />
                <button className="btn btn-primary text-white join-item">
                  <Search />
                </button>
              </div>
            </fieldset>
          </form>
        </div>
        <div>
          {loading ? (
            <div className="text-center">
              <Spinner />
            </div>
          ) : (
            <div>
              <div className="mb-5">
                <button
                  onClick={() => setSearch("")}
                  className="btn btn-primary btn-outline rounded-4xl"
                >
                  <MoveLeft /> Back
                </button>
              </div>
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

export default AllArtifacts;

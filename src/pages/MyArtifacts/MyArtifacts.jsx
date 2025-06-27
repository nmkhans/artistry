import React from "react";
import { useAuthContext } from "../../context/Auth/AuthContext";
import useAxios from "../../hooks/useAxios";
import useFetch from "../../hooks/useFetch";
import ArtifactCard from "../../components/ArtifactCard/ArtifactCard";
import Spinner from "../../components/Spinner/Spinner";
import ArtifactTableItem from "../../components/ArtifactTableItem/ArtifactTableItem";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const MyArtifacts = () => {
  const { user } = useAuthContext();
  const { axiosInstance } = useAxios();
  const navigate = useNavigate();
  const { data, loading, setData } = useFetch([], async () => {
    const res = await axiosInstance.get(
      `artifacts/author?email=${user?.email}`
    );
    return res;
  });

  const handleArtifactDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosInstance.delete(
          `/artifacts/delete/${id}?email=${user.email}`
        );

        if (res.data.data.acknowledged) {
          const nextData = data.filter((item) => item._id !== id);

          setData([...nextData]);

          Swal.fire({
            title: "Deleted!",
            text: res.data.message,
            icon: "success",
          });
          navigate("/all-artifacts");
        }
      }
    });
  };

  return (
    <section className="pt-[120px] pb-[80px]">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="mb-5">
          <h2 className="text-center text-3xl font-bold text-primary">
            Your Posted Artifacts
          </h2>
        </div>
        <div>
          {loading ? (
            <div className="text-center">
              <Spinner />
            </div>
          ) : (
            <>
              {data?.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Discover Info</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.map((artifact) => (
                        <ArtifactTableItem
                          key={artifact._id}
                          artifact={artifact}
                          onDelete={handleArtifactDelete}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <h3 className="text-2xl font-bold text-center">
                  No Data found!
                </h3>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyArtifacts;

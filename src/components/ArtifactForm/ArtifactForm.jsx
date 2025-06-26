import React, { useState } from "react";
import { useAuthContext } from "../../context/Auth/AuthContext";
import useAxios from "../../hooks/useAxios";
import { toast } from "react-toastify";

const initialData = {
  artifactName: "",
  artifactImage: "",
  artifactType: "default",
  historicalContext: "",
  shortDescription: "",
  createdAt: "",
  discoveredAt: "",
  discoveredBy: "",
  presentLocation: "",
  likes: [],
  authorName: "",
  authorEmail: "",
};

const ArtifactForm = () => {
  const { user } = useAuthContext();
  const [data, setData] = useState({
    ...initialData,
    authorName: user?.displayName,
    authorEmail: user?.email,
  });
  const { axiosInstance } = useAxios();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axiosInstance.post("/artifacts/create", data);

    if (res.data.data.acknowledged) {
      toast.success(res.data.message);
      setData({
        ...initialData,
        authorName: user?.displayName,
        authorEmail: user?.email,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full md:w-3/5 lg:w-3/5 border p-4 mx-auto">
        <div className="mb-2">
          <label className="label inline-block mb-2">
            Artifact name
          </label>
          <input
            type="text"
            name="artifactName"
            className="input w-full"
            placeholder="Rose stone"
            value={data?.artifactName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <label className="label inline-block mb-2">
            Artifact image
          </label>
          <input
            type="url"
            name="artifactImage"
            className="input w-full"
            placeholder="https://example.com"
            value={data?.artifactImage}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <label className="label inline-block mb-2">
            Artifact type
          </label>
          <select
            className="select w-full"
            name="artifactType"
            value={data?.artifactType}
            onChange={handleChange}
          >
            <option value="default" disabled={true}>
              Pick a type
            </option>
            <option value="Writings">Writings</option>
            <option value="Documents">Documents</option>
            <option value="Weapons">Weapons</option>
            <option value="Tools">Tools</option>
          </select>
        </div>

        <div className="mb-2">
          <label className="label inline-block mb-2">
            Artifact historical context
          </label>
          <textarea
            className="textarea w-full"
            name="historicalContext"
            placeholder="One upon time there was a ....."
            value={data?.historicalContext}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-2">
          <label className="label inline-block mb-2">
            Artifact short description
          </label>
          <textarea
            className="textarea w-full"
            name="shortDescription"
            placeholder="A quick short description"
            value={data?.shortDescription}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-2">
          <label className="label inline-block mb-2">
            Created at
          </label>
          <input
            type="text"
            name="createdAt"
            className="input w-full"
            placeholder="200 BC"
            value={data?.createdAt}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <label className="label inline-block mb-2">
            Discovered at
          </label>
          <input
            type="text"
            name="discoveredAt"
            className="input w-full"
            placeholder="1629"
            value={data?.discoveredAt}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <label className="label inline-block mb-2">
            Discovered by
          </label>
          <input
            type="text"
            name="discoveredBy"
            className="input w-full"
            placeholder="John doe"
            value={data?.discoveredBy}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <label className="label inline-block mb-2">
            Present location
          </label>
          <input
            type="text"
            name="presentLocation"
            className="input w-full"
            placeholder="Dhaka, Bangladesh"
            value={data?.presentLocation}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-x-5 mb-2">
          <div className="w-full">
            <div className="mb-2">
              <label className="label inline-block mb-2">
                Author name
              </label>
              <input
                disabled={true}
                type="text"
                className="input w-full disabled:border-gray-300 disabled:bg-white text-slate-600"
                value={data?.authorName}
              />
            </div>
          </div>
          <div className="w-full">
            <div className="mb-2">
              <label className="label inline-block mb-2">
                Author email
              </label>
              <input
                disabled={true}
                type="text"
                className="input w-full disabled:border-gray-300 disabled:bg-white text-slate-600"
                value={data?.authorEmail}
              />
            </div>
          </div>
        </div>
        <div>
          <button className="btn btn-primary w-full rounded-4xl text-white">
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default ArtifactForm;

import React from "react";
import { Link } from "react-router";

const ArtifactCard = ({ artifact }) => {
  return (
    <div className="bg-secondary rounded-lg p-5 border border-transparent  hover:border-gray-500 transition-all">
      <div className="text-center">
        <img
          className="w-48 h-48 mx-auto"
          src={artifact?.artifactImage}
          alt="Artifact image"
        />
      </div>
      <div>
        <h3 className="text-lg text-primary font-semibold mt-5">
          Craft: {artifact.artifactName}
        </h3>
        <p className="mt-5 text-slate-600">
          In short: {artifact.shortDescription}
        </p>
        <p className="mt-5 text-slate-600 font-bold">
          Likes: {artifact.likes.length}
        </p>
      </div>
      <div className="mt-5">
        <Link
          to={`/artifact-detail/${artifact._id}`}
          className="btn btn-primary btn-outline hover:btn-primary rounded-4xl w-full"
        >
          View Detail
        </Link>
      </div>
    </div>
  );
};

export default ArtifactCard;

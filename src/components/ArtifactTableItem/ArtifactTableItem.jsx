import React from "react";
import { Eye, Pencil, Trash } from "lucide-react";
import { Link } from "react-router";

const ArtifactTableItem = ({ artifact, onDelete }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={artifact?.artifactImage} alt="artifact img" />
            </div>
          </div>
          <div>
            <div className="font-bold">{artifact?.artifactName}</div>
            <div className="text-sm opacity-50">
              {artifact?.artifactType}
            </div>
          </div>
        </div>
      </td>
      <td>{artifact.shortDescription}</td>
      <td>
        <div>
          <div className="text-sm opacity-100">
            {artifact?.discoveredBy}
          </div>
          <div className="text-sm opacity-100">
            {artifact?.presentLocation}
          </div>
        </div>
      </td>
      <td className="space-x-3">
        <Link
          to={`/artifact-detail/${artifact._id}`}
          className="btn bg-blue-500 text-white"
        >
          <Eye size={16} />
        </Link>
        <Link
          to={`/update-artifacts/${artifact._id}`}
          className="btn bg-yellow-500 text-white"
        >
          <Pencil size={16} />
        </Link>
        <button
          onClick={() => onDelete(artifact._id)}
          className="btn bg-red-500 text-white"
        >
          <Trash size={16} />
        </button>
      </td>
    </tr>
  );
};

export default ArtifactTableItem;

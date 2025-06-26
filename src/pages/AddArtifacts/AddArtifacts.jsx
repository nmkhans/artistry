import React from "react";
import ArtifactForm from "../../components/ArtifactForm/ArtifactForm";

const AddArtifacts = () => {
  return (
    <section className="pt-[120px] pb-[80px]">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="mb-10">
          <h2 className="text-center font-bold text-3xl text-primary">
            Add new artifacts
          </h2>
        </div>
        <div>
          <ArtifactForm />
        </div>
      </div>
    </section>
  );
};

export default AddArtifacts;

import React from "react";
import Banner from "../../components/Banner/Banner";
import FeaturedArtifacts from "../../components/FeaturedArtifacts/FeaturedArtifacts";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import CTA from "../../components/CTA/CTA";

const Home = () => {
  return (
    <>
      <Banner />
      <CTA />
      <FeaturedArtifacts />
      <NewsLetter />
    </>
  );
};

export default Home;

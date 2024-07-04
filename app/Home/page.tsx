import React from "react";
import Hero from "../Section/Hero/Hero";
import Metrics from "../Section/Metrics/Metrics";
import AppsDisplay from "../Section/AppsDisplay/AppsDisplay";
import Community from "../Section/Community/Community";
import Streets from "../Section/Streets/Streets";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <Metrics />
      <AppsDisplay />
      <Community />
      <Streets />
    </div>
  );
};

export default Home;

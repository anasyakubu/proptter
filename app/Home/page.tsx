import React from "react";
import Hero from "../Section/Hero/Hero";
import Metrics from "../Section/Metrics/Metrics";
import AppsDisplay from "../Section/AppsDisplay/AppsDisplay";
import Community from "../Section/Community/Community";
import Streets from "../Section/Streets/Streets";
import Join from "../Section/Join/Join";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <Metrics />
      <AppsDisplay />
      <Community />
      <Streets />
      <Join />
    </div>
  );
};

export default Home;

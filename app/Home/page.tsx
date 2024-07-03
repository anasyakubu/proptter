import React from "react";
import Hero from "../Section/Hero/Hero";
import Metrics from "../Section/Metrics/Metrics";
import AppsDisplay from "../Section/AppsDisplay/AppsDisplay";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <Metrics />
      <AppsDisplay />
    </div>
  );
};

export default Home;

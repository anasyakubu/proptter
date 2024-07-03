import React from "react";
import "./Metrics.scss";
import MetricsCard from "@/app/Components/MetricsCard/MetricsCard";

const Metrics = () => {
  return (
    <div className="Metrics bg-[#f8f8f8] text-black">
      <div className="p-32 py-10">
        <div className="py-3">
          <h6 className="text-md font-bold">OUR NOT-SO-VANITY METRICS</h6>
        </div>
        <div className="py-5">
          <MetricsCard />
          <MetricsCard />
          <MetricsCard />
        </div>
      </div>
    </div>
  );
};

export default Metrics;

import React from "react";
import "./AppsDisplay.scss";
import AppsCard from "@/app/Components/AppsCard";

const AppsDisplay = () => {
  return (
    <div className="AppsDisplay bg-[#f8f8f8] text-black">
      <div className="p-32 py-10">
        <div className="m-5">
          <h3 className="text-4xl font-semibold">Apps.</h3>
        </div>
        <div className="p-1 space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          <AppsCard />
          <AppsCard />
          <AppsCard />
          <AppsCard />
          <AppsCard />
          <AppsCard />
        </div>
      </div>
    </div>
  );
};

export default AppsDisplay;

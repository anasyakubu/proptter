import StreetsCard from "@/app/Components/StreetsCard";
import React from "react";
import "./Streets.scss";

const Streets = () => {
  return (
    <div className="Streets bg-[#f8f8f8] text-black">
      <div className="p-24">
        <div className="my-10">
          <h3 className="text-lg font-bold">WHAT THE STREETS ARE SAYING</h3>
        </div>
        <div className="my-10">
          <div className="p-1 space-y-2 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
            <StreetsCard />
            <StreetsCard />
            <StreetsCard />
            <StreetsCard />
            <StreetsCard />
            <StreetsCard />
            <StreetsCard />
            <StreetsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Streets;

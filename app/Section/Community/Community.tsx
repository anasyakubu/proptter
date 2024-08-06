import CommunityCard from "@/app/Components/CommunityCard";
import React from "react";
import "./Community.scss";

const Community = () => {
  return (
    <div className="Community text-[#f8f8f8] bg-gray-900">
      <div className="p-32">
        <div className="">
          <div className="">
            <h6 className="text-md" style={{ letterSpacing: "0.7px" }}>
              A Community Build by NYM for NYM Family
            </h6>
            <h3 className="text-5xl mt-3">
              Our site is fully responsive, ensuring a great user experience on
              any device, whether you`re on a desktop, tablet, or smartphone.
            </h3>
            <div className="my-8">
              <button className="p-5 pl-10 pr-10 text-sm bg-[#f8f8f8] text-black rounded-full">
                Signup Today
              </button>
            </div>
          </div>
          <div className="my-10">
            <div className="p-1 space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <CommunityCard />
              <CommunityCard />
              <CommunityCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;

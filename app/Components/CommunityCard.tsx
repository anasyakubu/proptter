import React from "react";
import Computer from "../assets/computer.png";
import Image from "next/image";

const CommunityCard = () => {
  return (
    <div className="CommunityCard">
      <div className="m-1 text-black">
        <Image className="rounded-lg shadow-lg" src={Computer} alt="Image" />
        {/* <div className="my-16"></div> */}
      </div>
    </div>
  );
};

export default CommunityCard;

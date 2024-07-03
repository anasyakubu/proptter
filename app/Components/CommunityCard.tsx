import React from "react";
import Computer from "../assets/computer.png";
import Image from "next/image";

const CommunityCard = () => {
  return (
    <div className="CommunityCard">
      <div className="m-1 bg-white p-5 py-10 text-black rounded-md shadow-sm shadow-white">
        <Image src={Computer} alt="Image" />
        <div className="my-16"></div>
      </div>
    </div>
  );
};

export default CommunityCard;

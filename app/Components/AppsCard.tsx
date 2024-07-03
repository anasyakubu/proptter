import React from "react";
import AppImage from "../assets/invoice.png";
import Image from "next/image";

const AppsCard = () => {
  return (
    <div className="AppsCard">
      <div
        className="m-3 shadow-md rounded-xl"
        // style={{ border: "0.1px solid #999" }}
      >
        <Image className="object-cover" src={AppImage} alt="App Image" />
        {/* <div className="bg-white p-3">
          <h6 className="text-sm font-light">Invoice App</h6>
        </div> */}
      </div>
    </div>
  );
};

export default AppsCard;

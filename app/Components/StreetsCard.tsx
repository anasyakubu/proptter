import React from "react";
import Image from "next/image";
import User from "../assets/user.png";

const StreetsCard = () => {
  return (
    <div className="StreetsCard bg-white shadow-md rounded-lg m-1">
      <div className="p-3">
        <div className="flex gap-3">
          <Image className="w-10" src={User} alt="User" />
          <p className="text-sm">
            <span className="font-bold"> Anas Yakubu</span>
            💯 <br /> <span className="font-light">@anass</span>
          </p>
        </div>
        <div className="my-4">
          <p className="text-sm" style={{ fontSize: "13px" }}>
            Using <span className="text-blue-600 font-bold">Proptter</span> has
            been a game-changer for me. The{" "}
            <span className="text-blue-600 font-bold">federated login</span>{" "}
            feature is incredibly convenient!. The security and ease of access
            with
            <span className="text-blue-600 font-bold">
              {" "}
              federated login
            </span>{" "}
            make this platform my top choice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StreetsCard;

import Nav from "@/app/Components/Nav";
import React from "react";
import Image from "next/image";
import Logo from "../../assets/proptter-trans.png";

const Hero = () => {
  return (
    <div className="Hero bg-[#f8f8f8] text-black">
      <Nav />
      <div className="p-32">
        <div className="flex justify-center text-center">
          <div className="">
            <h6 className="text-md font-bold" style={{ letterSpacing: "1px" }}>
              Federated Login
            </h6>
            <h1 className="text-5xl font-bold mt-3" style={{ fontSize: "5em" }}>
              Simplify Your Online Experience
            </h1>
          </div>
        </div>
        <div className="mt-32 my-16">
          <h6 className="text-lg font-semibold">Federated Login</h6>
          <p className="mt-3">
            Sign in effortlessly with your existing Google, Facebook, or Twitter
            accounts. No need to remember yet another password!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

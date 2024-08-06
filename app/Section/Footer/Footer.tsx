import React from "react";
import "./Footer.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="Footer bg-[#f8f8f8] text-black">
      <div className="p-24 py-20">
        <div className="">
          <div className="p-1 space-y-2 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
            {/* Links */}
            <div className="">
              <h6 className="font-extrabold text-md">SUPPORT</h6>
              <ul
                className="mt-5 text-sm font-normal"
                style={{ lineHeight: "2.2em" }}
              >
                <Link href={"/"}></Link>
                <li>
                  <Link href={"/"}>Contact Us</Link>
                </li>
                <li>
                  <Link href={"/"}>FAQs</Link>
                </li>
                <li>
                  <Link href={"/"}>Help Center</Link>
                </li>
                <li>
                  <Link href={"/"}>Give us Feedback</Link>
                </li>
              </ul>
            </div>
            {/* Links */}
            <div className="">
              <h6 className="font-extrabold text-sm">COMANY</h6>
              <ul
                className="mt-5 text-md font-normal"
                style={{ lineHeight: "2.2em" }}
              >
                <li>
                  <Link href={"/"}>About Us</Link>
                </li>
                <li>
                  <Link href={"/"}>Gallery</Link>
                </li>
                <li>
                  <Link href={"/"}>Careers</Link>
                </li>
                <li>
                  <Link href={"/"}>Blog</Link>
                </li>
              </ul>
            </div>
            {/* Links */}
            <div className="">
              <h6 className="font-extrabold text-sm">LEGAL</h6>
              <ul
                className="mt-5 text-md font-normal"
                style={{ lineHeight: "2.2em" }}
              >
                <li>
                  <Link href={"/"}>Terms of Use</Link>
                </li>
                <li>
                  <Link href={"/"}>Privacy Policy</Link>
                </li>
              </ul>
            </div>
            {/* Links */}
            <div className="">
              <h6 className="font-extrabold text-sm">SOCIALS</h6>
              <ul
                className="mt-5 text-md font-normal"
                style={{ lineHeight: "2.2em" }}
              >
                <li>
                  <Link href={"/"}>Twitter</Link>
                </li>
                <li>
                  <Link href={"/"}>LinkedIn</Link>
                </li>
                <li>
                  <Link href={"/"}>Instagram</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-5 flex justify-center text-center">
            <p className="text-sm font-light">
              2024 <span className="text-blue-600 ">Proptter ID.</span> All
              Right Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

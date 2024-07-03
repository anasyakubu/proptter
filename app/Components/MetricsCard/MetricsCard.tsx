import React from "react";
import "./MetricsCard.scss";

const MetricsCard = () => {
  return (
    <div className="MetricsCard">
      <div className="p-5">
        <div className="flex flex-col md:flex-row gap-6 line">
          {/* Number */}
          <div className="w-full md:w-2/3 py-8">
            <h1 className="text-5xl" style={{ letterSpacing: "2px" }}>
              1,900 + <br />
              VISITORS
            </h1>
          </div>
          {/* Text */}
          <div className="w-full md:w-1/3 mb-8">
            <p>
              Your security is our priority. We use industry-leading practices
              to protect your data and ensure your peace of mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsCard;

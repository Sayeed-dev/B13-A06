import React from "react";

const Stat = () => {
  return (
    <div className="text-whitecontainer mx-auto bg-[#00101f]">
      <div className="container mx-auto py-4 px-4 flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="stat text-center">
          <div className="stat-title text-white">Active Users</div>
          <div className="stat-value text-white">500K</div>
        </div>

        <div className="stat text-center">
          <div className="stat-title text-white">Premium Tools</div>
          <div className="stat-value text-white">200</div>
        </div>

        <div className="stat text-center">
          <div className="stat-title text-white">Rating</div>
          <div className="stat-value text-white">4.9</div>
        </div>
      </div>
    </div>
  );
};

export default Stat;

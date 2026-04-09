import React from "react";
import Background from "../assets/background.jpg";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      className='h-screen w-full bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="container mx-auto text-white px-4 flex flex-col items-start justify-center gap-6 h-screen">
        <button className="btn bg-white/20 hover:bg-white/30 text-white border-none rounded-full">
          New: AI-Powered Tools Available
        </button>
        <h1 className="font-bold text-6xl leading-relaxed">
          Supercharge Your <br />
          Digital Workflow
        </h1>
        <p className="text-xl leading-10">
          Access premium AI tools, design assets, templates,  <br />and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="flex gap-5">
          <button className="btn bg-black/70 hover:bg-black text-white border-none rounded-xl">
            Explore products
          </button>
          <button className="btn bg-white/20 hover:bg-white/30 text-white border-none rounded-xl">
          <FaPlay /> Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

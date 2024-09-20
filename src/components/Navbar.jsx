import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => navigate(-1)}
        className="flex items-center justify-between w-full font-semibold"
      >
        <div onClick={() => navigate(1)} className="flex items-center gap-2">
          <img
            className="w-8 p-2 bg-black cursor-pointer rounded-2xl"
            src={assets.arrow_left}
            alt=""
          />
          <img
            className="w-8 p-2 bg-black cursor-pointer rounded-2xl"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-2">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore Premium
          </p>
          <p className="bg-black text-[15px] px-3 py-1 rounded-2xl cursor-pointer">
            Install App
          </p>
          <p className="flex items-center justify-center text-black bg-purple-500 rounded-full w-7 h-7">
            A
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="px-4 py-1 text-black bg-white cursor-pointer rounded-2xl">
          All
        </p>
        <p className="px-4 py-1 bg-black cursor-pointer rounded-2xl">Music</p>
        <p className="px-4 py-1 bg-black cursor-pointer rounded-2xl">Podcast</p>
      </div>
    </>
  );
};

export default Navbar;

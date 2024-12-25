import React from "react";
import { Link } from "react-router-dom";

export default function BannerAD() {
  return (
    <>
      <div className="mt-20 ml-4  flex flex-col p-5 gap-5">
        <h2>Admin's Dashboard</h2>
        <div className="bg-[url('https://wallpaperaccess.com/full/1575754.jpg')] bg-no-repeat bg-cover p-5 flex flex-col gap-5 rounded-lg shadow-xl">
          <h1 className="text-white">Welcome Back!</h1>
          <p className="font-base text-xl text-white">
            Tech Shop - Your Best Choice
          </p>
          <Link
            to={"/terms"}
            className="
    
            font-semibold
            text-sm
            leading-5
            rounded-[0.375rem]
            px-[32px]
            py-[10px]
          bg-[#24006C]
          text-white
          border-[#484BFC]
          hover:bg-[#484BFC]
          border-solid
            h-max 
            w-max
          "
          >
            Learn More
          </Link>
        </div>
      </div>
    </>
  );
}

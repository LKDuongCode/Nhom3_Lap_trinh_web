import React from "react";
import { Link } from "react-router-dom";

export default function IntroduceWeb() {
  return (
    <div className="w-1/2 h-screen flex flex-col gap-20 pt-14">
      <div className="p-5 flex flex-col gap-5">
        <div className="flex gap-2 items-center">
          <p>
            <img
              className="size-16 rounded-full bg-violet-300"
              src="https://firebasestorage.googleapis.com/v0/b/project-module4-react.appspot.com/o/logoPJ.png?alt=media&token=22c13780-c3e2-4039-b539-f70386cea016"
              alt=""
            />
          </p>
          <p className="text-3xl font-bold mt-2 text-violet-100">
            Duong's Shop
          </p>
        </div>
        <div className="pl-8 flex flex-col gap-10">
          <div className="flex gap-2">
            <div className="p-1 rounded-full  bg-[#6b1cac] w-max h-max flex justify-center items-center">
              <svg
                className="size-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold text-violet-100">
                Seamless Shopping Experience
              </p>
              <div>
                <p className="text-violet-100">
                  Customers can easily navigate your online store and find the
                  products they're looking for with an intuitive and
                  user-friendly interface.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="p-1 rounded-full  bg-[#6b1cac] w-max h-max flex justify-center items-center">
              <svg
                className="size-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold text-violet-100">
                Personalized Recommendations
              </p>
              <div>
                <p className="text-violet-100">
                  Personalized product recommendations based on customer
                  browsing and purchasing history.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="p-1 rounded-full  bg-[#6b1cac] w-max h-max flex justify-center items-center">
              <svg
                className="size-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-semibold text-violet-100">
                Secure and Reliable Checkout
              </p>
              <div>
                <p className="text-violet-100">
                  Advanced security measures, such as encryption and fraud
                  detection, are in place to protect customer data and ensure a
                  safe purchasing experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link
        className="flex items-center gap-2  absolute bottom-48 left-40 "
        to={"/"}
      >
        <svg
          className="h-10 w-10 text-indigo-500 p-1 bg-indigo-300 rounded-full hover:text-indigo-100 hover:bg-indigo-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12" />{" "}
          <polyline points="12 19 5 12 12 5" />
        </svg>
        <span className="font-semibold text-lg text-white">Go Home</span>
      </Link>
      <div className="flex gap-5 pl-16">
        <a href="#" className="text-gray-700 font-semibold">
          About
        </a>
        <a href="#" className="text-gray-700 font-semibold">
          Term & Conditions
        </a>
        <a href="#" className="text-gray-700 font-semibold">
          Contact Us
        </a>
      </div>
    </div>
  );
}

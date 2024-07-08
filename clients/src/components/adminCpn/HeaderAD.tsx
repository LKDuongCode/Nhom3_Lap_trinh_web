import React from "react";
import DropDownAD from "./DropDownAD";
import { useNavigate } from "react-router-dom";

export default function HeaderAD() {
  const navigate = useNavigate();
  //xử lí nút đăng xuất
  let handleLogout = () => {
    //xóa hết trạng thái đăng nhập trên local.
    localStorage.setItem("curEmail", "");
    localStorage.setItem("curRole", "");
    navigate("/adminLogin");
  };

  return (
    <div className="h-20  fixed  flex pr-20 shadow-md  w-full bg-white ">
      <div className="flex-1 flex justify-center items-center">
        <div className="flex items-center gap-3">
          <svg
            className="h-6 w-6 text-[#969AA1]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            placeholder="Type to search..."
            type="text"
            className="border-transparent w-[500px] h-8 text-base py- bg-transparent "
          />
        </div>
      </div>
      {/* ---------------------------------------------------------- */}
      <div className="flex-1 flex gap-8 items-center justify-end">
        <div className="relative bg-[#EFF4FB] rounded-full p-2 flex justify-center items-center">
          <span className="flex h-3 w-3 absolute top-0 right-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
          </span>
          <svg
            className="h-6 w-6 text-slate-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </div>
        <div className="relative bg-[#EFF4FB] rounded-full p-2 flex justify-center items-center">
          <span className="flex h-3 w-3 absolute top-0 right-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
          </span>
          <svg
            className="h-6 w-6 text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </div>
        <div className="relative  items-center ">
          <DropDownAD></DropDownAD>
        </div>

        {/* admin info */}
        <div className="flex gap-5 items-center">
          <div className="w-[150px]">
            <p className="font-semibold">Duong Lee</p>
            <p className="text-sm  text-slate-500">Engineer</p>
          </div>
          <div className="flex items-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/project-module4-react.appspot.com/o/snapedit_1716205947845.jpeg?alt=media&token=8e6be058-0a51-4f05-9375-cc33f41dcd4f"
              alt=""
              className="size-14 rounded-full"
            />
            <div className="relative items-cente h-max">
              {/* điều chỉnh độ dài chiều cao của phần hiện ra thông qua div gần button nhất */}
              <div className="relative group/bouton  ">
                <button className="relative font-semibold py-4 px-3 border-none bg-transparent">
                  <span className=" flex items-center justify-center w-max top-0  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 rotate-90 transition-transform text-slate-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                </button>

                {/* show */}
                <div className="absolute w-full top-full bg-stone-50 origin-top opacity-0 hidden flex-col group-hover/bouton:flex group-hover/bouton:opacity-100 transition-all  min-w-60 right-0">
                  {/* child */}
                  <div className="relative w-full py-3 px-10 hover:bg-stone-300  flex items-center gap-2">
                    <svg
                      className="size-6 text-slate-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <circle cx="12" cy="7" r="4" />{" "}
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                    <p className="text-base">My Profile</p>
                  </div>
                  <div className="relative w-full py-3 px-10 hover:bg-stone-300  flex items-center gap-2 border-solid border-b-stone-200 border-x-transparent border-t-transparent border-b-[1px]">
                    <svg
                      className="h-6 w-6 text-slate-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />{" "}
                      <line x1="13" y1="8" x2="15" y2="8" />{" "}
                      <line x1="13" y1="12" x2="15" y2="12" />
                    </svg>
                    <p className="text-base">My Contact</p>
                  </div>
                  <div
                    className="relative w-full py-3 px-10 hover:bg-stone-300  flex items-center gap-2"
                    onClick={handleLogout}
                  >
                    <svg
                      className="size-6 text-slate-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />{" "}
                      <path d="M7 12h14l-3 -3m0 6l3 -3" />
                    </svg>
                    <p className="text-base">Log-out</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";

export default function ProductsManage() {
  // state quản lí mở đóng form-------------------------------------------
  let [checkSucccess, setCheckSuccess] = useState<boolean>(false);
  let [checkAddForm, setCheckAddForm] = useState<boolean>(false);
  let [checkDelete, setCheckDelete] = useState<boolean>(false);
  // state quản lí mở đóng form-------------------------------------------
  return (
    <>
      <section className="rounded-md  bg-white py-4 shadow-default mt-24 px-5 border-spacing-2 border-stone-300 border-solid mx-5 ">
        <h2 className=" font-semibold bg-indigo-500 px-5 pt-5 rounded-t-md text-white">
          Products Management
        </h2>
        {/* thanh tìm kiếm và số trang phân -----------------------------------*/}
        <div className="flex justify-between items-center border-b-2 border-stone-300 border-solid px-8 py-4 border-x-transparent border-t-transparent bg-indigo-600">
          <div className="w-1/2">
            <input
              type="text"
              className="w-full rounded-md border border-stone-300 border-solid px-5 py-3 outline-none focus:border-blue-500 dark:border-stone-300 text-base font-medium"
              placeholder="Search..."
              defaultValue=""
            />
          </div>
          <div className="flex items-center font-medium">
            <select className="bg-transparent pl-2 border-none outline-none font-medium text-base text-stone-100">
              <option className="text-black" value={5}>
                5
              </option>
              <option className="text-black" value={10}>
                10
              </option>
              <option className="text-black" value={20}>
                20
              </option>
              <option className="text-black" value={50}>
                50
              </option>
            </select>
            <p className="pl-2 text-white dark:text-white">Entries Per Page</p>
          </div>
        </div>
        {/* thanh tìm kiếm và số trang phân -------------------------------------*/}

        {/* bảng */}
        <table
          role="table"
          className="datatable-table w-full table-auto  overflow-hidden break-words px-4 md:table-fixed md:overflow-auto md:px-8 text-gray-600 font-medium "
        >
          <thead>
            <tr role="row">
              <th
                colSpan={1}
                role="columnheader"
                title="Toggle SortBy"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent"
                style={{ cursor: "pointer" }}
              >
                <div className="flex items-center pt-7 pl-2.5 pb-4">
                  <span> Name</span>
                  <div className="ml-2 inline-flex flex-col gap-1">
                    <svg
                      className="fill-current"
                      width={10}
                      height={5}
                      viewBox="0 0 10 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 0L0 5H10L5 0Z" fill="" />
                    </svg>

                    <svg
                      className="fill-current"
                      width={10}
                      height={5}
                      viewBox="0 0 10 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                        fill=""
                      />
                    </svg>
                  </div>
                </div>
              </th>
              <th
                colSpan={1}
                role="columnheader"
                title="Toggle SortBy"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent"
                style={{ cursor: "pointer" }}
              >
                <div className="flex items-center pt-7 pl-2.5 pb-4">
                  <span> Name</span>
                  <div className="ml-2 inline-flex flex-col gap-1">
                    <svg
                      className="fill-current"
                      width={10}
                      height={5}
                      viewBox="0 0 10 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 0L0 5H10L5 0Z" fill="" />
                    </svg>

                    <svg
                      className="fill-current"
                      width={10}
                      height={5}
                      viewBox="0 0 10 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                        fill=""
                      />
                    </svg>
                  </div>
                </div>
              </th>
              <th
                colSpan={1}
                role="columnheader"
                title="Toggle SortBy"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent"
                style={{ cursor: "pointer" }}
              >
                <div className="flex items-center pt-7 pl-2.5 pb-4">
                  <span> Name</span>
                  <div className="ml-2 inline-flex flex-col gap-1">
                    <svg
                      className="fill-current"
                      width={10}
                      height={5}
                      viewBox="0 0 10 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 0L0 5H10L5 0Z" fill="" />
                    </svg>

                    <svg
                      className="fill-current"
                      width={10}
                      height={5}
                      viewBox="0 0 10 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                        fill=""
                      />
                    </svg>
                  </div>
                </div>
              </th>
              <th
                colSpan={1}
                role="columnheader"
                title="Toggle SortBy"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent"
                style={{ cursor: "pointer" }}
              >
                <div className="flex items-center pt-7 pl-2.5 pb-4">
                  <span> Name</span>
                  <div className="ml-2 inline-flex flex-col gap-1">
                    <svg
                      className="fill-current"
                      width={10}
                      height={5}
                      viewBox="0 0 10 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 0L0 5H10L5 0Z" fill="" />
                    </svg>

                    <svg
                      className="fill-current"
                      width={10}
                      height={5}
                      viewBox="0 0 10 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                        fill=""
                      />
                    </svg>
                  </div>
                </div>
              </th>
              <th
                colSpan={1}
                role="columnheader"
                title="Toggle SortBy"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent"
                style={{ cursor: "pointer" }}
              >
                <div className="flex items-center pt-7 pl-2.5 pb-4">
                  <span> Name</span>
                  <div className="ml-2 inline-flex flex-col gap-1">
                    <svg
                      className="fill-current"
                      width={10}
                      height={5}
                      viewBox="0 0 10 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 0L0 5H10L5 0Z" fill="" />
                    </svg>

                    <svg
                      className="fill-current"
                      width={10}
                      height={5}
                      viewBox="0 0 10 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                        fill=""
                      />
                    </svg>
                  </div>
                </div>
              </th>
              <th
                colSpan={1}
                role="columnheader"
                title="Toggle SortBy"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent"
                style={{ cursor: "pointer" }}
              >
                <div className="flex items-center pt-7 pl-2.5 pb-4">
                  <span> Function</span>
                </div>
              </th>
            </tr>
          </thead>

          <tbody role="rowgroup">
            <tr role="row">
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent  "
              >
                <button
                  className="
            border-2
            border-amber-400
            border-solid
            font-semibold
            text-xs
            leading-4
            rounded-3xl
        
            py-1
            bg-transparent
            h-max
            mr-2
            hover:text-white
            hover:bg-amber-300
          "
                >
                  <svg
                    className="h-6 w-16 text-amber-500 hover:text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                    />{" "}
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </button>

                <button
                  className="
            border-2
            border-lime-500
            border-solid
            font-semibold
            text-xs
            leading-4
            rounded-3xl
            bg-transparent
            h-max
            py-1
            mr-2
            hover:bg-lime-400
          "
                >
                  <svg
                    className="h-6 w-16 text-lime-500 hover:text-white "
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
                    <path d="M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1" />
                  </svg>
                </button>
              </td>
            </tr>
            <tr role="row">
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent  "
              >
                <button
                  className="
            border-2
            border-amber-400
            border-solid
            font-semibold
            text-xs
            leading-4
            rounded-3xl
        
            py-1
            bg-transparent
            h-max
            mr-2
            hover:text-white
            hover:bg-amber-300
          "
                >
                  <svg
                    className="h-6 w-16 text-amber-500 hover:text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                    />{" "}
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </button>

                <button
                  className="
            border-2
            border-lime-500
            border-solid
            font-semibold
            text-xs
            leading-4
            rounded-3xl
            bg-transparent
            h-max
            py-1
            mr-2
            hover:bg-lime-400
          "
                >
                  <svg
                    className="h-6 w-16 text-lime-500 hover:text-white "
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
                    <path d="M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1" />
                  </svg>
                </button>
              </td>
            </tr>
            <tr role="row">
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent  "
              >
                <button
                  className="
            border-2
            border-amber-400
            border-solid
            font-semibold
            text-xs
            leading-4
            rounded-3xl
        
            py-1
            bg-transparent
            h-max
            mr-2
            hover:text-white
            hover:bg-amber-300
          "
                >
                  <svg
                    className="h-6 w-16 text-amber-500 hover:text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                    />{" "}
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </button>

                <button
                  className="
            border-2
            border-lime-500
            border-solid
            font-semibold
            text-xs
            leading-4
            rounded-3xl
            bg-transparent
            h-max
            py-1
            mr-2
            hover:bg-lime-400
          "
                >
                  <svg
                    className="h-6 w-16 text-lime-500 hover:text-white "
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
                    <path d="M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1" />
                  </svg>
                </button>
              </td>
            </tr>
            <tr role="row">
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent  "
              >
                <button
                  className="
            border-2
            border-amber-400
            border-solid
            font-semibold
            text-xs
            leading-4
            rounded-3xl
        
            py-1
            bg-transparent
            h-max
            mr-2
            hover:text-white
            hover:bg-amber-300
          "
                >
                  <svg
                    className="h-6 w-16 text-amber-500 hover:text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                    />{" "}
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </button>

                <button
                  className="
            border-2
            border-lime-500
            border-solid
            font-semibold
            text-xs
            leading-4
            rounded-3xl
            bg-transparent
            h-max
            py-1
            mr-2
            hover:bg-lime-400
          "
                >
                  <svg
                    className="h-6 w-16 text-lime-500 hover:text-white "
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
                    <path d="M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1" />
                  </svg>
                </button>
              </td>
            </tr>
            <tr role="row">
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent  "
              >
                <button
                  className="
            border-2
            border-amber-400
            border-solid
            font-semibold
            text-xs
            leading-4
            rounded-3xl
        
            py-1
            bg-transparent
            h-max
            mr-2
            hover:text-white
            hover:bg-amber-300
          "
                >
                  <svg
                    className="h-6 w-16 text-amber-500 hover:text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                    />{" "}
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </button>

                <button
                  className="
            border-2
            border-lime-500
            border-solid
            font-semibold
            text-xs
            leading-4
            rounded-3xl
            bg-transparent
            h-max
            py-1
            mr-2
            hover:bg-lime-400
          "
                >
                  <svg
                    className="h-6 w-16 text-lime-500 hover:text-white "
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
                    <path d="M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1" />
                  </svg>
                </button>
              </td>
            </tr>
            <tr role="row">
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent  "
              >
                <button
                  className="
            border-2
            border-amber-400
            border-solid
            font-semibold
            text-xs
            leading-4
            rounded-3xl
        
            py-1
            bg-transparent
            h-max
            mr-2
            hover:text-white
            hover:bg-amber-300
          "
                >
                  <svg
                    className="h-6 w-16 text-amber-500 hover:text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                    />{" "}
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </button>

                <button
                  className="
            border-2
            border-lime-500
            border-solid
            font-semibold
            text-xs
            leading-4
            rounded-3xl
            bg-transparent
            h-max
            py-1
            mr-2
            hover:bg-lime-400
          "
                >
                  <svg
                    className="h-6 w-16 text-lime-500 hover:text-white "
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
                    <path d="M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1" />
                  </svg>
                </button>
              </td>
            </tr>
            <tr role="row">
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent p-5"
              >
                Brielle Kuphal
              </td>
              <td
                role="cell"
                className="border-[1px] border-solid border-stone-300 border-x-transparent border-t-transparent  "
              >
                <button
                  className="
            border-2
            border-amber-400
            border-solid
            font-semibold
            text-xs
            leading-4
            rounded-3xl
        
            py-1
            bg-transparent
            h-max
            mr-2
            hover:text-white
            hover:bg-amber-300
          "
                >
                  <svg
                    className="h-6 w-16 text-amber-500 hover:text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                    />{" "}
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </button>

                <button
                  className="
            border-2
            border-lime-500
            border-solid
            font-semibold
            text-xs
            leading-4
            rounded-3xl
            bg-transparent
            h-max
            py-1
            mr-2
            hover:bg-lime-400
          "
                >
                  <svg
                    className="h-6 w-16 text-lime-500 hover:text-white "
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
                    <path d="M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1" />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        {/* footer --------------------------------------------------------------*/}
        <div className="flex justify-between   px-8 pt-5">
          <p className="font-medium text-gray-600">Showing 1 0f 3 pages</p>
          <div className="flex">
            <button className="flex cursor-pointer items-center justify-center rounded-md p-1 px-2 hover:bg-indigo-500 hover:text-white border-transparent font-medium text-base">
              <svg
                className="fill-current"
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1777 16.1156C12.009 16.1156 11.8402 16.0593 11.7277 15.9187L5.37148 9.44995C5.11836 9.19683 5.11836 8.80308 5.37148 8.54995L11.7277 2.0812C11.9809 1.82808 12.3746 1.82808 12.6277 2.0812C12.8809 2.33433 12.8809 2.72808 12.6277 2.9812L6.72148 8.99995L12.6559 15.0187C12.909 15.2718 12.909 15.6656 12.6559 15.9187C12.4871 16.0312 12.3465 16.1156 12.1777 16.1156Z"
                  fill=""
                />
              </svg>
            </button>
            <button className="bg-indigo-500 text-white mx-1 flex cursor-pointer items-center justify-center rounded-md p-1 px-3 hover:bg-indigo-500 hover:text-white border-transparent text-base font-medium ">
              1
            </button>
            <button className="false mx-1 flex cursor-pointer items-center justify-center rounded-md p-1 px-3 hover:bg-indigo-500 hover:text-white border-transparent text-base font-medium ">
              2
            </button>
            <button className="false mx-1 flex cursor-pointer items-center justify-center rounded-md p-1 px-3 hover:bg-indigo-500 hover:text-white border-transparent text-base font-medium ">
              3
            </button>
            <button className="flex cursor-pointer items-center justify-center rounded-md p-1 px-2 hover:bg-indigo-500 hover:text-white border-transparent text-base font-medium ">
              <svg
                className="fill-current"
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.82148 16.1156C5.65273 16.1156 5.51211 16.0593 5.37148 15.9468C5.11836 15.6937 5.11836 15.3 5.37148 15.0468L11.2777 8.99995L5.37148 2.9812C5.11836 2.72808 5.11836 2.33433 5.37148 2.0812C5.62461 1.82808 6.01836 1.82808 6.27148 2.0812L12.6277 8.54995C12.8809 8.80308 12.8809 9.19683 12.6277 9.44995L6.27148 15.9187C6.15898 16.0312 5.99023 16.1156 5.82148 16.1156Z"
                  fill=""
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      {/* add form */}
      {checkAddForm && (
        <div className="addModal">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            {/* close */}
            <p
              className="float-right p-4"
              onClick={() => {
                setCheckAddForm(false);
              }}
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </p>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white uppercase text-center">
                add a new product
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 border-solid text-gray-900 rounded-lg  focus:border-blue-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 border-solid text-gray-900 rounded-lg  focus:border-blue-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 border-solid text-gray-900 rounded-lg  focus:border-blue-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                  />
                </div>

                <button
                  onClick={() => {
                    setCheckAddForm(false);
                  }}
                  type="submit"
                  className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:bg-indigo-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center border-transparent"
                >
                  ADD
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* delete modal */}
      {checkDelete && (
        <div className="z-[0]">
          {/* modal delete */}

          <div
            className={`relative ${checkDelete ? "z-[1]" : "z-[-1]"}`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div
              className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
                checkDelete
                  ? "ease-out duration-300 opacity-100 "
                  : "ease-in duration-200 opacity-0"
              } `}
            ></div>

            <div
              className={`fixed inset-0 z-10 w-screen overflow-y-auto  ${
                checkDelete
                  ? "ease-out duration-300 opacity-100 "
                  : "ease-in duration-200 opacity-0 "
              }`}
            >
              <div
                className={`flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ${
                  checkDelete
                    ? "ease-out duration-300  translate-y-0 sm:scale-100 "
                    : "ease-in duration-200  translate-y-4 sm:translate-y-0 sm:scale-95 "
                }`}
              >
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg
                          className="h-6 w-6 text-red-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                          />
                        </svg>
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <h3
                          className="text-base font-semibold leading-6 text-gray-900"
                          id="modal-title"
                        >
                          Warning
                        </h3>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Are you sure you want to delete? All of your data
                            will be permanently removed. This action cannot be
                            undone.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className=" border-none inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={() => {
                        setCheckDelete(false);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className=" border-none mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => {
                        setCheckDelete(false);
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* success modal */}
      {checkSucccess && (
        <div
          className={`relative ${checkSucccess ? "z-10" : "z-[-1]"}`}
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
          onClick={() => setCheckSuccess(false)}
        >
          <div
            className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
              checkSucccess
                ? "ease-out duration-300 opacity-100 "
                : "ease-in duration-200 opacity-0"
            } `}
          ></div>

          <div
            className={`fixed inset-0 z-10 w-screen overflow-y-auto  ${
              checkSucccess
                ? "ease-out duration-300 opacity-100 "
                : "ease-in duration-200 opacity-0 "
            }`}
          >
            <div
              className={`flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0  ${
                checkSucccess
                  ? "ease-out duration-300  translate-y-0 sm:scale-100 "
                  : "ease-in duration-200  translate-y-4 sm:translate-y-0 sm:scale-95 "
              }`}
            >
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-96">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
                  <div className="sm:flex flex-col gap-4 sm:items-center">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        className="h-6 w-6 text-green-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 ">
                      <h3
                        className="text-base text-center font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Successful
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500 text-center">
                          Are you sure you want to delete? All of your data will
                          be permanently removed. This action cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

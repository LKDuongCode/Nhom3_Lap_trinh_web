import React from "react";

export default function () {
  return (
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
                    <path d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z" fill="" />
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
                    <path d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z" fill="" />
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
                    <path d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z" fill="" />
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
                    <path d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z" fill="" />
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
                    <path d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z" fill="" />
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
  );
}

import React from "react";

export default function StatisticsAD() {
  return (
    <>
      <div className=" ml-4 grid grid-cols-[1fr,1fr,1fr,2fr]  mt-4 gap-2 p-5 grid-rows-[1fr 1fr] grid-flow-row ">
        <div className="shadow-md p-2 flex flex-col gap-5">
          <p className="font-semibold text-center ">Total Profit</p>
          <div className="flex items-center justify-center gap-5">
            <p className="bg-indigo-100 rounded-full w-max flex justify-center items-center p-2">
              <svg
                className="h-8 w-8 text-indigo-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </p>
            <h2>300,000,000</h2>
          </div>
        </div>
        <div className="shadow-md p-2 flex flex-col gap-5">
          <p className="font-semibold text-center ">Total Users</p>
          <div className="flex items-center justify-center gap-5">
            <p className="bg-indigo-100 rounded-full w-max flex justify-center items-center p-2">
              <svg
                className="h-8 w-8 text-indigo-500"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="9" cy="7" r="4" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
              </svg>
            </p>
            <h2>100,000,120</h2>
          </div>
        </div>
        <div className="shadow-md p-2 flex flex-col gap-5">
          <p className="font-semibold text-center ">Total Products</p>
          <div className="flex items-center justify-center gap-5">
            <p className="bg-indigo-100 rounded-full w-max flex justify-center items-center p-2">
              <svg
                className="h-8 w-8 text-indigo-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </p>
            <h2>1,234,500,000</h2>
          </div>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg row-span-2">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  username
                </th>
                <th scope="col" className="px-6 py-3">
                  joining time
                </th>
                <th scope="col" className="px-6 py-3">
                  total payment
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  1
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">17/12/2003</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  1
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">17/12/2003</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  1
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">17/12/2003</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  1
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">17/12/2003</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  1
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">17/12/2003</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="shadow-md col-span-3 bg-[url('https://www.technocrazed.com/wp-content/uploads/2015/12/HD-purple-wallpaper-image-to-use-as-background-121.jpg')] p-5 rounded-b-lg flex flex-col gap-4 bg-cover">
          <h1 className="text-white">Attention Notices</h1>
          <p className="text-white">
            Includes the latest information about updated versions,
            corrections,...
          </p>
          <div>
            <button
              className="
    
            font-semibold
            text-sm
            leading-5
            rounded-[0.375rem]
            px-[32px]
            py-[6px]
          bg-[#24006C]
          text-white
          border-[#484BFC]
          hover:bg-[#484BFC]
          border-solid
            h-max 
            w-max
            float-right
          "
            >
              Go to about us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

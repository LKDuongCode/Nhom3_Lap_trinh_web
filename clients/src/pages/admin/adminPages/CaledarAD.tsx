import React from "react";

export default function CaledarAD() {
  return (
    <div className="mt-24 p-4 bg-[#F1F5F9] h-full">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          Calendar
        </h2>
        <nav>
          <ol className="flex items-center gap-2">
            <li>
              <a className="font-medium" href="/">
                Dashboard /
              </a>
            </li>
            <li className="font-medium text-primary">Calendar</li>
          </ol>
        </nav>
      </div>
      {/* ------------------------------------------------------------------ */}

      <div className="w-full max-w-full rounded-sm border-2  border-solid border-stone-300 border-solid-300 bg-white shadow-lg ">
        <table className="w-full">
          <thead>
            <tr className="grid grid-cols-7 rounded-t-sm bg-indigo-500 text-white">
              <th className="flex h-15 items-center justify-center rounded-tl-sm p-1 text-xs font-semibold sm:text-base xl:p-5">
                <span className="hidden lg:block"> Sunday </span>
                <span className="block lg:hidden"> Sun </span>
              </th>
              <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <span className="hidden lg:block"> Monday </span>
                <span className="block lg:hidden"> Mon </span>
              </th>
              <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <span className="hidden lg:block"> Tuesday </span>
                <span className="block lg:hidden"> Tue </span>
              </th>
              <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <span className="hidden lg:block"> Wednesday </span>
                <span className="block lg:hidden"> Wed </span>
              </th>
              <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <span className="hidden lg:block"> Thursday </span>
                <span className="block lg:hidden"> Thur </span>
              </th>
              <th className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5">
                <span className="hidden lg:block"> Friday </span>
                <span className="block lg:hidden"> Fri </span>
              </th>
              <th className="flex h-15 items-center justify-center rounded-tr-sm p-1 text-xs font-semibold sm:text-base xl:p-5">
                <span className="hidden lg:block"> Saturday </span>
                <span className="block lg:hidden"> Sat </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="grid grid-cols-7">
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black black:text-white">
                  1
                </span>
                <div className="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30">
                  <span className="group-hover:text-indigo-500 md:hidden">
                    More
                  </span>
                  <div className="event invisible  left-2 z-50 mb-1 flex w-[200%] flex-col rounded-sm border-l-[3px] border-solid border-y-transparent border-r-transparent border-indigo-500 bg-gray-100 px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[190%] md:opacity-100">
                    <span className="event-name text-sm font-semibold text-black dark:text-white">
                      Redesign Website
                    </span>
                    <span className="time text-sm font-medium text-black dark:text-white">
                      1 Dec - 2 Dec
                    </span>
                  </div>
                </div>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300 dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  2
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300  dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  3
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300 dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  4
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300  dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  5
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300  dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  6
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300 dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  7
                </span>
              </td>
            </tr>
            <tr className="grid grid-cols-7">
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300  dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  8
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300  dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  9
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300  dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  10
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300  dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  11
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300  dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  12
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300  dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  13
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300  dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  14
                </span>
              </td>
            </tr>
            <tr className="grid grid-cols-7">
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300  dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  15
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300  dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  16
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300  dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  17
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300  dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  18
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300  dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  19
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300  dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  20
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300  dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  21
                </span>
              </td>
            </tr>
            <tr className="grid grid-cols-7">
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300  dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  22
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300  dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  23
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300  dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  24
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300  dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  25
                </span>
                <div className="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30">
                  <span className="group-hover:text-primary md:hidden">
                    More
                  </span>
                  <div className="event invisible  left-2 z-50 mb-1 flex w-[300%] flex-col rounded-sm border-l-[3px] border-solid border-y-transparent border-r-transparent border-indigo-500 bg-gray-100 px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[290%] md:opacity-100">
                    <span className="event-name text-sm font-semibold text-black dark:text-white">
                      App Design
                    </span>
                    <span className="time text-sm font-medium text-black dark:text-white">
                      25 Dec - 27 Dec
                    </span>
                  </div>
                </div>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300  dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  26
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300  dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  27
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300  dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  28
                </span>
              </td>
            </tr>
            <tr className="grid grid-cols-7">
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300  dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  29
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300  dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  30
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300  dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  31
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300 b dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  1
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300 dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  2
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300  dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  3
                </span>
              </td>
              <td className="ease relative h-20 cursor-pointer border border-stone-300 border-solid  p-2 transition duration-500 hover:bg-gray-100 dark:border-stone-300  dark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  4
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

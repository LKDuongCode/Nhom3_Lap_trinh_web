export default function ProductList() {
  return (
    <div>
      <div className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg shadow-md mb-12 flex justify-between bg-white p-4 ">
            <p className="font-manrope font-bold text-4xl text-black max-xl:text-center ">
              Products List
            </p>
            <input
              type="text"
              placeholder="Search your products..."
              className="w-[400px] outline-none border-2 rounded-md border-stone-300 border-solid text-base p-2"
            />
            <div className="flex gap-7">
              <div className="flex gap-4 items-center">
                <p>Sort by</p>
                <select
                  name=""
                  id=""
                  className="p-1 border-2 rounded-md border-stone-300 border-solid"
                >
                  <option value="">Cheapest</option>
                  <option value="">Cheapest</option>
                  <option value="">Cheapest</option>
                </select>
              </div>
              <div className="flex items-center justify-center p-2 border-2 rounded-md border-stone-300 border-solid">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-6 w-6 text-indigo-500"
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
                    <path d="M5.5 5h13a1 1 0 0 1 0.5 1.5L14 12L14 19L10 16L10 12L5 6.5a1 1 0 0 1 0.5 -1.5" />
                  </svg>
                  <select name="" id="" className="border-none bg-transparent">
                    <option value="">100-200</option>
                    <option value="">100-200</option>
                    <option value="">100-200</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            <a
              href="javascript:;"
              className="relative bg-cover group rounded-lg bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer"
            >
              <img
                src="https://pagedone.io/asset/uploads/1700731972.png"
                alt="Jacket image"
              />
              <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-lg shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                <div className="flex items-center justify-between mb-2">
                  <h6 className="font-semibold text-base leading-7 text-black ">
                    Trendy Jacket
                  </h6>
                  <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">
                    $100
                  </h6>
                </div>

                <div className="flex justify-between">
                  <p className="text-xs leading-5 text-gray-500">
                    Women's Winter Wear
                  </p>
                  <div className="flex gap-2 items-center">
                    <svg
                      className="size-6 text-indigo-500  hover:text-white hover:bg-red-400 border-2 border-solid rounded-full"
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
                      <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
                    </svg>
                    <svg
                      className="h-6 w-6 text-indigo-500 border-2 border-solid  hover:text-white hover:bg-indigo-500 rounded-full "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="javascript:;"
              className="relative bg-cover group rounded-lg bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer"
            >
              <img
                src="https://pagedone.io/asset/uploads/1700731972.png"
                alt="Jacket image"
              />
              <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-lg shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                <div className="flex items-center justify-between mb-2">
                  <h6 className="font-semibold text-base leading-7 text-black ">
                    Trendy Jacket
                  </h6>
                  <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">
                    $100
                  </h6>
                </div>

                <div className="flex justify-between">
                  <p className="text-xs leading-5 text-gray-500">
                    Women's Winter Wear
                  </p>
                  <div className="flex gap-2 items-center">
                    <svg
                      className="size-6 text-indigo-500  hover:text-white hover:bg-red-400 border-2 border-solid rounded-full"
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
                      <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
                    </svg>
                    <svg
                      className="h-6 w-6 text-indigo-500 border-2 border-solid  hover:text-white hover:bg-indigo-500 rounded-full "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
